import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Users, Heart } from "lucide-react";

const strengths = [
  {
    icon: Package,
    title: "One Stop Solution Company",
    description:
      "Our customers look towards us as a one stop solution company for all their requirement ranging from product design to supply of finish products and assemblies.",
    details:
      "This \"One-Stop\" strategy shortens procurement lead time by eliminating logistics problem related to the use of multiple suppliers, reduces the unit cost of the product through saving on handling expenses and meet the customer's needs for a comprehensive range of products and services.",
  },
  {
    icon: Users,
    title: "Experienced Management Team",
    description:
      "Our Managing Partner Mr. Sanjay S. Mantri has around thirty years of experience in the Industry after completion of post graduate diploma in Plastic Engineering from (CIPET Chennai) after completion of B.E. (Mech).",
    details:
      "Besides the Managing Partner, our other partner Mr. Ajay R. Maheshwari is a graduate in Engineering faculty and has got vast experience in the industry. Our Director Chartered Accountant Rohan Mantri, is proficient and experienced in financial and commercial front of the business. Moreover the Management team comprises of senior officers with individual experience ranging from fifteen to twenty years, in the manufacturing industry.",
  },
  {
    icon: Heart,
    title: "Good Customer Relationship",
    description:
      "Sun Polymers maintains close links with its customers via different network. This enables exhaustive discussions at every stage of the manufacturing process, thus ensuring quality and delivery as per customer requirement.",
    details:
      "The company also assists its customers in the product design stage to optimize the mould construction, to reduce the cost and complexity of the mould.",
  },
];

const StrengthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-gradient-industrial relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Competitive <span className="text-accent">Strength</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a free market economy, the customer demands the best price & service and is not concerned 
            whether products or machines are imported or indigenously manufactured. The only demand is 
            excellence in performance in every sense possible. This is the philosophy that drives Sun Polymers, 
            where Customised Industrial and Domestic Products are innovated from concept to manufacturing, 
            to deliver customer delight each and every time.
          </p>
          <p className="text-muted-foreground mt-4">
            As an advanced injection moulding unit, Sun Polymers has developed the following competitive strengths.
          </p>
        </motion.div>

        {/* Strength Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <strength.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {strength.description}
                  </p>
                  <p className="text-muted-foreground/80 leading-relaxed text-sm">
                    {strength.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
