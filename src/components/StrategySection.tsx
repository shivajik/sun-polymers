import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Handshake } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    title: "Capacity Expansion",
    description:
      "Sun Polymers will be investing in new machinery and equipment to expand its manufacturing capacity and capability, so as to be in inline with and ahead of customers demands.",
  },
  {
    icon: Handshake,
    title: "Value-Added Service to Existing Customers",
    description:
      "Clients for the customized products, plastics moulding segment are increasingly outsourcing the parts for their assembly process. In response to this trend, Sun Polymers has started providing sub-assembly and assembly services to its customers. Although these sub-assembly operations will not be immediately profit generating for the company, it will be conducive in providing a comprehensive range of value-added services to our clients.",
  },
];

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="text-accent">Strategy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sun Polymers has adopted the following strategies to achieve its prospective plans.
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <strategy.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                {strategy.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
