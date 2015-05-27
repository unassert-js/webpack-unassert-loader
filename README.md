[![Build Status][travis-image]][travis-url]
[![NPM package][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]

# webpack-unassert-loader

A webpack loader to remove assertions on production build.

## Description

`webpack-unassert-loader` is a webpack loader module to remove assertions on production build.
`webpack-unassert-loader` applies [unassert](https://github.com/twada/unassert) to target sources through webpack loader chain.

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

[travis-url]: https://travis-ci.org/zoncoen/webpack-unassert-loader
[travis-image]: https://secure.travis-ci.org/zoncoen/webpack-unassert-loader.svg?branch=master

[npm-url]: https://npmjs.org/package/webpack-unassert-loader
[npm-image]: https://badge.fury.io/js/webpack-unassert-loader.svg

[depstat-url]: https://gemnasium.com/zoncoen/webpack-unassert-loader
[depstat-image]: https://gemnasium.com/zoncoen/webpack-unassert-loader.svg

[license-url]: https://github.com/zoncoen/webpack-unassert-loader/blob/master/LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
