import Container from "@/app/_components/container";
import About from "./_components/about";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";

export default function Index() {
  return (
    <main>
      <Container>
        <Navbar />
        <About />
        <Projects />
      </Container>
    </main>
  );
}
