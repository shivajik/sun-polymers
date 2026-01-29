import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Ruler, Factory, Info } from "lucide-react";
import factoryExterior from "@/assets/facility/factory-exterior.jpg";
import manufacturingFloor from "@/assets/facility/manufacturing-floor.jpg";

const facilities = [
  {
    id: 1,
    location: "Jalna, Maharashtra, India",
    totalArea: "40,000",
    constructedArea: "25,000",
  },
  {
    id: 2,
    location: "Supa, Maharashtra, India",
    totalArea: "40,000",
    constructedArea: "7,000",
  },
];

const FacilitySection = () => {
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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Our Infrastructure
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Manufacturing <span className="text-accent">Facility</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sun Polymers has got manufacturing facility at following locations which use state of the art 
            techniques and production process that form benchmarks of quality and efficiency.
          </p>
        </motion.div>

        {/* Facility Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium"
          >
            <img
              src={factoryExterior}
              alt="Sun Polymers Factory Exterior - Manufacturing facility in Jalna, Maharashtra"
              loading="lazy"
              decoding="async"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-medium"
          >
            <img
              src={manufacturingFloor}
              alt="Sun Polymers Manufacturing Floor - Injection moulding machines in operation"
              loading="lazy"
              decoding="async"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>

        {/* Facility Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden mb-8"
        >
          {/* Table Header */}
          <div className="bg-primary p-4">
            <div className="grid grid-cols-4 gap-4 text-primary-foreground font-heading font-semibold text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">#</span>
                <span>Sr. No.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 hidden sm:block" />
                <span>Plant Location</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 hidden sm:block" />
                <span>Total Area Sq. Ft.</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 hidden sm:block" />
                <span>Constructed Area Sq. Ft.</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={`grid grid-cols-4 gap-4 p-4 ${
                index % 2 === 0 ? "bg-background" : "bg-muted/30"
              } border-b border-border/30 last:border-b-0`}
            >
              <div className="font-semibold text-foreground">{facility.id}</div>
              <div className="text-foreground">{facility.location}</div>
              <div className="text-foreground font-medium">{facility.totalArea}</div>
              <div className="text-foreground font-medium">{facility.constructedArea}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Machinery Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-accent/10 rounded-2xl p-6 border border-accent/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Factory className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                Advanced Manufacturing Equipment
              </h4>
              <p className="text-muted-foreground">
                Injection Moulding Machines ranging from <span className="font-semibold text-accent">80T to 850T</span>, 
                equipped with state-of-the-art technology to handle diverse product requirements with precision and efficiency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitySection;
