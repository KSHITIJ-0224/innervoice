import { useEffect, useState } from "react";
import { Users, Utensils, Heart, MapPin, Building, Droplets } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Children Impacted",
    description: "Students across rural Maharashtra",
  },
  {
    icon: Utensils,
    value: "10000+",
    label: "Meals Provided",
    description: "After-class meals distributed",
  },
  {
    icon: Heart,
    value: "500+",
    label: "Active Members",
    description: "Passionate citizens involved",
  },
  {
    icon: MapPin,
    value: "14+",
    label: "Districts Covered",
    description: "Across Maharashtra state",
  },
  {
    icon: Building,
    value: "44+",
    label: "Schools Supported",
    description: "With infrastructure & supplies",
  },
  {
    icon: Droplets,
    value: "10000+",
    label: "Sanitary Napkins",
    description: "Distributed to communities",
  },
];

const Impact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="impact" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Transforming Lives, One Step at a Time
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Since 2016, we've invested over ₹50 lakh into various projects, 
            making a significant impact in rural Maharashtra communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-700 group transform hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <p className="text-4xl font-display font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <h3 className="font-semibold text-accent mb-1">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
