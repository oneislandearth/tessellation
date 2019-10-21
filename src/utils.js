
// Import the required math functions
import { multiply, subtract, add, round } from '@oneisland/math';

// Perform an interpolation between two points
export const interpolate = (a, b, fraction = 0.5) => round(add(a, multiply(fraction, subtract(b, a))), 6);

// Add a value to a set once and return the index
export const addOnce = (value, list) => {
  
  // Look through the array for the value
  for (let i = 0; i < list.length; i++) {

    // Check the values match
    if (JSON.stringify(list[i]) == JSON.stringify(value)) {

      // Return the index
      return i;
    }
  }

  // Add the value to the array as it doesn't exist and return the index
  return (list.push(value) - 1);
};