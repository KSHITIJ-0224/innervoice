import { useEffect, useState } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import volunteersImage from "@/assets/volunteers-helping.jpg";

const values = [
  { name: "Sincerity", icon: Heart },
  { name: "Integrity", icon: Target },
  { name: "Teamwork", icon: Users },
  { name: "Loyalty", icon: Eye },
];

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 transform ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src={volunteersImage}
                alt="Volunteers helping children"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div
              className={`absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-[200px] transition-all duration-1000 delay-300 transform hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-4xl font-display font-bold text-accent mb-1">8+</p>
              <p className="text-sm text-muted-foreground">Years of Dedicated Service</p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Empowering Communities Through Compassion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Inner Voice Social Welfare Foundation is a non-profit and non-governmental organization 
                established in 2016 and registered in 2019. Operating from Badlapur, Thane District, 
                we began as a group of 10 Central Railways Train Managers and have grown to a family 
                of over 500 passionate members.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our primary focus is education, facilitating the educational needs of underprivileged 
                children across rural Maharashtra. We believe genuine and lasting progress comes when 
                civil society actively engages in the development process.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-6 transition-all duration-300 hover:shadow-elevated hover:scale-105">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To overcome disparities in education so every child gets an opportunity to Learn, Grow, and Succeed.
                </p>
              </div>
              <div className="bg-secondary rounded-xl p-6 transition-all duration-300 hover:shadow-elevated hover:scale-105">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To reach at least 1000 underprivileged children every year and extend scholarships to deserving students.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Core Values</h4>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <div
                    key={value.name}
                    className={`flex items-center gap-2 bg-muted px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <value.icon className="w-4 h-4 transition-transform duration-300" />
                    <span className="text-sm font-medium">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
