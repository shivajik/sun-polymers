import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { productCategories } from "@/data/productCategories";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">SP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-xl text-foreground leading-tight">
                  Sun Polymers
                </h1>
                <p className="text-xs text-muted-foreground">Since 1990</p>
              </div>
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
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-card rounded-xl shadow-xl border border-border/60 overflow-hidden z-50"
                    >
                      {/* Gradient accent bar */}
                      <div className="h-1 bg-gradient-accent" />
                      
                      <div className="p-4">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Products</span>
                          <Link 
                            to="/products" 
                            className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
                          >
                            View All
                            <ChevronDown className="w-3 h-3 -rotate-90" />
                          </Link>
                        </div>
                        
                        {/* Products Grid - 4 columns, compact */}
                        <div className="grid grid-cols-4 gap-1">
                          {productCategories.map((product) => {
                            const Icon = product.icon;
                            const isCurrentProduct = location.pathname === `/products/${product.slug}`;
                            return (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className={`group flex flex-col items-center gap-1.5 p-2.5 rounded-lg transition-all duration-150 text-center ${
                                  isCurrentProduct 
                                    ? "bg-accent text-accent-foreground" 
                                    : "hover:bg-primary/5"
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 ${
                                  isCurrentProduct 
                                    ? "bg-accent-foreground/20" 
                                    : "bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110"
                                }`}>
                                  <Icon className={`w-4 h-4 ${isCurrentProduct ? "text-accent-foreground" : "text-accent"}`} />
                                </div>
                                <span className={`text-[11px] font-medium leading-tight line-clamp-2 ${
                                  isCurrentProduct 
                                    ? "text-accent-foreground" 
                                    : "text-foreground/80 group-hover:text-accent"
                                }`}>
                                  {product.shortName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Quick CTA */}
                        <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Need custom solutions?</span>
                          <Link 
                            to="/contact" 
                            className="text-xs font-semibold text-accent hover:underline"
                          >
                            Get a Quote →
                          </Link>
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
                        <div className="pl-4 py-2 space-y-1 max-h-64 overflow-y-auto">
                          <Link
                            to="/products"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-accent hover:bg-accent/10 rounded-lg"
                          >
                            View All Products
                          </Link>
                          {productCategories.map((product) => {
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
