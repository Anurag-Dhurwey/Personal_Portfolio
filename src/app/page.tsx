import Image from "next/image";
import { Navbar, Home, Projects, Skills, Contact, Footer,About } from "../components";
export default function Anurag() {
  return (
    <main className="min-h-screen">
     <Navbar />
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
