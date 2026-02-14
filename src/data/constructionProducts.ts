import pvcShimPad from "@/assets/products/construction/pvc-shim-pad.png";
import spacersColored from "@/assets/products/construction/spacers-colored.jpeg";
import orionBucketNew from "@/assets/products/construction/orion-bucket-new.png";
import bucket3 from "@/assets/products/construction/bucket-3.jpg";
import bucket4 from "@/assets/products/construction/bucket-4.jpg";
import spiBucket from "@/assets/products/construction/dynamic-bucket.jpg";
import rebarSafetyCap from "@/assets/products/construction/safety-cap-mushroom.jpg";
import scaffoldingTag from "@/assets/products/construction/scaffolding-tag.jpg";
import safetyHelmetRatchet from "@/assets/products/construction/safety-helmet-ratchet.jpg";
import safetyHelmetNape from "@/assets/products/construction/safety-helmet-yellow.webp";
import lanyardHarness from "@/assets/products/construction/combine-belt.jpg";
import pvcCone from "@/assets/products/construction/pvc-pipe.jpg";
import pvcPipe from "@/assets/products/construction/pvc-chamfer.jpg";
import pvcChamfer from "@/assets/products/construction/misc-fittings-1.jpg";

export interface ConstructionProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const constructionProducts: ConstructionProduct[] = [
  {
    id: 1,
    name: "PVC Packing Shim Pad 1 TO 10 MM",
    description: "PVC Packing Shim Pad 1 TO 10 MM",
    image: pvcShimPad,
  },
  {
    id: 2,
    name: "Spacers 1 TO 5 MM",
    description: "Spacers 1 TO 5 MM",
    image: spacersColored,
  },
  {
    id: 3,
    name: "Orion Bucket 8 Ltr",
    description: "Orion Bucket 8 Ltr",
    image: orionBucketNew,
  },
  {
    id: 4,
    name: "Galaxy Bucket 12 Ltr",
    description: "Dynamic Bucket 10 Ltr",
    image: bucket3,
  },
  {
    id: 5,
    name: "Dynamic Bucket 10 Ltr",
    description: "Galaxy Bucket 12 Ltr",
    image: bucket4,
  },
  {
    id: 6,
    name: "SPI Bucket 12 Ltr",
    description: "SPI Bucket 12 Ltr",
    image: spiBucket,
  },
  {
    id: 7,
    name: "Rebar Safety Cap 8-16 mm / 16-32 mm",
    description: "Rebar Safety Cap 8-16 mm / 16-32 mm",
    image: rebarSafetyCap,
  },
  {
    id: 8,
    name: "Scaffolding tag holder",
    description: "Scaffolding tag holder",
    image: scaffoldingTag,
  },
  {
    id: 9,
    name: "Safety Helmet Ratchet Type",
    description: "Safety Helmet Ratchet Type",
    image: safetyHelmetRatchet,
  },
  {
    id: 10,
    name: "Safety Helmet Nape Type",
    description: "Safety Helmet Nape Type",
    image: safetyHelmetNape,
  },
  {
    id: 11,
    name: "Lanyard and Safety harness",
    description: "Lanyard and Safety harness",
    image: lanyardHarness,
  },
  {
    id: 12,
    name: "PVC Cone",
    description: "PVC Cone",
    image: pvcCone,
  },
  {
    id: 13,
    name: "PVC Pipe",
    description: "PVC Pipe",
    image: pvcPipe,
  },
  {
    id: 14,
    name: "PVC Chamfer",
    description: "PVC Chamfer",
    image: pvcChamfer,
  },
];
