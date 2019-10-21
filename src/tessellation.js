// Import the required utilties
import { addOnce, interpolate } from './utils';

// Define the class for performing tessellation
export class Tessellation {

  // Create a tessellation from vertices and faces
  constructor({ vertices, faces, divisions = 0 }) {

    // Add one to the number of divisions (zero represents no divisions)
    divisions += 1;

    // Define the list of new faces
    const faces1 = [];

    // Add the new interpolated point to the vertices
    const addVertex = (i0, i1, factor) => addOnce(interpolate(vertices[i0], vertices[i1], factor), vertices);

    // Iterate through each of the faces
    for (const [ia, ib, ic] of faces) {

      // Interpolate the new vertices and add them to the list returning their vertices
      const iab = addVertex(ia, ib, (1 / divisions));
      const iac = addVertex(ia, ic, (1 / divisions));

      // Add the new face to the faces
      faces1.push([ia, iab, iac]);

      // Iterate for a number of times relative to divisions
      for (let i = 1; i < divisions; ++i) {

        // Interpolate the new vertices and add them to the list returning their vertices
        const iab1 = addVertex(ia, ib, ((i + 1) / divisions));
        const iac1 = addVertex(ia, ic, ((i + 1) / divisions));

        // Iterate for a number of times relative to number of subdivisions
        for (let j = 0; j <= i; ++j) {

          // Add the face to the faces set
          faces1.push([addVertex(iab, iac, (j / i)), addVertex(iab1, iac1, (j / (i + 1))), addVertex(iab1, iac1, ((j + 1) / (i + 1)))]);
  
          // Add the new face to the faces set
          if (j < i) faces1.push([addVertex(iab, iac, (j / i)), addVertex(iab1, iac1, ((j + 1) / (i + 1))), addVertex(iab, iac, ((j + 1) / i))]);
        }
      }
    }

    // Return the list of faces and vertices
    return {
      vertices,
      faces: faces1
    };
  }
}