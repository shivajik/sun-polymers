import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Zap, Package, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Package,
    title: "Custom Plastic Components",
    description: "Precision-engineered plastic components tailored to your exact specifications with tight tolerances.",
    features: ["High-precision moulding", "Custom designs", "Multiple materials"],
  },
  {
    icon: Cog,
    title: "Industrial Assemblies",
    description: "Complete assembly solutions for complex industrial applications requiring multiple components.",
    features: ["Multi-part assemblies", "Quality testing", "Just-in-time delivery"],
  },
  {
    icon: Settings,
    title: "Mould Design & Manufacturing",
    description: "Expert mould design and manufacturing for optimal production efficiency and product quality.",
    features: ["CAD/CAM design", "Rapid prototyping", "Tooling solutions"],
  },
  {
    icon: Zap,
    title: "Import Substitute Products",
    description: "High-quality local alternatives to imported components, meeting international standards.",
    features: ["Cost-effective", "International quality", "Local support"],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Our Products & Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive <span className="text-accent">Manufacturing Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From custom plastic components to complete industrial assemblies, we deliver 
            precision-engineered solutions for diverse industry needs.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Discuss Your Requirements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
