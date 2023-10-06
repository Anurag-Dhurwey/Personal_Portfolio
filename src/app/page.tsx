
import { Navbar, Home, Projects, Skills, Contact, Footer,About, About_education } from "../components";
export default function Anurag() {
  return (
    <main className="min-h-screen">
     <Navbar />
      <Home/>
      <Skills/>
      <Projects/>
      {/* <About/> */}
      <About_education/>
      <Contact/>
      <Footer/>
    </main>
  );
}
