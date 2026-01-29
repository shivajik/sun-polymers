import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, TrendingUp, Globe } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Internationally recognized quality management system certification ensuring consistent product quality.",
  },
  {
    icon: Star,
    title: "Industry Pioneer",
    description: "First to introduce highly technical & import substitute customised products of international quality.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Regular introduction of new products and processes through continuous improvement programs.",
  },
  {
    icon: Globe,
    title: "Import Substitution",
    description: "Successfully replacing imported products with locally manufactured alternatives of equal quality.",
  },
];

const stats = [
  { value: "1990", label: "Established" },
  { value: "35+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "1000+", label: "Products Delivered" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Our Achievements
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            A Legacy of <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Over 28 years of commitment to quality, innovation, and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-primary rounded-3xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group flex gap-6 bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
