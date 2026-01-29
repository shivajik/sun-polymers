import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import clientsLogos from "@/assets/clients/clients-logos.jpeg";

const Clients = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sunpolymers.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Clients",
        item: "https://sunpolymers.in/clients",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Our Clients | Sun Polymers - Trusted by Leading Brands</title>
        <meta
          name="description"
          content="Sun Polymers is trusted by industry leaders including VIP, Siemens, Safari, Godrej, Wipro, TDK, Lupin and many more. Explore our prestigious client portfolio."
        />
        <meta
          name="keywords"
          content="Sun Polymers clients, plastic moulding clients India, manufacturing partners, trusted plastic manufacturer, industrial clients Maharashtra"
        />
        <link rel="canonical" href="https://sunpolymers.in/clients" />
        
        {/* GEO Tags for Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalna" />
        <meta name="geo.position" content="19.8347;75.8816" />
        <meta name="ICBM" content="19.8347, 75.8816" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/clients" />
        <meta property="og:title" content="Our Clients | Sun Polymers" />
        <meta property="og:description" content="Trusted by leading brands across industries - VIP, Siemens, Safari, Godrej, Wipro, and more." />
        <meta property="og:image" content="https://sunpolymers.in/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Valued Partners
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Trusted by <span className="text-accent">Industry Leaders</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                For over three decades, Sun Polymers has been the preferred manufacturing partner 
                for some of India's most respected brands across diverse industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clients Logos Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <img
                  src={clientsLogos}
                  alt="Our Clients - VIP, Aristocrat, Siemens, NRB, Samsonite, Safari, Murugappa Group, Godrej, Maersk Medical, Mahyco, Nilkamal, Whirlpool, Rieter, Sterlite, TDK, Nirlep, Wipro, Kenstar, Lumax, Lupin, bpergo, Tecumseh, Jain Irrigation Systems"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Leading Brands Choose Us
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">35+</div>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">11</div>
                  <p className="text-sm text-muted-foreground">Industry Sectors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">ISO</div>
                  <p className="text-sm text-muted-foreground">9001:2015 Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Clients;
