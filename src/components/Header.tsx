import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight, Building2, Wrench, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { productCategories } from "@/data/productCategories";
import logo from "@/assets/logo.png";

// Organize products into logical groups for enterprise mega menu
const productGroups = {
  manufacturing: {
    title: "Manufacturing",
    icon: Wrench,
    items: ["injection-mould", "abs-electroplated"],
  },
  industrial: {
    title: "Industrial Sectors",
    icon: Building2,
    items: ["automotive-sector", "electrical-sector", "construction-sector", "telecommunication-sector", "agriculture-sector"],
  },
  consumer: {
    title: "Consumer Products",
    icon: Package,
    items: ["furniture-sector", "luggage-sector", "stationery-sector", "dispenser-pump", "mathematical-learning-blocks", "other-sector"],
  },
};

// Get sorted products by group
const getGroupedProducts = () => {
  const grouped: Record<string, typeof productCategories> = {
    manufacturing: [],
    industrial: [],
    consumer: [],
  };

  productCategories.forEach((product) => {
    if (productGroups.manufacturing.items.includes(product.slug)) {
      grouped.manufacturing.push(product);
    } else if (productGroups.industrial.items.includes(product.slug)) {
      grouped.industrial.push(product);
    } else if (productGroups.consumer.items.includes(product.slug)) {
      grouped.consumer.push(product);
    }
  });

  // Sort each group alphabetically by shortName
  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => a.shortName.localeCompare(b.shortName));
  });

  return grouped;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const groupedProducts = getGroupedProducts();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsProductsOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const isProductsActive = location.pathname.startsWith("/products");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+912482230335" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 (2482) 230335</span>
            </a>
            <a href="mailto:sales@sunpolymers.in" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>sales@sunpolymers.in</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            An ISO 9001:2015 Certified Company
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-medium"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Sun Polymers - Since 1990, An ISO 9001:2015 Company" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive("/")
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive("/about")
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                }`}
              >
                About Us
              </Link>

              {/* Products Mega Menu */}
              <div ref={productsRef} className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isProductsActive
                      ? "text-accent bg-accent/10"
                      : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-background rounded-xl shadow-2xl border border-border z-50 overflow-hidden"
                      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                    >
                      {/* Header */}
                      <div className="bg-primary/5 border-b border-border px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-heading text-lg font-semibold text-foreground">Our Products</h3>
                            <p className="text-sm text-muted-foreground">Explore our complete range of plastic solutions</p>
                          </div>
                          <Link 
                            to="/products" 
                            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                          >
                            View All
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* 3 Column Grid */}
                      <div className="p-4 grid grid-cols-3 gap-4">
                        {/* Manufacturing Column */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Wrench className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Manufacturing</span>
                          </div>
                          {groupedProducts.manufacturing.map((product) => {
                            const Icon = product.icon;
                            const isCurrentProduct = location.pathname === `/products/${product.slug}`;
                            return (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                                  isCurrentProduct 
                                    ? "bg-accent text-accent-foreground shadow-sm" 
                                    : "hover:bg-muted"
                                }`}
                              >
                                <Icon className={`w-4 h-4 flex-shrink-0 ${isCurrentProduct ? "text-accent-foreground" : "text-muted-foreground group-hover:text-accent"}`} />
                                <span className={`text-sm ${
                                  isCurrentProduct 
                                    ? "font-medium" 
                                    : "text-foreground group-hover:text-accent"
                                }`}>
                                  {product.shortName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Industrial Column */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Building2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Industrial</span>
                          </div>
                          {groupedProducts.industrial.map((product) => {
                            const Icon = product.icon;
                            const isCurrentProduct = location.pathname === `/products/${product.slug}`;
                            return (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                                  isCurrentProduct 
                                    ? "bg-accent text-accent-foreground shadow-sm" 
                                    : "hover:bg-muted"
                                }`}
                              >
                                <Icon className={`w-4 h-4 flex-shrink-0 ${isCurrentProduct ? "text-accent-foreground" : "text-muted-foreground group-hover:text-accent"}`} />
                                <span className={`text-sm ${
                                  isCurrentProduct 
                                    ? "font-medium" 
                                    : "text-foreground group-hover:text-accent"
                                }`}>
                                  {product.shortName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Consumer Column */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Package className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Consumer</span>
                          </div>
                          {groupedProducts.consumer.map((product) => {
                            const Icon = product.icon;
                            const isCurrentProduct = location.pathname === `/products/${product.slug}`;
                            return (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                                  isCurrentProduct 
                                    ? "bg-accent text-accent-foreground shadow-sm" 
                                    : "hover:bg-muted"
                                }`}
                              >
                                <Icon className={`w-4 h-4 flex-shrink-0 ${isCurrentProduct ? "text-accent-foreground" : "text-muted-foreground group-hover:text-accent"}`} />
                                <span className={`text-sm ${
                                  isCurrentProduct 
                                    ? "font-medium" 
                                    : "text-foreground group-hover:text-accent"
                                }`}>
                                  {product.shortName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Footer CTA */}
                      <div className="border-t border-border px-6 py-4 bg-muted/30">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                              <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">Need Custom Solutions?</p>
                              <p className="text-xs text-muted-foreground">Contact our experts for tailored products</p>
                            </div>
                          </div>
                          <Button variant="accent" size="sm" asChild>
                            <Link to="/contact">
                              Get a Quote
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive("/contact")
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    isActive("/")
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    isActive("/about")
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  About Us
                </Link>

                {/* Mobile Products Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                      isProductsActive
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-accent/10"
                    }`}
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-3 max-h-[60vh] overflow-y-auto">
                          <Link
                            to="/products"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10 rounded-lg"
                          >
                            View All Products
                          </Link>
                          
                          {/* Manufacturing Group */}
                          <div className="pt-2">
                            <div className="flex items-center gap-2 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                              <Wrench className="w-3.5 h-3.5" />
                              Manufacturing
                            </div>
                            {groupedProducts.manufacturing.map((product) => {
                              const Icon = product.icon;
                              return (
                                <Link
                                  key={product.slug}
                                  to={`/products/${product.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                                    location.pathname === `/products/${product.slug}`
                                      ? "text-accent bg-accent/10"
                                      : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  {product.shortName}
                                </Link>
                              );
                            })}
                          </div>
                          
                          {/* Industrial Group */}
                          <div className="pt-2 border-t border-border/50">
                            <div className="flex items-center gap-2 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                              <Building2 className="w-3.5 h-3.5" />
                              Industrial
                            </div>
                            {groupedProducts.industrial.map((product) => {
                              const Icon = product.icon;
                              return (
                                <Link
                                  key={product.slug}
                                  to={`/products/${product.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                                    location.pathname === `/products/${product.slug}`
                                      ? "text-accent bg-accent/10"
                                      : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  {product.shortName}
                                </Link>
                              );
                            })}
                          </div>
                          
                          {/* Consumer Group */}
                          <div className="pt-2 border-t border-border/50">
                            <div className="flex items-center gap-2 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                              <Package className="w-3.5 h-3.5" />
                              Consumer
                            </div>
                            {groupedProducts.consumer.map((product) => {
                              const Icon = product.icon;
                              return (
                                <Link
                                  key={product.slug}
                                  to={`/products/${product.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                                    location.pathname === `/products/${product.slug}`
                                      ? "text-accent bg-accent/10"
                                      : "text-foreground/80 hover:text-accent hover:bg-accent/10"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  {product.shortName}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    isActive("/contact")
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  Contact
                </Link>

                <Button variant="accent" className="mt-4" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
