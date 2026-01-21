import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning in classroom"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6 transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Estd. 2016 | We Rise By Lifting Others</span>
          </div>

          <h1
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-100 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Inner Voice{" "}
            <span className="block text-accent">Social Welfare Foundation</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed transition-all duration-700 delay-200 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Empowering underprivileged children across Maharashtra through education, 
            healthcare, and essential support. Together, we're building brighter futures.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <Link to="/donate">
              <Button variant="hero" size="xl" className="group">
                Donate Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 transition-all duration-700 delay-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-1">
                <Users className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">5000+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Children Impacted</p>
            </div>
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-1">
                <BookOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">44+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Projects Completed</p>
            </div>
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-1">
                <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Active Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
