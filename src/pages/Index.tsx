import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sun Polymers",
    url: "https://sunpolymers.in",
    logo: "https://sunpolymers.in/logo.png",
    foundingDate: "1990",
    description:
      "Sun Polymers is a leading plastic injection moulding company in Jalna, Maharashtra with 34+ years of experience manufacturing customised industrial and domestic plastic products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jalna",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-2482-230335",
      email: "sales@sunpolymers.in",
      contactType: "sales",
    },
    sameAs: [],
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sun Polymers",
    image: "https://sunpolymers.in/hero-manufacturing.jpg",
    "@id": "https://sunpolymers.in",
    url: "https://sunpolymers.in",
    telephone: "+91-2482-230335",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jalna",
      addressRegion: "Maharashtra",
      postalCode: "431203",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.8347,
      longitude: 75.8816,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  return (
    <>
      <Helmet>
        <title>Sun Polymers | Plastic Injection Moulding Manufacturer in Jalna, Maharashtra</title>
        <meta
          name="description"
          content="Sun Polymers is an ISO 9001:2015 certified plastic injection moulding company in Jalna, Maharashtra. 34+ years experience manufacturing precision plastic products for appliances, electronics, agriculture & more."
        />
        <meta
          name="keywords"
          content="plastic injection moulding, plastic manufacturer India, injection moulding Jalna, plastic products Maharashtra, industrial plastic components, custom mould design, ISO certified plastic manufacturer"
        />
        <link rel="canonical" href="https://sunpolymers.in" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in" />
        <meta property="og:title" content="Sun Polymers | Leading Plastic Injection Moulding Manufacturer" />
        <meta
          property="og:description"
          content="ISO 9001:2015 certified manufacturer of precision plastic products with 34+ years of experience. Serving appliances, electronics, agriculture & more."
        />
        <meta property="og:image" content="https://sunpolymers.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun Polymers | Plastic Injection Moulding Manufacturer" />
        <meta
          name="twitter:description"
          content="ISO 9001:2015 certified manufacturer of precision plastic products with 34+ years of experience."
        />

        {/* GEO Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalna" />
        <meta name="geo.position" content="19.8347;75.8816" />
        <meta name="ICBM" content="19.8347, 75.8816" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <IndustriesSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
