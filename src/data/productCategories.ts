import { 
  Car, 
  Zap, 
  Armchair, 
  Cog, 
  Blocks, 
  Sparkles, 
  HardHat, 
  Sprout, 
  Briefcase,
  Droplets,
  CircleDot,
  PenTool
} from "lucide-react";

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof Car;
  description: string;
  heroDescription: string;
  features: string[];
  applications: string[];
  hasDetailedProducts?: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "automotive-sector",
    name: "Automotive Sector",
    shortName: "Automotive",
    icon: Car,
    description: "High-performance plastic components for the automotive industry with precision engineering and durability.",
    heroDescription: "Precision-engineered automotive plastic components meeting stringent quality standards for the modern automobile industry.",
    features: ["Impact resistant materials", "Heat-stable compounds", "Precision tolerance parts", "Multi-component assemblies"],
    applications: ["Dashboard components", "Interior trim parts", "Engine covers", "Electrical housings", "Mirror casings"],
    hasDetailedProducts: true,
  },
  {
    slug: "electrical-sector",
    name: "Electrical Sector",
    shortName: "Electrical",
    icon: Zap,
    description: "Insulated and durable plastic components for electrical applications with excellent dielectric properties.",
    heroDescription: "Superior electrical insulation components designed for safety, durability, and optimal performance.",
    features: ["Excellent insulation", "Flame retardant options", "High dielectric strength", "UL certified materials"],
    applications: ["Switch housings", "Junction boxes", "Cable clips", "Terminal blocks", "Electrical enclosures"],
    hasDetailedProducts: true,
  },
  {
    slug: "furniture-sector",
    name: "Furniture Sector",
    shortName: "Furniture",
    icon: Armchair,
    description: "Aesthetic and functional plastic components for modern furniture manufacturing.",
    heroDescription: "Stylish and durable furniture components combining aesthetics with exceptional functionality.",
    features: ["UV resistant", "Scratch resistant surfaces", "Custom colors", "Ergonomic designs"],
    applications: ["Chair components", "Table fittings", "Cabinet hardware", "Drawer slides", "Decorative trims"],
    hasDetailedProducts: true,
  },
  {
    slug: "injection-mould",
    name: "Injection Mould",
    shortName: "Moulds",
    icon: Cog,
    description: "Custom mould design and manufacturing for diverse industrial applications.",
    heroDescription: "Expert mould design and manufacturing services for optimal production efficiency and product quality.",
    features: ["CAD/CAM design", "Rapid prototyping", "Multi-cavity moulds", "Hot runner systems"],
    applications: ["Production moulds", "Prototype tooling", "Insert moulds", "Overmoulding tools", "Family moulds"],
    hasDetailedProducts: true,
  },
  {
    slug: "mathematical-learning-blocks",
    name: "Mathematical Learning Blocks / Cubes Sector",
    shortName: "Learning Blocks",
    icon: Blocks,
    description: "Educational plastic products for mathematical and cognitive learning development.",
    heroDescription: "Safe, colorful, and educational learning tools designed to make mathematics fun and engaging.",
    features: ["Child-safe materials", "Vibrant colors", "Durable construction", "Educational designs"],
    applications: ["Counting blocks", "Geometric shapes", "Number cubes", "Pattern blocks", "Math manipulatives"],
    hasDetailedProducts: true,
  },
  {
    slug: "abs-electroplated",
    name: "ABS Electroplated",
    shortName: "ABS Plated",
    icon: Sparkles,
    description: "Premium electroplated ABS components with metallic finish for decorative applications.",
    heroDescription: "High-quality ABS electroplated products offering the elegance of metal with the benefits of plastic.",
    features: ["Chrome finish", "Corrosion resistant", "Lightweight", "Cost-effective"],
    applications: ["Decorative trims", "Badges & emblems", "Automotive accents", "Consumer electronics", "Bathroom fittings"],
    hasDetailedProducts: true,
  },
  {
    slug: "construction-sector",
    name: "Construction Sector",
    shortName: "Construction",
    icon: HardHat,
    description: "Durable plastic components for the construction and building industry including safety equipment and buckets.",
    heroDescription: "Robust construction components and safety equipment engineered to withstand demanding job site conditions.",
    features: ["Weather resistant", "High load capacity", "Safety compliant", "Durable construction", "Multiple sizes available"],
    applications: ["PVC Shim Pads & Spacers", "Construction Buckets", "Safety Helmets", "Fall Protection Equipment", "Scaffolding Accessories", "Traffic Cones", "PVC Pipes & Chamfers"],
    hasDetailedProducts: true,
  },
  {
    slug: "agriculture-sector",
    name: "Agriculture Sector",
    shortName: "Agriculture",
    icon: Sprout,
    description: "Robust plastic components for agricultural equipment and farming applications.",
    heroDescription: "Durable agricultural components designed to withstand harsh outdoor conditions.",
    features: ["UV stabilized", "Chemical resistant", "Impact resistant", "Weather proof"],
    applications: ["Irrigation fittings", "Sprayer parts", "Seed trays", "Greenhouse components", "Farm equipment parts"],
    hasDetailedProducts: true,
  },
  {
    slug: "luggage-sector",
    name: "Luggage Sector",
    shortName: "Luggage",
    icon: Briefcase,
    description: "Durable plastic components for travel bags, suitcases, and industrial cases.",
    heroDescription: "Premium luggage components combining style, durability, and functionality for modern travelers.",
    features: ["Impact resistant", "Lightweight", "Secure fittings", "Stylish designs"],
    applications: ["Suitcase shells", "Handle systems", "Wheel assemblies", "Lock housings", "Corner protectors"],
    hasDetailedProducts: true,
  },
  {
    slug: "dispenser-pump",
    name: "Dispenser Pump",
    shortName: "Dispensers",
    icon: Droplets,
    description: "Precision-engineered dispenser pumps for cosmetic, personal care, and industrial applications.",
    heroDescription: "High-quality dispenser pumps designed for consistent, reliable dispensing performance.",
    features: ["Precise dosing", "Leak-proof design", "Chemical resistant", "Smooth operation"],
    applications: ["Cosmetic dispensers", "Soap pumps", "Lotion pumps", "Sanitizer dispensers", "Industrial dispensers"],
    hasDetailedProducts: true,
  },
  {
    slug: "caps-closures",
    name: "Caps & Closures",
    shortName: "Caps",
    icon: CircleDot,
    description: "Premium flip top caps, perfume caps, and dispenser pumps for packaging applications.",
    heroDescription: "High-quality caps and closures engineered for pharmaceutical, cosmetic, and food packaging industries.",
    features: ["Leak-proof sealing", "Child-resistant options", "Custom colors", "Tamper-evident designs", "Multiple sizes available"],
    applications: ["Pharmaceutical packaging", "Cosmetic bottles", "Food containers", "Perfume bottles", "Household products"],
    hasDetailedProducts: true,
  },
  {
    slug: "stationery-sector",
    name: "Stationery Sector",
    shortName: "Stationery",
    icon: PenTool,
    description: "Quality plastic components for stationery and educational products.",
    heroDescription: "Durable and functional stationery components designed for students, professionals, and creative applications.",
    features: ["Precision molding", "Child-safe materials", "Vibrant colors", "Durable construction"],
    applications: ["Geometry boxes", "Scales & rulers", "Colour boxes", "Tape dispensers", "Palette boxes"],
    hasDetailedProducts: true,
  },
];

export const getProductBySlug = (slug: string): ProductCategory | undefined => {
  return productCategories.find((p) => p.slug === slug);
};
