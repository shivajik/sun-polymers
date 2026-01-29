import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProductBySlug, productCategories } from "@/data/productCategories";
import { constructionProducts } from "@/data/constructionProducts";
import { furnitureProducts } from "@/data/furnitureProducts";
import { automotiveProducts } from "@/data/automotiveProducts";
import { agricultureProducts } from "@/data/agricultureProducts";
import { dispenserProducts } from "@/data/dispenserProducts";
import { electricalProducts } from "@/data/electricalProducts";
import { mouldProducts } from "@/data/mouldProducts";
import { luggageProducts } from "@/data/luggageProducts";
import { learningBlocksProducts } from "@/data/learningBlocksProducts";
import { otherProducts } from "@/data/otherProducts";
import { stationeryProducts } from "@/data/stationeryProducts";
import { capsClosuresProducts } from "@/data/capsClosuresProducts";

const ProductCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = product.icon;

  // Find adjacent products for navigation
  const currentIndex = productCategories.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextProduct = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  // Related products (excluding current)
  const relatedProducts = productCategories
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  // Structured data schemas
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
        name: "Products",
        item: "https://sunpolymers.in/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://sunpolymers.in/products/${product.slug}`,
      },
    ],
  };

  const productServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.heroDescription,
    brand: {
      "@type": "Brand",
      name: "Sun Polymers",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Sun Polymers",
      url: "https://sunpolymers.in",
    },
    category: "Plastic Injection Moulding",
    url: `https://sunpolymers.in/products/${product.slug}`,
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Sun Polymers - Plastic Injection Moulding</title>
        <meta
          name="description"
          content={`${product.description} High-quality plastic components from Sun Polymers, ISO 9001:2015 certified manufacturer.`}
        />
        <meta
          name="keywords"
          content={`${product.name}, plastic components ${product.shortName}, injection moulding ${product.shortName}, Sun Polymers products`}
        />
        <link rel="canonical" href={`https://sunpolymers.in/products/${product.slug}`} />
        
        {/* GEO Tags for Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalna" />
        <meta name="geo.position" content="19.8347;75.8816" />
        <meta name="ICBM" content="19.8347, 75.8816" />
        
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://sunpolymers.in/products/${product.slug}`} />
        <meta property="og:title" content={`${product.name} | Sun Polymers`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content="https://sunpolymers.in/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productServiceSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-primary py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex items-center gap-2 text-primary-foreground/70 mb-6">
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
                <span>/</span>
                <span className="text-accent">{product.shortName}</span>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-primary-foreground/80 max-w-2xl">
                    {product.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features & Applications */}
          <section className="py-20 lg:py-32 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Key Features
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    Why Choose Our <span className="text-accent">{product.shortName}</span> Products?
                  </h2>
                  
                  <div className="space-y-4">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card border border-border/50"
                      >
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Applications */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Applications
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    Common <span className="text-accent">Use Cases</span>
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + 0.05 * index }}
                        className="bg-gradient-industrial rounded-xl p-4 border border-border/30"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-foreground">{application}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Product Gallery for Construction */}
              {product.hasDetailedProducts && slug === "construction-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Construction</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {constructionProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Furniture */}
              {product.hasDetailedProducts && slug === "furniture-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Furniture</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {furnitureProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Automotive */}
              {product.hasDetailedProducts && slug === "automotive-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Automotive</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {automotiveProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Agriculture */}
              {product.hasDetailedProducts && slug === "agriculture-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Agriculture</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {agricultureProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Dispenser */}
              {product.hasDetailedProducts && slug === "dispenser-pump" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Dispenser Pump</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dispenserProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Electrical */}
              {product.hasDetailedProducts && slug === "electrical-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Electrical</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {electricalProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Injection Mould */}
              {product.hasDetailedProducts && slug === "injection-mould" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Injection Mould</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {mouldProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Luggage */}
              {product.hasDetailedProducts && slug === "luggage-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Luggage</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {luggageProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Learning Blocks */}
              {product.hasDetailedProducts && slug === "mathematical-learning-blocks" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Learning Blocks</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {learningBlocksProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Other Sector */}
              {product.hasDetailedProducts && slug === "other-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Specialty</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {otherProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Stationery */}
              {product.hasDetailedProducts && slug === "stationery-sector" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Stationery</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stationeryProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Gallery for Caps & Closures */}
              {product.hasDetailedProducts && slug === "caps-closures" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                    Our Products
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    <span className="text-accent">Caps & Closures</span> Product Range
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {capsClosuresProducts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                      >
                        <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center"
              >
                <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
                  Need Custom {product.shortName} Solutions?
                </h3>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Our expert team is ready to help you design and manufacture the perfect plastic components for your {product.shortName.toLowerCase()} requirements.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Navigation */}
          <section className="py-8 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                {prevProduct ? (
                  <Link
                    to={`/products/${prevProduct.slug}`}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">{prevProduct.shortName}</span>
                  </Link>
                ) : (
                  <div />
                )}
                
                <Link
                  to="/products"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  View All Products
                </Link>

                {nextProduct ? (
                  <Link
                    to={`/products/${nextProduct.slug}`}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
                  >
                    <span className="hidden sm:inline">{nextProduct.shortName}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h3 className="font-heading text-2xl text-foreground mb-8 text-center">
                Explore Other Products
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((related) => {
                  const RelatedIcon = related.icon;
                  return (
                    <Link
                      key={related.slug}
                      to={`/products/${related.slug}`}
                      className="group bg-card rounded-xl p-4 text-center hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-accent/30"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <RelatedIcon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {related.shortName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />

        {/* Image Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
              <X className="h-5 w-5 text-foreground" />
            </DialogClose>
            {selectedImage && (
              <div className="flex flex-col">
                <div className="relative aspect-square md:aspect-video bg-muted flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.name}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>
                <div className="p-4 bg-card border-t border-border">
                  <h3 className="font-heading text-lg text-foreground">{selectedImage.name}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ProductCategory;
