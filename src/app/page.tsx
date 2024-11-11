import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen flex justify-center text-foreground">
      <div className="flex flex-col justify-start w-full max-w-[600px] px-6 md:px-0">
        <Nav />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
