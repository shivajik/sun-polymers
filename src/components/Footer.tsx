import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productCategories";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">SP</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Sun Polymers</h3>
                <p className="text-primary-foreground/70 text-sm">Since 1990</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Pioneer in plastic injection moulding with over 34 years of experience. 
              ISO 9001:2015 certified manufacturer of high-precision plastic products 
              for diverse industries.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+912482230335" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 (2482) 230335
              </a>
              <a 
                href="mailto:sales@sunpolymers.in" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                sales@sunpolymers.in
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                Jalna, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "All Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.slice(0, 7).map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {product.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-accent hover:underline text-sm"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Sun Polymers. All rights reserved.</p>
            <p>An ISO 9001:2015 Certified Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
