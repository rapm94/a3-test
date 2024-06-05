import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//Utils creadas por shadcn

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
