import { useEffect, useState } from "react";
import { ArrowRight, Heart, CheckCircle, Shield, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/DonationForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  "Tax benefits under section 80G of the Income Tax Act",
  "CSR License: CSR00058359",
  "Transparent fund utilization with audited accounts",
  "Detailed impact reports for donors",
  "Direct impact on underprivileged children's education",
  "Regular updates on how your donation is making a difference",
];

const impactAreas = [
  {
    icon: BookOpen,
    title: "Educational Support",
    description: "Providing books, uniforms, and learning materials to underprivileged children",
    amount: "₹1,000"
  },
  {
    icon: Users,
    title: "Health & Nutrition",
    description: "Ensuring access to basic healthcare and nutritious meals for children",
    amount: "₹500"
  },
  {
    icon: Heart,
    title: "Infrastructure",
    description: "Building and maintaining school facilities in rural areas",
    amount: "₹2,000"
  }
];

const Donate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Make a Difference Today</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Support Our{" "}
              <span className="text-accent">Mission</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Your generous contribution helps us empower underprivileged children across Maharashtra 
              through education, healthcare, and essential support. Every donation counts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {impactAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`bg-card p-6 rounded-xl shadow-soft transition-all duration-700 delay-${index * 100} transform hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                  <p className="text-accent font-bold">Starting from {area.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 transform ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  The Power of ₹100
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Small Acts, Big Impact
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our members contribute just ₹100 monthly, demonstrating how small donations 
                  can catalyze significant change. This collective effort, "The Power of 100," 
                  exemplifies the impact of community-driven support.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every contribution helps us reach more children, provide educational materials, 
                  and build infrastructure in rural schools across Maharashtra.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">Why Donate With Us?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li
                      key={benefit}
                      className={`flex items-start gap-3 transition-all duration-700 delay-${400 + index * 50} transform ${
                        isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${400 + index * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust & Transparency */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">Trust & Transparency</h3>
                    <p className="text-muted-foreground text-sm">
                      Your donations are used responsibly and transparently
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-background rounded-lg p-3">
                    <p className="font-semibold text-foreground">85%</p>
                    <p className="text-muted-foreground">Direct Program Impact</p>
                  </div>
                  <div className="bg-background rounded-lg p-3">
                    <p className="font-semibold text-foreground">15%</p>
                    <p className="text-muted-foreground">Administrative Costs</p>
                  </div>
                </div>
              </div>

              {/* Bank Details Card */}
              <div className="bg-primary rounded-2xl p-6 shadow-elevated text-primary-foreground">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Bank Transfer</h3>
                    <p className="text-primary-foreground/70 text-sm">
                      Prefer manual transfer? Use these details
                    </p>
                  </div>
                </div>

                <div className="space-y-3 bg-primary-foreground/10 rounded-xl p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Account Name</span>
                    <span className="font-medium">Inner Voice Social Welfare Foundation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Account No.</span>
                    <span className="font-mono font-medium">692202010005646</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Bank</span>
                    <span className="font-medium">Union Bank of India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">IFSC</span>
                    <span className="font-mono font-medium">UBIN0569224</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Branch</span>
                    <span className="font-medium">Kharghar</span>
                  </div>
                </div>

                <p className="text-xs text-primary-foreground/50 mt-4 text-center">
                  Registration No: F - 40443 Thane
                </p>
              </div>
            </div>

            {/* Donation Form */}
            <div className={`transition-all duration-1000 delay-500 transform ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-700 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 transition-transform duration-300 group-hover:scale-110">
                  5000+
                </div>
                <p className="text-muted-foreground">Children Educated</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 transition-transform duration-300 group-hover:scale-110">
                  44+
                </div>
                <p className="text-muted-foreground">Schools Supported</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 transition-transform duration-300 group-hover:scale-110">
                  100%
                </div>
                <p className="text-muted-foreground">Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
