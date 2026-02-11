import pvcShimPad from "@/assets/products/construction/pvc-shim-pad.png";
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
    name: "Galaxy Bucket 12 Ltr",
    description: "Galaxy Bucket 12 Ltr",
    image: orionBucket,
  },
  {
    id: 4,
    name: "Dynamic Bucket 10 Ltr",
    description: "Dynamic Bucket 10 Ltr",
    image: dynamicBucket,
  },
  {
    id: 5,
    name: "Galaxy Bucket 12 Ltr",
    description: "Galaxy Bucket 12 Ltr",
    image: galaxyBucket,
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
  {
    id: 15,
    name: "Miscellaneous fittings",
    description: "Miscellaneous fittings",
    image: miscFittings1,
  },
  {
    id: 16,
    name: "Miscellaneous fittings",
    description: "Miscellaneous fittings",
    image: miscFittings2,
  },
];
