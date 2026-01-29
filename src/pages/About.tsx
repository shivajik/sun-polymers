import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import StrategySection from "@/components/StrategySection";
import StrengthSection from "@/components/StrengthSection";

const About = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sun Polymers",
    url: "https://sunpolymers.in",
    logo: "https://sunpolymers.in/og-image.jpg",
    foundingDate: "1990",
    description: "ISO 9001:2015 certified plastic injection moulding manufacturer with 35+ years of excellence",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-55/2, Additional MIDC",
      addressLocality: "Jalna",
      addressRegion: "Maharashtra",
      postalCode: "431203",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.8347",
      longitude: "75.8816",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98220-07676",
      contactType: "sales",
      email: "sales@sunpolymers.in",
    },
    sameAs: [],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001:2015",
    },
  };

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
        name: "About Us",
        item: "https://sunpolymers.in/about",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Us | Sun Polymers - 35+ Years of Excellence in Plastic Moulding</title>
        <meta
          name="description"
          content="Learn about Sun Polymers' 35+ years journey as a pioneer in plastic injection moulding. ISO 9001:2015 certified manufacturer based in Jalna, Maharashtra."
        />
        <meta
          name="keywords"
          content="Sun Polymers about, plastic moulding company history, ISO certified manufacturer India, Jalna plastic company"
        />
        <link rel="canonical" href="https://sunpolymers.in/about" />
        
        {/* GEO Tags for Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalna" />
        <meta name="geo.position" content="19.8347;75.8816" />
        <meta name="ICBM" content="19.8347, 75.8816" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/about" />
        <meta property="og:title" content="About Sun Polymers | 35+ Years of Manufacturing Excellence" />
        <meta
          property="og:description"
          content="Discover our journey from 1990 to becoming a leading plastic injection moulding manufacturer in India with 35+ years of experience."
        />
        <meta property="og:image" content="https://sunpolymers.in/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Page Hero */}
          <section className="bg-primary py-20 lg:py-28">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                About <span className="text-accent">Sun Polymers</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Pioneering excellence in plastic injection moulding since 1990
              </p>
            </div>
          </section>

          <AboutSection />
          <StrengthSection />
          <StrategySection />
          <AchievementsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
