import {
  Navbar,
  Home,
  Projects,
  Skills,
  Gallery,
  Footer,
} from "../components";
import { SectionNavProvider, Section } from "@/components/scroll/section-nav";
import { getGalleryPhotos } from "@/lib/cloudinary";

const SECTION_COUNT = 5;

export const revalidate = 60;

export default async function Anurag() {
  const photos = await getGalleryPhotos();

  return (
    <SectionNavProvider count={SECTION_COUNT}>
      <Navbar />
      <Section id="home" index={0}>
        <Home />
      </Section>
      <Section id="skills" index={1}>
        <Skills />
      </Section>
      <Section id="projects" index={2}>
        <Projects />
      </Section>
      <Section id="gallery" index={3}>
        <Gallery photos={photos} />
      </Section>
      <Section id="contact" index={4}>
        <Footer />
      </Section>
    </SectionNavProvider>
  );
}
