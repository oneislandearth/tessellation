// Import the testing module
import test from 'ava';

// Import the tessellation package
import { Tessellation } from 'lib/tessellation';

// Successfully create a tessellation
test('Cube Tesselation (2 subdivisions)', async(result) => {

  // Create a new tesselation and extract the vertices and faces as a result
  const { vertices, faces } = new Tessellation({

    // Add the vertices
    vertices: [
      [-0.5, -0.5,  0.5],
      [ 0.5, -0.5,  0.5],
      [ 0.5, -0.5, -0.5],
      [-0.5, -0.5, -0.5],
      [-0.5,  0.5,  0.5],
      [ 0.5,  0.5,  0.5],
      [ 0.5,  0.5, -0.5],
      [-0.5,  0.5, -0.5]
    ],
    
    // Add the faces
    faces: [
      [2, 3, 0],
      [2, 1, 0],
      [7, 3, 0],
      [0, 4, 7],
      [4, 0, 1],
      [1, 5, 4],
      [6, 2, 3],
      [3, 7, 6],
      [5, 1, 2],
      [2, 6, 5],
      [7, 4, 5],
      [5, 6, 7]
    ],

    // Subdivide the faces 2 times
    divisions: 2
  });

  // Check the number of vertices and faces is correct
  result.assert(vertices.length == 68);
  result.assert(faces.length == 108);
});