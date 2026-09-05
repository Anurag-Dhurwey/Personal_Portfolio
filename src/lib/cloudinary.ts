import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export function isCloudinaryConfigured() {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  );
}

export type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
  format?: string;
  filename?: string;
  created_at?: string;
  resource_type?: string;
};

let warnedMissingEnv = false;

async function listByPrefix(
  prefix: string,
  resourceType: "image" | "raw"
): Promise<CloudinaryResource[]> {
  if (!isCloudinaryConfigured()) {
    if (!warnedMissingEnv) {
      console.warn("Cloudinary env vars are missing; skipping fetch.");
      warnedMissingEnv = true;
    }
    return [];
  }

  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix,
      resource_type: resourceType,
      max_results: 100,
    });
    return (result.resources ?? []) as CloudinaryResource[];
  } catch (error) {
    console.error(`Cloudinary list failed for ${resourceType}:${prefix}`, error);
    return [];
  }
}

function displayName(resource: CloudinaryResource) {
  const fromId = resource.public_id.split("/").pop() ?? resource.public_id;
  return resource.filename || fromId.replace(/[-_]/g, " ");
}

async function listFirstMatch(
  folders: string[],
  resourceType: "image" | "raw"
) {
  for (const folder of [...new Set(folders.filter(Boolean))]) {
    const resources = await listByPrefix(folder, resourceType);
    if (resources.length > 0) return resources;
  }
  return [];
}

export async function getGalleryPhotos() {
  const resources = await listFirstMatch(
    [
      process.env.CLOUDINARY_GALLERY_FOLDER ?? "",
      "My-portfolio/galary",
      "My-Portfolio/galary",
    ],
    "image"
  );

  return resources
    .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""))
    .map((img) => ({
      src: img.secure_url,
      alt: displayName(img),
      width: img.width || 800,
      height: img.height || 800,
    }));
}

export async function getResumes() {
  const folders = [
    process.env.CLOUDINARY_RESUME_FOLDER ?? "",
    "My-Portfolio/resume",
    "My-portfolio/resume",
  ];
  const [rawFiles, imagePdfs] = await Promise.all([
    listFirstMatch(folders, "raw"),
    listFirstMatch(folders, "image"),
  ]);

  const pdfs = [...rawFiles, ...imagePdfs].filter((file) =>
    (file.format ?? file.secure_url).toLowerCase().includes("pdf")
  );

  const seen = new Set<string>();
  return pdfs
    .filter((file) => {
      if (seen.has(file.public_id)) return false;
      seen.add(file.public_id);
      return true;
    })
    .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""))
    .map((file) => ({
      title: displayName(file),
      url: file.secure_url,
      filename: `${displayName(file)}.pdf`,
    }));
}

export { cloudinary };
