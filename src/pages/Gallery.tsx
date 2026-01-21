import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroChildren from "@/assets/hero-children.jpg";
import donationEvent from "@/assets/donation-event.jpg";
import programsPage from "@/assets/programs-page.jpg";
import stationaryDonation from "@/assets/stationary-donation.jpg";
import volunteersHelping from "@/assets/volunteers-helping.jpg";

const categories = [
  { id: "all", name: "All" },
  { id: "education", name: "Education" },
  { id: "events", name: "Events" },
  { id: "volunteers", name: "Volunteers" },
  { id: "donations", name: "Donations" },
];

const galleryItems = [
  {
    id: 1,
    src: heroChildren,
    alt: "Children learning together",
    category: "education",
    title: "Education Program",
    description: "Students engaged in learning activities",
  },
  {
    id: 2,
    src: donationEvent,
    alt: "Donation event",
    category: "events",
    title: "Annual Donation Drive",
    description: "Community members coming together",
  },
  {
    id: 3,
    src: programsPage,
    alt: "Programs in action",
    category: "education",
    title: "Skills Development",
    description: "Training sessions for youth",
  },
  {
    id: 4,
    src: stationaryDonation,
    alt: "Stationary donation",
    category: "donations",
    title: "School Supplies Drive",
    description: "Distributing educational materials",
  },
  {
    id: 5,
    src: volunteersHelping,
    alt: "Volunteers helping",
    category: "volunteers",
    title: "Volunteer Day",
    description: "Our dedicated volunteers in action",
  },
  {
    id: 6,
    src: heroChildren,
    alt: "Community gathering",
    category: "events",
    title: "Community Outreach",
    description: "Connecting with local communities",
  },
  {
    id: 7,
    src: donationEvent,
    alt: "Food distribution",
    category: "donations",
    title: "Food Distribution",
    description: "Providing meals to those in need",
  },
  {
    id: 8,
    src: volunteersHelping,
    alt: "Teaching session",
    category: "volunteers",
    title: "Teaching Initiative",
    description: "Volunteers teaching underprivileged children",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Gallery
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Moments of <span className="text-primary">Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our journey through images — from education programs to community events, 
                witness the change we're creating together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="flex-shrink-0"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full mb-2 capitalize">
                          {item.category}
                        </span>
                        <h3 className="text-white font-semibold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Photos Captured" },
                { value: "50+", label: "Events Documented" },
                { value: "14", label: "Districts Covered" },
                { value: "1000+", label: "Lives Touched" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2 capitalize">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-semibold text-xl mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
