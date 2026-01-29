import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productCategories";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6 bg-white rounded-lg px-4 py-2">
              <img 
                src={logo} 
                alt="Sun Polymers - Since 1990, An ISO 9001:2015 Company" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Pioneer in plastic injection moulding with over 35 years of experience. 
              ISO 9001:2015 certified manufacturer of high-precision plastic products 
              for diverse industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "All Products" },
                { href: "/clients", label: "Our Clients" },
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
              {productCategories.slice(0, 6).map((product) => (
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

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+919822007676" className="hover:text-accent transition-colors">+91 98220 07676</a>
                  <a href="tel:+919322578245" className="hover:text-accent transition-colors">+91 93225 78245</a>
                  <a href="tel:+919822402476" className="hover:text-accent transition-colors">+91 98224 02476</a>
                  <a href="tel:+919970150162" className="hover:text-accent transition-colors">+91 99701 50162</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="mailto:sales@sunpolymers.in" className="hover:text-accent transition-colors">sales@sunpolymers.in</a>
                  <a href="mailto:sunpolymers2000@yahoo.co.in" className="hover:text-accent transition-colors text-xs">sunpolymers2000@yahoo.co.in</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  D-55/2, Additional MIDC,<br />
                  Jalna – 431203, MH, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Sun Polymers. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>An ISO 9001:2015 Certified Company</p>
              <span className="hidden md:inline">•</span>
              <p>
                Designed by{" "}
                <a 
                  href="https://ksoftsolution.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline transition-colors"
                >
                  KSoft Solution
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
