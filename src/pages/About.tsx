import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sun Polymers - 34+ Years of Excellence in Plastic Moulding</title>
        <meta
          name="description"
          content="Learn about Sun Polymers' 34+ years journey as a pioneer in plastic injection moulding. ISO 9001:2015 certified manufacturer based in Jalna, Maharashtra."
        />
        <meta
          name="keywords"
          content="Sun Polymers about, plastic moulding company history, ISO certified manufacturer India, Jalna plastic company"
        />
        <link rel="canonical" href="https://sunpolymers.in/about" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunpolymers.in/about" />
        <meta property="og:title" content="About Sun Polymers | 34+ Years of Manufacturing Excellence" />
        <meta
          property="og:description"
          content="Discover our journey from 1990 to becoming a leading plastic injection moulding manufacturer in India."
        />
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
          <AchievementsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
