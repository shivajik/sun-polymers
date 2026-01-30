import geometryBoxSet from "@/assets/products/stationery/geometry-box-set.jpeg";

export interface StationeryProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const stationeryProducts: StationeryProduct[] = [
  {
    id: 1,
    name: "Geometry Box Set",
    description: "Complete geometry set with compass, divider, ruler, sharpener, and eraser in a metal case.",
    image: geometryBoxSet,
  },
];
