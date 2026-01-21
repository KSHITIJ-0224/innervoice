import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Aaditya Vishway Complex, Chandroday, E-102, Katrap, Badlapur, Thane - 421503",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9004411533 / 9004411600 / 8976908090",
    href: "tel:9004411533",
  },
  {
    icon: Mail,
    label: "Email",
    value: "innervoicefoundation2016@gmail.com",
    href: "mailto:innervoicefoundation2016@gmail.com",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/groups/innervoicemumbai", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/innervoice_social_foundation", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to make a difference? Reach out to us to learn more about volunteering, 
            corporate partnerships, or making a donation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-card rounded-2xl p-8 shadow-soft transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:border-primary"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:border-primary"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:border-primary"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:border-primary"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 focus:border-primary"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 transform ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className={`flex gap-4 transition-all duration-700 delay-${500 + index * 100} transform hover:scale-105 ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Corporate CSR */}
            <div className="bg-accent/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-elevated hover:scale-105">
              <h4 className="font-display font-bold text-lg text-foreground mb-3">
                Corporate Engagement
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                We're registered for accepting funds from corporates for CSR activities. 
                Partner with us for meaningful social impact.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Transparent fund utilization with audited accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Employee engagement activities and field visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Detailed impact reports for your stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
