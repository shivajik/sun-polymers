import pvcShimPad from "@/assets/products/construction/pvc-shim-pad.jpg";
import spacersColored from "@/assets/products/construction/spacers-colored.jpeg";
import orionBucket from "@/assets/products/construction/orion-bucket.jpg";
import dynamicBucket from "@/assets/products/construction/dynamic-bucket.jpg";
import galaxyBucket from "@/assets/products/construction/galaxy-bucket.jpg";
import spiBucket from "@/assets/products/construction/spi-bucket.jpg";
import rebarSafetyCap from "@/assets/products/construction/rebar-safety-cap.jpg";
import scaffoldingTag from "@/assets/products/construction/scaffolding-tag.jpg";
import safetyHelmetRatchet from "@/assets/products/construction/safety-helmet-ratchet.jpg";
import safetyHelmetNape from "@/assets/products/construction/safety-helmet-nape.jpg";
import lanyardHarness from "@/assets/products/construction/lanyard-harness.jpg";
import pvcCone from "@/assets/products/construction/pvc-cone.jpg";
import pvcPipe from "@/assets/products/construction/pvc-pipe.jpg";
import pvcChamfer from "@/assets/products/construction/pvc-chamfer.jpg";
import miscFittings1 from "@/assets/products/construction/misc-fittings-1.jpg";
import miscFittings2 from "@/assets/products/construction/misc-fittings-2.jpg";

export interface ConstructionProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const constructionProducts: ConstructionProduct[] = [
  {
    id: 1,
    name: "PVC Packing Shim Pad",
    description: "PVC Packing Shim Pad",
    image: pvcShimPad,
  },
  {
    id: 2,
    name: "Spacers (1 TO 5 MM)",
    description: "Construction spacers in various sizes",
    image: spacersColored,
  },
  {
    id: 3,
    name: "Orion Bucket (8 Ltr)",
    description: "8 litre Orion construction bucket",
    image: orionBucket,
  },
  {
    id: 4,
    name: "Dynamic Bucket (10 Ltr)",
    description: "10 litre Dynamic construction bucket",
    image: dynamicBucket,
  },
  {
    id: 5,
    name: "Galaxy Bucket (12 Ltr)",
    description: "12 litre Galaxy construction bucket",
    image: galaxyBucket,
  },
  {
    id: 6,
    name: "SPI Bucket (12 Ltr)",
    description: "12 litre SPI construction bucket",
    image: spiBucket,
  },
  {
    id: 7,
    name: "Rebar Safety Cap (8-16 mm / 16-32 mm)",
    description: "Protective cap for rebar ends",
    image: rebarSafetyCap,
  },
  {
    id: 8,
    name: "Scaffolding tag holder",
    description: "Safety inspection and erection record holder",
    image: scaffoldingTag,
  },
  {
    id: 9,
    name: "Safety Helmet Ratchet Type",
    description: "Industrial safety helmet ratchet type",
    image: safetyHelmetRatchet,
  },
  {
    id: 10,
    name: "Safety Helmet Nape Type",
    description: "Industrial safety helmet with nape strap",
    image: safetyHelmetNape,
  },
  {
    id: 11,
    name: "Lanyard and Safety harness",
    description: "Fall protection safety equipment",
    image: lanyardHarness,
  },
  {
    id: 12,
    name: "PVC Cone",
    description: "Traffic and safety marking cone",
    image: pvcCone,
  },
  {
    id: 13,
    name: "PVC Pipe",
    description: "Construction-grade PVC piping",
    image: pvcPipe,
  },
  {
    id: 14,
    name: "PVC Chamfer",
    description: "Concrete forming chamfer strips",
    image: pvcChamfer,
  },
  {
    id: 15,
    name: "Miscellaneous fittings",
    description: "Various construction fittings and accessories",
    image: miscFittings1,
  },
  {
    id: 16,
    name: "Miscellaneous fittings",
    description: "Various construction fittings and accessories",
    image: miscFittings2,
  },
];
