import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Tv, 
  Briefcase, 
  Pencil, 
  Zap, 
  Phone, 
  Sprout, 
  Volleyball,
  Wrench 
} from "lucide-react";

const industries = [
  { icon: Tv, name: "Appliances", description: "Home & kitchen appliances" },
  { icon: Briefcase, name: "Luggage", description: "Travel & industrial cases" },
  { icon: Pencil, name: "Stationery", description: "Office & school supplies" },
  { icon: Zap, name: "Electrical", description: "Electrical components" },
  { icon: Phone, name: "Telecom", description: "Telecommunication parts" },
  { icon: Sprout, name: "Agriculture", description: "Farming equipment" },
  { icon: Volleyball, name: "Sports", description: "Sports equipment" },
  { icon: Wrench, name: "Ancillary", description: "Support industries" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Serving <span className="text-accent">Diverse Industries</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our expertise spans across multiple sectors, providing tailored solutions 
            for each industry's unique requirements.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/10 hover:border-accent/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-foreground mb-1">
                {industry.name}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
