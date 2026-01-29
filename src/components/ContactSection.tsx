import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const phoneNumbers = [
  "+91 98220 07676",
  "+91 99701 50161",
  "+91 98224 02476",
  "+91 99701 50162",
];

const emailAddresses = [
  "sales@sunpolymers.in",
  "sunpolymers2000@yahoo.co.in",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: phoneNumbers[0],
    href: `tel:${phoneNumbers[0].replace(/\s/g, '')}`,
    additionalValues: phoneNumbers.slice(1).map(p => ({ value: p, href: `tel:${p.replace(/\s/g, '')}` })),
  },
  {
    icon: Mail,
    title: "Email",
    value: emailAddresses[0],
    href: `mailto:${emailAddresses[0]}`,
    additionalValues: emailAddresses.slice(1).map(e => ({ value: e, href: `mailto:${e}` })),
  },
  {
    icon: MapPin,
    title: "Location",
    value: "D-55/2, Additional MIDC, Jalna – 431203, MH, India",
    href: null,
    additionalValues: [],
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
    additionalValues: [],
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Discuss Your <span className="text-accent">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Contact us today for a free consultation 
            and quote. We respond to all enquiries within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-medium border border-border/50">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 group hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                    {info.href ? (
                      <div className="flex flex-col gap-1">
                        <a
                          href={info.href}
                          className="font-heading font-semibold text-lg text-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                        {info.additionalValues?.map((additional, idx) => (
                          <a
                            key={idx}
                            href={additional.href}
                            className="font-heading font-medium text-base text-foreground/80 hover:text-accent transition-colors"
                          >
                            {additional.value}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="font-heading font-semibold text-lg text-foreground">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-primary rounded-2xl p-8 text-center"
            >
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-primary-foreground mb-2">
                Visit Our Facility
              </h4>
              <p className="text-primary-foreground/80 mb-4">
                D-55/2, Additional MIDC,<br />
                Jalna – 431203, MH, India
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Contact us to schedule a factory tour
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
