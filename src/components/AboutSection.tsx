import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "One Stop Solution",
    description: "From product design to supply of finished products and assemblies",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Introducing highly technical & import substitute products of international quality",
  },
  {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    description: "Environmental friendly practices with constant upgrading and training at all levels",
  },
];

const highlights = [
  "35+ years of manufacturing excellence",
  "Customised industrial & domestic products",
  "Import substitute products of international quality",
  "Highly experienced technical workforce",
  "State-of-the-art infrastructure",
  "Design for manufacturability expertise",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              About Sun Polymers
            </span>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Pioneer in Plastic
              <span className="text-accent"> Injection Moulding</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established in 1990, Sun Polymers has been a pioneer in manufacturing customised 
              industrial and domestic products, injection moulding of high precision plastics products, 
              assemblies and moulds for Appliances, Luggage, Stationery, Electrical & Electronics, 
              Telecommunication, Agriculture, Sports sector and other ancillary sectors.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 35 years of experience in design for manufacturability and production, 
              we are supported by excellent infrastructure and highly experienced technical workforce 
              to undertake jobs of highly complex nature. We are committed to establishing the highest 
              industry standards through continuous improvement and teamwork.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary rounded-2xl p-8 text-center"
            >
              <div className="font-heading font-bold text-5xl text-accent mb-2">35+</div>
              <div className="text-primary-foreground text-lg">Years of Excellence</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Since 1990</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
