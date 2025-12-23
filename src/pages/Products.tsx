import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";

const Products = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sun Polymers Products & Services",
    description: "Comprehensive plastic injection moulding products and services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Custom Plastic Components",
        description: "Precision-engineered plastic components tailored to exact specifications",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industrial Assemblies",
        description: "Complete assembly solutions for complex industrial applications",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mould Design & Manufacturing",
        description: "Expert mould design and manufacturing for optimal production efficiency",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Import Substitute Products",
        description: "High-quality local alternatives to imported components",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Products & Services | Sun Polymers - Custom Plastic Injection Moulding</title>
        <meta
          name="description"
          content="Explore Sun Polymers' comprehensive range of plastic injection moulding products and services. Custom components, industrial assemblies, mould design, and import substitutes."
        />
        <meta
          name="keywords"
          content="plastic injection moulding products, custom plastic components, industrial assemblies, mould design India, plastic manufacturing services"
        />
        <link rel="canonical" href="https://sunpolymers.in/products" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/products" />
        <meta property="og:title" content="Products & Services | Sun Polymers" />
        <meta
          property="og:description"
          content="Custom plastic components, industrial assemblies, and mould design services from ISO 9001:2015 certified manufacturer."
        />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Page Hero */}
          <section className="bg-primary py-20 lg:py-28">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                What We Offer
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Products & <span className="text-accent">Services</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Comprehensive manufacturing solutions for your plastic product needs
              </p>
            </div>
          </section>

          <ProductsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
