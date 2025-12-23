import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/productCategories";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sun Polymers Products",
    description: "Comprehensive plastic injection moulding products across multiple sectors",
    itemListElement: productCategories.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.description,
      url: `https://sunpolymers.in/products/${product.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Products | Sun Polymers - Complete Plastic Moulding Solutions</title>
        <meta
          name="description"
          content="Explore Sun Polymers' comprehensive range of plastic injection moulding products for automotive, electrical, furniture, agriculture, and more. ISO 9001:2015 certified manufacturer."
        />
        <meta
          name="keywords"
          content="plastic injection moulding products, automotive plastic parts, electrical components, furniture plastic, agriculture plastic, luggage components, dispenser pumps India"
        />
        <link rel="canonical" href="https://sunpolymers.in/products" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/products" />
        <meta property="og:title" content="Products | Sun Polymers" />
        <meta
          property="og:description"
          content="Complete range of plastic injection moulding products across multiple industry sectors."
        />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Page Hero */}
          <section className="bg-primary py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Our Product Range
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Explore Our <span className="text-accent">Products</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Comprehensive plastic injection moulding solutions across diverse industry sectors, 
                each crafted with precision and quality.
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-20 lg:py-32 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                    >
                      <Link
                        to={`/products/${product.slug}`}
                        className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 h-full"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-accent-foreground" />
                        </div>
                        
                        <h2 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                          {product.name}
                        </h2>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-accent text-sm font-medium">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-industrial">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We specialize in custom plastic solutions. Contact us to discuss your specific requirements.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
