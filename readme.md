# Pokedex - MonoRepo

This is a project built using MonoRepo architecture and bootstrapped with [`lerna`](https://lerna.js.org/).

The project uses:

- [`lerna`](https://lerna.js.org/) to version, publish and manage projects separately as well as together.
- [`TailwindCss`](https://tailwindcss.com/) and [`MUI DataGrid`](https://mui.com/x/react-data-grid/) to design the component library of the project.
- [`NextJS`](https://nextjs.org/docs) for frontend and [`@reduxjs/toolkit`](https://redux-toolkit.js.org/introduction/getting-started) for state management.
- Test cases have been written using [`Jest`](https://jestjs.io/docs/getting-started) and [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/).
- [`Rollup`](https://rollupjs.org/) as a bundler to compile the components (`@ui/components`) and utils (`@pd/utils`) to esm and cjs modules to be used in the project.

## Contents

- [`Getting Started`](#getting-started)
  - [`Prerequisites`](#prerequisites)
  - [`Running the server in development`](#Running-the-server-in-development)
  - [`Running the build in production`](#Running-the-build-in-production)
  - [`Running Tests`](#Running-Tests)
- [`Other Tools`](#Other-Tools)

## Getting Started

To run the program locally, first clone the repository and then follow the below steps:

### Prerequisites

- [`Node.js`](https://nodejs.org/en) (v16 or higher)

### Running the server in development

Before the server can be run, the modules need to be compiled and the packages need to be installed.
All scripts have been configured from the root folder.

- Install the required packages for base repository and then the script will run `lerna bootstrap` to install internal dependencies and link up the project

```bash
npm run bootstrap
```

- Compile the components and utils modules

```bash
npm run compile
```

- Start the development server

```bash
npm run dev
```

### Running the build in production

- Build the project

```bash
npm run build
```

- Run the project server

```bash
npm run prod
```

### Running Tests

```bash
npm run test
```

## Other Tools:

- [eslint](https://eslint.org/docs/latest/use/getting-started)
- [prettier](https://prettier.io/docs/en/index.html)
- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [Husky](https://typicode.github.io/husky/)
