// Perform an interpolation between two points
export const interpolate = (a, b, fraction = 0.5) => {

  // Extract the values from the vectors
  const [ax, ay, az] = a;
  const [bx, by, bz] = b;

  // Calculate subtraction of vector b from a
  const [cx, cy, cz] = [bx - ax, by - ay, bz - az];

  // Calculate the interpolation points
  const [ix, iy, iz] = [ax + (fraction * cx), ay + (fraction * cy), az + (fraction * cz)];

  // Round the values to 6dp
  return [Number(ix.toFixed(6)), Number(iy.toFixed(6)), Number(iz.toFixed(6))];
};

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