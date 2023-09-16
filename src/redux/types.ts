// src/redux/types.ts

// Import the CartItem type from the correct location
import { CartItem } from "./reducer/handleCart"; // Corrected import

// Define the RootState type
export type RootState = {
  handleCart: CartItem[];
  // Add other slices of your store state here if applicable
};
