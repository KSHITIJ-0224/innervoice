import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
