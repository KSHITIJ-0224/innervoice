import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { handleNavigationWithHash } from "@/utils/scrollUtils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Impact", href: "/#impact" },
  { name: "Programs", href: "/#programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      handleNavigationWithHash(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-foreground leading-tight">
                Inner Voice
              </h1>
              <p className="text-xs text-muted-foreground">Social Welfare Foundation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9004411533" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">9004411533</span>
            </a>
            <Link to="/donate">
              <Button variant="accent" size="lg">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <nav className="container-narrow mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:9004411533" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">9004411533</span>
                </a>
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  <Button variant="accent" className="w-full">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
