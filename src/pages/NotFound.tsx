import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Sun Polymers</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Return to Sun Polymers homepage." />
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary to-primary/90 px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <span className="text-8xl font-heading font-bold text-accent">404</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-heading font-bold text-primary-foreground">
            Page Not Found
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/80">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/products">
                <ArrowLeft className="w-5 h-5 mr-2" />
                View Products
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">
              Need help finding something?
            </p>
            <Button variant="ghost" size="sm" asChild className="text-accent hover:text-accent/80">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
