/**
 * webpack-unassert-loader - A webpack loader to remove assertions on production build.
 *
 * https://github.com/zoncoen/webpack-unassert-loader
 *
 * Copyright (c) 2015 Kenta Mori
 * Licensed under the MIT license.
 *   https://github.com/zoncoen/webpack-unassert-loader/blob/master/LICENSE
 */
'use strict';

var esprima = require('esprima');
var escodegen = require('escodegen');
var unassert = require('unassert');

module.exports = function(jsCode) {
  var ast = esprima.parse(jsCode);
  var modifiedAst = unassert(ast);
  this.callback(null, escodegen.generate(modifiedAst), null);
};

