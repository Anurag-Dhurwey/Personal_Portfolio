
import { Navbar, Home, Projects, Skills, Contact, Footer,About } from "../components";
export default function Anurag() {
  return (
    <main className="min-h-screen">
     <Navbar />
      <Home/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
