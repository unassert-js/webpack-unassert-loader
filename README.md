# webpack-unassert-loader

A webpack loader to remove assertions on production build.

## Description

`webpack-unassert-loader` is a webpack loader module to remove assertions on production build.
`webpack-unassert-loader` applies [unassert](https://github.com/twada/unassert) to target sources through webpack loader chain.

Please note that `webpack-unassert-loader` is a beta version project. Pull-requests, issue reports and patches are always welcomed.

See [unassert](https://github.com/twada/unassert) project for more documentation.

## Installation

Install `webpack-unassert-loader` via npm:

```console
$ npm install --save-dev webpack-unassert-loader
```

## Usage

Configure `webpack.config.js` to apply `webpack-unassert-loader` through webpack loader transformation chain.

```js
{
    module: {
        loaders: [
            { test: /_test\.js$/, loader: "webpack-unassert-loader" }
        ]
    }
}
```

## Changelog

See [CHANGELOG.md](https://github.com/zoncoen/webpack-unassert-loader/blob/master/CHANGELOG.md).

## License

Licensed under the MIT license. See [LICENSE](https://github.com/zoncoen/webpack-unassert-loader/blob/master/LICENSE).

