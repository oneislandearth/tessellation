<p align="center">
  <a href="https://github.com/oneislandearth/tessellation" target="_blank">
    <img src="https://i.imgur.com/7IoOtec.png">
  </a>
</p>

<p align="center">
  <a href="https://greenkeeper.io" target="_blank">
  <img src="https://badges.greenkeeper.io/oneislandearth/tessellation.svg"></a>
  <a href="https://travis-ci.org" target="_blank">
  <img src="https://api.travis-ci.org/oneislandearth/tessellation.svg?branch=master"></a>
  <a href="https://packagephobia.now.sh/result?p=@oneisland/tessellation" target="_blank">
  <img src="https://packagephobia.now.sh/badge?p=@oneisland/tessellation"></a>
  <a href="https://snyk.io/vuln/search?q=@oneisland/tessellation&type=npm" target="_blank">
  <img src="https://img.shields.io/snyk/vulnerabilities/github/oneislandearth/tessellation.svg"></a>
  <a href="https://www.npmjs.com/package/@oneisland/tessellation" target="_blank">
  <img src="https://img.shields.io/npm/l/@oneisland/tessellation.svg"></a>
</p>

***

A simple library for triangle face tessellation

## Installation

[Tessellation](https://github.com/oneislandearth/tessellation) is available through the [npm registry](https://www.npmjs.com/package/@oneisland/tessellation):

```bash
$ npm install @oneisland/tessellation
```

## Usage

After installing Tessellation you can use the package like so:

##### simple-usage.js
```js
// Import the tessellation package
import { Tessellation } from '@oneisland/tessellation';

// Create a new tesselation and extract the vertices and faces as a result
const { vertices, faces } = new Tessellation({

  // Add the vertices
  vertices: [
    [-0.5, -0.5,  0.5],
    [ 0.5, -0.5,  0.5],
    [ 0.5, -0.5, -0.5],
    [-0.5, -0.5, -0.5],
  ],

  // Add the faces
  faces: [
    [2, 3, 0],
    [2, 1, 0],
  ],

  // Subdivide the faces one time
  divisions: 1
});

// Log the output of the vertices
console.log('Vertices:', JSON.stringify(vertices, null, 2));

// Log the output of the faces
console.log('Faces:', JSON.stringify(faces, null, 2));
```

Running the following code with Node:

```sh
$ node simple-example.js
```

Export the output of the code

```
Vertices: [
  [
    -0.5,
    -0.5,
    0.5
  ],
  [
    0.5,
    -0.5,
    0.5
  ],
  [
    0.5,
    -0.5,
    -0.5
  ],
  [
    -0.5,
    -0.5,
    -0.5
  ],
  [
    -0.5,
    0.5,
    0.5
  ],
  [
    0.5,
    0.5,
    0.5
  ],
  [
    0.5,
    0.5,
    -0.5
  ],
  [
    -0.5,
    0.5,
    -0.5
  ],
  [
    0,
    -0.5,
    -0.5
  ],
  [
    0,
    -0.5,
    0
  ],
  [
    -0.5,
    -0.5,
    0
  ],
  [
    0.5,
    -0.5,
    0
  ],
  [
    0,
    -0.5,
    0.5
  ]
]
Faces: [
  [
    2,
    8,
    9
  ],
  [
    8,
    3,
    10
  ],
  [
    8,
    10,
    9
  ],
  [
    9,
    10,
    0
  ],
  [
    2,
    11,
    9
  ],
  [
    11,
    1,
    12
  ],
  [
    11,
    12,
    9
  ],
  [
    9,
    12,
    0
  ]
]
```

Please read the [documentation below](#documentation) for more details on how to configure Mesh Exporter.

You can check out the [tests](https://github.com/oneislandearth/tessellation/tree/master/tests) or the source code of our [Structure library](https://github.com/oneislandearth/structure) for more complex usage.

## Documentation

### Tessellator

```js
class Tessellator {

  constructor({ vertices, faces, divisions = 1 }) {

    return { vertices, faces }
  }
}
```

#### constructor

The `constructor` function is called to perfrom a subdivision.

The `constructor` function returns an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of `vertices` and `faces` after subdivision.

##### vertices

The `vertices` argument should be an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of Vertex values.

##### faces

The `faces` argument should be an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of Face values (representing indices of `vertices`).

##### divisions

The `divisions` argument should be a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) of Number values which defines how many times the faces should be recursively subdivided.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, OneIsland Limited
