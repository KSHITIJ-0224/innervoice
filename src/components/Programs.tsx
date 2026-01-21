import { useEffect, useState } from "react";
import { BookOpen, Droplets, Shirt, Heart, Sun, GraduationCap } from "lucide-react";
import donationImage from "@/assets/donation-event.jpg";
import stationaryImage from "@/assets/stationary-donation.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Educational Support",
    description: "Providing notebooks, stationery materials, and school infrastructure to underprivileged children.",
  },
  {
    icon: Shirt,
    title: "School Uniforms",
    description: "Distributing school uniforms and footwear to children in rural areas.",
  },
  {
    icon: Droplets,
    title: "Clean Water Initiative",
    description: "Installing water purifiers and storage tanks in schools for safe drinking water.",
  },
  {
    icon: Sun,
    title: "Solar Water Heaters",
    description: "Providing solar water heaters to schools in remote parts of Maharashtra.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Program",
    description: "Extending scholarships to at least 5 deserving students every year.",
  },
  {
    icon: Heart,
    title: "Blood Donation Camps",
    description: "Organizing annual blood donation camps to serve community.",
  },
];

const Programs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="programs" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Initiatives That Make a Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Through our diverse programs, we address critical issues faced by underprivileged 
            children in rural Maharashtra, providing educational materials, basic amenities, and infrastructure.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-700 group transform hover:scale-105 hover:-translate-y-1 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary">
                <program.icon className="w-6 h-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-700 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={donationImage}
              alt="Donation event with children"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="font-display font-bold text-xl text-primary-foreground mb-1">
                Stationery Distribution
              </h4>
              <p className="text-sm text-primary-foreground/80">
                Providing essential school supplies to children
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={stationaryImage}
              alt="Stationary donation program"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="font-display font-bold text-xl text-primary-foreground mb-1">
                Community Support
              </h4>
              <p className="text-sm text-primary-foreground/80">
                Working together for sustainable change
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
