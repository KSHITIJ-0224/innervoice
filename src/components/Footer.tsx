import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Inner Voice</h3>
                <p className="text-xs text-primary-foreground/60">Social Welfare Foundation</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A non-profit organization dedicated to empowering underprivileged children 
              through education and support since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#impact" className="hover:text-accent transition-colors">Our Impact</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Badlapur, Thane - 421503</li>
              <li>Maharashtra, India</li>
              <li>
                <a href="tel:9004411533" className="hover:text-accent transition-colors">
                  +91 9004411533
                </a>
              </li>
              <li>
                <a href="mailto:innervoicefoundation2016@gmail.com" className="hover:text-accent transition-colors">
                  innervoicefoundation2016@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Inner Voice Social Welfare Foundation. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Reg No: F - 40443 Thane | CSR: CSR00058359
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
