import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Factory, Users } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import { Link } from "react-router-dom";

const stats = [
  { icon: Factory, value: "34+", label: "Years Experience" },
  { icon: Award, value: "ISO", label: "9001:2015 Certified" },
  { icon: Users, value: "100+", label: "Clients Served" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sun Polymers manufacturing facility with injection moulding machines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
              🏭 Trusted Since 1990 | Jalna, Maharashtra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 drop-shadow-lg"
          >
            Precision{" "}
            <span className="text-accent drop-shadow-md">Plastic Injection</span>{" "}
            Moulding Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Manufacturing customised industrial & domestic plastic products with world-class 
            quality. Serving Appliances, Electronics, Agriculture, Sports, and more with 
            ISO 9001:2015 certified excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/products">
                Explore Products
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
