import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowRight, Factory, Cog, Package, Award, Target, Sparkles, Shield, Handshake, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickHighlights = [
  "ISO 9001:2015 Certified",
  "35+ Years of Excellence",
  "100+ Happy Clients",
  "Custom Mould Design",
];

const services = [
  { icon: Package, title: "Custom Components", description: "Precision plastic parts" },
  { icon: Cog, title: "Industrial Assemblies", description: "Complex multi-part solutions" },
  { icon: Factory, title: "Mould Manufacturing", description: "Expert tooling design" },
  { icon: Award, title: "Quality Assurance", description: "ISO certified processes" },
];

const missionPoints = [
  { icon: Target, text: "Create world-class Customised Industrial and Domestic Products, Plastics Components, Electroplated ABS Components, Precision Moulds and Assemblies" },
  { icon: Sparkles, text: "Meet Cost, Quality and Delivery requirements of customers" },
  { icon: Lightbulb, text: "Continuously Innovate and Improve" },
  { icon: Handshake, text: "Honor all commitments we undertake" },
];

const strengthPoints = [
  {
    icon: Package,
    title: "One-Stop Solution",
    description: "From product design to supply of finished products and assemblies - eliminating logistics problems and reducing costs",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Management with 35+ years of industry experience, backed by senior officers with 15-20 years expertise",
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO 9001:2015 certified with environmental friendly practices and constant upgrading at all levels",
  },
];

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sun Polymers",
    url: "https://sunpolymers.in",
    logo: "https://sunpolymers.in/logo.png",
    foundingDate: "1990",
    description:
      "Sun Polymers is a leading plastic injection moulding company in Jalna, Maharashtra with 35+ years of experience manufacturing customised industrial and domestic plastic products.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-55/2, Additional MIDC",
      addressLocality: "Jalna",
      addressRegion: "Maharashtra",
      postalCode: "431203",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98220-07676",
      email: "sales@sunpolymers.in",
      contactType: "sales",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sun Polymers",
    image: "https://sunpolymers.in/hero-manufacturing.jpg",
    "@id": "https://sunpolymers.in",
    url: "https://sunpolymers.in",
    telephone: "+91-98220-07676",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-55/2, Additional MIDC",
      addressLocality: "Jalna",
      addressRegion: "Maharashtra",
      postalCode: "431203",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.8347,
      longitude: 75.8816,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  return (
    <>
      <Helmet>
        <title>Sun Polymers | Plastic Injection Moulding Manufacturer in Jalna, Maharashtra</title>
        <meta
          name="description"
          content="Sun Polymers is an ISO 9001:2015 certified plastic injection moulding company in Jalna, Maharashtra. 35+ years experience manufacturing precision plastic products for appliances, electronics, agriculture & more."
        />
        <meta
          name="keywords"
          content="plastic injection moulding, plastic manufacturer India, injection moulding Jalna, plastic products Maharashtra, industrial plastic components, custom mould design, ISO certified plastic manufacturer"
        />
        <link rel="canonical" href="https://sunpolymers.in" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in" />
        <meta property="og:title" content="Sun Polymers | Leading Plastic Injection Moulding Manufacturer" />
        <meta
          property="og:description"
          content="ISO 9001:2015 certified manufacturer of precision plastic products with 35+ years of experience."
        />
        <meta property="og:image" content="https://sunpolymers.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun Polymers | Plastic Injection Moulding Manufacturer" />
        <meta
          name="twitter:description"
          content="ISO 9001:2015 certified manufacturer of precision plastic products with 35+ years of experience."
        />

        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalna" />
        <meta name="geo.position" content="19.8347;75.8816" />
        <meta name="ICBM" content="19.8347, 75.8816" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          
          {/* About Company Section */}
          <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left - About & Mission */}
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
                    assemblies and moulds for diverse sectors.
                  </p>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    With over 35 years of experience in design for manufacturability and production, 
                    we are supported by excellent infrastructure and highly experienced technical workforce 
                    to undertake jobs of highly complex nature.
                  </p>

                  {/* Mission Points */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4">Our Mission</h3>
                    {missionPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <point.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">{point.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right - Strength Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                  ref={ref}
                >
                  {strengthPoints.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <strength.icon className="w-7 h-7 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                            {strength.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
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

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
              >
                <Button variant="accent" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Quick Highlights Section */}
          <section className="py-16 bg-gradient-industrial relative overflow-hidden">
            <div className="absolute inset-0 industrial-pattern opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                  Why Choose <span className="text-accent">Sun Polymers?</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {quickHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="accent" size="lg" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote
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

export default Home;
