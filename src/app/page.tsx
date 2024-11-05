import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen flex justify-center text-foreground">
      <div className="flex flex-col justify-start w-[600px]">
        <Nav />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
