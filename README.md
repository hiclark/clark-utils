# 🛠 Clark Utils library

A suite of tested and flowtyped utility functions used across Clark frontend applications. The entire library is typed with [Flow](https://flow.org/en/) and tested with Jest. To build, we transpile using [Babel](https://babeljs.io/) and then copy over our flow definitions using [`flow-copy-source`](https://github.com/AgentME/flow-copy-source).

h/t [Patrick Stapfer](https://twitter.com/ryyppy?source=user_profile----------------------------) for [writing up this pattern](https://medium.com/netscape/shipping-flowtype-definitions-in-npm-packages-c987917efb65) for sharing flow type-definitions across projects.

#### Project structure:

The `src` directory contains our utility functions, which are all exported from `src/index.js`, our library's entry point. 

```
|-- src
|   |-- index.js
|   |-- etc
```

### Getting Started

- You will need to install [Yarn](https://yarnpkg.com/en/docs/install) for dependency management, if you do not have it already installed.

- Run the `yarn` command to install `node_modules`

### Testing library integration locally

To test clark-utils locally, ** _Make sure `build/` directory exists_ (`yarn build`) and then follow the instructions [here](https://yarnpkg.com/lang/en/docs/cli/link/).

### Testing

We use [jest](https://facebook.github.io/jest/) for running our test suite. All new utility functions should be pure and thoroughly unit-tested. Run `yarn test` to start the test runner

### Flow

This project uses `flow` to do static typechecking. We're using the [flowtype](https://github.com/gajus/eslint-plugin-flowtype) eslint plugin to enforce adding flow annotations to all files and stylistic consistency.

Run `yarn flow` to start the flow server. If you run into unexpected failures, as a first troubleshooting step, run `yarn flow stop` and then start the server again to bust the cache.

### Updating

For convience sake, we use the [cut-release](https://github.com/bjoerge/cut-release) project to easily publish to npm and follow SEMVER.

**Once you have cut a release remember to bump the version in your project.**

### Usage

To use the library run `yarn add clark-utils`. Note that this package isn't bundled - we use it in apps that are built with [Webpack](https://webpack.js.org/guides/getting-started/). Additionally, it has been opensourced primarily for educational purposes. If a function isn't working as you'd expect it to, we recommend forking the repo or copying the code that you want to use into another package.
