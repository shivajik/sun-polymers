import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sun Polymers",
    description: "Get in touch with Sun Polymers for plastic injection moulding solutions",
    mainEntity: {
      "@type": "Organization",
      name: "Sun Polymers",
      telephone: "+91-2482-230335",
      email: "sales@sunpolymers.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jalna",
        addressRegion: "Maharashtra",
        postalCode: "431203",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sun Polymers - Get a Quote for Plastic Moulding</title>
        <meta
          name="description"
          content="Contact Sun Polymers for custom plastic injection moulding quotes. Located in Jalna, Maharashtra. Call +91-2482-230335 or email sales@sunpolymers.in"
        />
        <meta
          name="keywords"
          content="contact Sun Polymers, plastic moulding quote, plastic manufacturer contact Jalna, injection moulding inquiry"
        />
        <link rel="canonical" href="https://sunpolymers.in/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/contact" />
        <meta property="og:title" content="Contact Sun Polymers | Get a Quote" />
        <meta
          property="og:description"
          content="Get in touch for custom plastic injection moulding solutions. Free consultation and competitive pricing."
        />

        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Page Hero */}
          <section className="bg-primary py-20 lg:py-28">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Get In Touch
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Contact <span className="text-accent">Us</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Ready to discuss your project? We respond to all inquiries within 24 hours.
              </p>
            </div>
          </section>

          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
