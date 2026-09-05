import {
  Navbar,
  Home,
  Projects,
  Skills,
  Gallery,
  Footer,
} from "../components";
import { SectionNavProvider, Section } from "@/components/scroll/section-nav";

const SECTION_COUNT = 5;

export default function Anurag() {
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
        <Gallery />
      </Section>
      <Section id="contact" index={4}>
        <Footer />
      </Section>
    </SectionNavProvider>
  );
}
