import bucket1 from "@/assets/products/construction/bucket-1.jpg";
import bucket2 from "@/assets/products/construction/bucket-2.jpg";
import bucket3 from "@/assets/products/construction/bucket-3.jpg";
import bucket4 from "@/assets/products/construction/bucket-4.jpg";
import safetyCapMushroom from "@/assets/products/construction/safety-cap-mushroom.jpg";
import safetyCapBall from "@/assets/products/construction/safety-cap-ball.jpg";
import spacersSet from "@/assets/products/construction/spacers-set.jfif";
import spacersColoredNew from "@/assets/products/construction/spacers-colored-new.jpeg";
import scaffoldingTag from "@/assets/products/construction/scaffolding-tag.jpg";
import safetyHelmetYellow from "@/assets/products/construction/safety-helmet-yellow.webp";
import safetyHelmetNape from "@/assets/products/construction/safety-helmet-nape.jpg";
import safetyHelmetRatchet from "@/assets/products/construction/safety-helmet-ratchet.jpg";
import lanyardHarness from "@/assets/products/construction/lanyard-harness.jpg";
import pvcCone from "@/assets/products/construction/pvc-cone.jpg";
import pvcPipe from "@/assets/products/construction/pvc-pipe.jpg";
import pvcChamfer from "@/assets/products/construction/pvc-chamfer.jpg";
import miscFittings1 from "@/assets/products/construction/misc-fittings-1.jpg";

export interface ConstructionProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const constructionProducts: ConstructionProduct[] = [
  {
    id: 1,
    name: "Construction Bucket - Black",
    description: "Durable black construction bucket with metal handle",
    image: bucket1,
  },
  {
    id: 2,
    name: "SPI Bucket - Yellow",
    description: "Heavy-duty yellow bucket with SPI branding",
    image: bucket2,
  },
  {
    id: 3,
    name: "Construction Bucket - Dark",
    description: "Sturdy dark construction bucket",
    image: bucket3,
  },
  {
    id: 4,
    name: "Construction Bucket - Large",
    description: "Large capacity construction bucket with handle",
    image: bucket4,
  },
  {
    id: 5,
    name: "Rebar Safety Cap - Mushroom",
    description: "Protective mushroom cap for rebar ends",
    image: safetyCapMushroom,
  },
  {
    id: 6,
    name: "Rebar Safety Cap - Ball",
    description: "Ball-type protective cap for rebar ends",
    image: safetyCapBall,
  },
  {
    id: 7,
    name: "Spacers Set",
    description: "Construction spacers in various sizes",
    image: spacersSet,
  },
  {
    id: 8,
    name: "Colored Spacers",
    description: "Available in multiple colors - Green, Black, White, Blue, Red",
    image: spacersColoredNew,
  },
  {
    id: 9,
    name: "PVC Cone",
    description: "Traffic and safety marking cone",
    image: pvcCone,
  },
  {
    id: 10,
    name: "Safety Helmet - Yellow",
    description: "Industrial safety helmet in high-visibility yellow",
    image: safetyHelmetYellow,
  },
  {
    id: 11,
    name: "Safety Helmet - Nape Type",
    description: "Industrial safety helmet with nape strap",
    image: safetyHelmetNape,
  },
  {
    id: 12,
    name: "Safety Helmet - Ratchet Type",
    description: "Industrial safety helmet with ratchet adjustment",
    image: safetyHelmetRatchet,
  },
  {
    id: 13,
    name: "Lanyard and Safety Harness",
    description: "Fall protection safety equipment",
    image: lanyardHarness,
  },
  {
    id: 14,
    name: "Scaffolding Tag Holder",
    description: "Safety inspection and erection record holder",
    image: scaffoldingTag,
  },
  {
    id: 15,
    name: "PVC Pipe",
    description: "Construction-grade PVC piping",
    image: pvcPipe,
  },
  {
    id: 16,
    name: "PVC Chamfer",
    description: "Concrete forming chamfer strips",
    image: pvcChamfer,
  },
  {
    id: 17,
    name: "Miscellaneous Fittings",
    description: "Various construction fittings and accessories",
    image: miscFittings1,
  },
];
