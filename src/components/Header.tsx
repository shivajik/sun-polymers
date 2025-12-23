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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-card rounded-2xl shadow-lg border border-border p-6 z-50"
                    >
                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45" />
                      
                      <div className="relative">
                        <div className="flex justify-between items-center mb-4 pb-3 border-b border-border">
                          <h3 className="font-heading font-bold text-lg text-foreground">Our Products</h3>
                          <Link 
                            to="/products" 
                            className="text-sm text-accent hover:underline"
                          >
                            View All Products →
                          </Link>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          {productCategories.map((product) => {
                            const Icon = product.icon;
                            const isCurrentProduct = location.pathname === `/products/${product.slug}`;
                            return (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  isCurrentProduct 
                                    ? "bg-accent/10 text-accent" 
                                    : "hover:bg-muted"
                                }`}
                              >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                  isCurrentProduct 
                                    ? "bg-accent text-accent-foreground" 
                                    : "bg-muted group-hover:bg-accent/20"
                                }`}>
                                  <Icon className={`w-5 h-5 ${isCurrentProduct ? "" : "text-accent"}`} />
                                </div>
                                <span className={`text-sm font-medium leading-tight ${
                                  isCurrentProduct 
                                    ? "text-accent" 
                                    : "text-foreground group-hover:text-accent"
                                }`}>
                                  {product.shortName}
                                </span>
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
