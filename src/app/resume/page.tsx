import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { getResumes } from "@/lib/cloudinary";

export const revalidate = 60;

export default async function ResumePage() {
  const resumes = await getResumes();
  const latest = resumes[0];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-10 md:px-10">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div>
        <span className="text-xs text-syntax-comment">{"// My-Portfolio/resume"}</span>
        <h1 className="mt-2 text-3xl font-bold">Resume</h1>
      </div>

      {resumes.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No resume uploaded in Cloudinary yet.
        </p>
      )}

      {resumes.length > 1 && (
        <ul className="flex flex-wrap gap-2">
          {resumes.map((resume) => (
            <li key={resume.url}>
              <a
                href={resume.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {resume.title}
              </a>
            </li>
          ))}
        </ul>
      )}

      {latest && (
        <>
          <a
            href={latest.url}
            download={latest.filename}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Download PDF
            <Download className="h-4 w-4" />
          </a>
          <iframe
            src={latest.url}
            title={latest.title}
            className="h-[max(100svh,calc(min(100vw,56rem)*1.5))] min-h-[100svh] w-full rounded-xl border border-border bg-card"
          />
        </>
      )}
    </div>
  );
}
