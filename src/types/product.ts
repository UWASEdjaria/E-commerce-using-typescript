

// Enum for category types
export enum Category {
  SMARTPHONES = "smartphones",
  LAPTOPS = "laptops",
  FRAGRANCES = "fragrances",
  SKINCARE = "skincare",
}
export interface Product {
  id: number;
  title: string;
  description?: string; // optional
  price: number;
  category: Category;
  thumbnail: string;
  rating: string;
}
export type FetchStatus= "idle" | "loading" | "success" | "error";