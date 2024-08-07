import Container from "@/app/_components/container";
import About from "./_components/about";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";
import Experience from "./_components/experience";

export default function Index() {
  return (
    <main>
      <Container>
        <Navbar />
        <About />
        <Projects />
        <Experience />
      </Container>
    </main>
  );
}
