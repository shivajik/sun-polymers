import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/IndustriesSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const industryDetails = [
  {
    name: "Appliances",
    description: "Manufacturing precision plastic components for home and kitchen appliances including refrigerators, washing machines, air conditioners, and small kitchen appliances.",
  },
  {
    name: "Luggage & Travel",
    description: "Durable plastic parts for travel bags, suitcases, industrial cases, and storage solutions with high impact resistance.",
  },
  {
    name: "Stationery",
    description: "High-quality plastic products for office and school supplies including pen holders, file organizers, and desk accessories.",
  },
  {
    name: "Electrical & Electronics",
    description: "Precision components for electrical enclosures, switches, connectors, and electronic device housings with excellent insulation properties.",
  },
  {
    name: "Telecommunication",
    description: "Specialized parts for telecom equipment, cable management systems, and network infrastructure components.",
  },
  {
    name: "Agriculture",
    description: "Robust agricultural components including irrigation fittings, sprayer parts, and farming equipment accessories.",
  },
  {
    name: "Sports",
    description: "Durable plastic components for sports equipment, fitness gear, and recreational products.",
  },
  {
    name: "Ancillary Industries",
    description: "Support components for various industrial applications and machinery parts across multiple sectors.",
  },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Sun Polymers - Multi-Sector Plastic Solutions</title>
        <meta
          name="description"
          content="Sun Polymers serves diverse industries including appliances, electronics, agriculture, sports, and more with customized plastic injection moulding solutions."
        />
        <meta
          name="keywords"
          content="plastic components appliances, electrical plastic parts, agriculture plastic products, industrial plastic manufacturer India"
        />
        <link rel="canonical" href="https://sunpolymers.in/industries" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/industries" />
        <meta property="og:title" content="Industries We Serve | Sun Polymers" />
        <meta
          property="og:description"
          content="Serving diverse industries with customized plastic injection moulding solutions since 1990."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Page Hero */}
          <section className="bg-primary py-20 lg:py-28">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Our Expertise
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Industries <span className="text-accent">We Serve</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Tailored plastic solutions for diverse industry requirements
              </p>
            </div>
          </section>

          <IndustriesSection />

          {/* Detailed Industry Info */}
          <section className="py-20 lg:py-32 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Industry-Specific <span className="text-accent">Solutions</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  We understand the unique requirements of each industry and deliver customized solutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {industryDetails.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Discuss Your Industry Needs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Industries;
