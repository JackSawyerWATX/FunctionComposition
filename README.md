# Function Composition

A compact JavaScript implementation of function composition. `compose(functions)` returns a function that applies the supplied functions from right to left.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

Function composition combines an array of unary functions into one function. For `[f, g, h]`, the result evaluates `f(g(h(x)))`.

## Features

- Applies functions from right to left.
- Returns the identity function for an empty array.
- Includes an executable example.

## Tech Stack

- JavaScript
- Node.js

## Architecture

`compose` returns a closure that iterates backward through the function array, passing each result to the next function.

## Project Structure

```text
FunctionComposition/
|-- README.md
`-- run.js
```

## Getting Started

Run the included example with Node.js:

```bash
node run.js
```

The example prints `25`.

```js
const fn = compose([x => x + 1, x => 2 * x]);

fn(12); // 25
```

## Configuration

No configuration or environment variables are required.

## Security

This project does not process external input, store data, or use network services.

## How to Contribute?

Fork the repository, create a focused branch, test the example with `node run.js`, and open a pull request.

## What's Next?

- Add automated tests for composition order and the identity case.
- Export `compose` for reuse in other modules.

## License

No license file is currently included.

## Acknowledgements

Inspired by the function-composition programming exercise.

## Author

JackSawyerWATX