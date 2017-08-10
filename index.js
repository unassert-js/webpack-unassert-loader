/**
 * webpack-unassert-loader - A webpack loader for unassert
 *   Encourages programming with assertions by providing tools to compile them away
 *
 * https://github.com/unassert-js/webpack-unassert-loader
 *
 * Copyright (c) 2015- Kenta Mori and Contributors
 * Licensed under the MIT license.
 *   https://github.com/unassert-js/webpack-unassert-loader/blob/master/LICENSE
 */
'use strict';

var esprima = require('esprima');
var escodegen = require('escodegen');
var unassert = require('unassert');

module.exports = function(jsCode) {
  var ast = esprima.parse(jsCode,{
      range: true,
      tokens: true,
      comment: true
  });
  var attachedAst = escodegen.attachComments(ast, ast.comments, ast.tokens);
  var modifiedAst = unassert(attachedAst);
  this.callback(null, escodegen.generate(modifiedAst, {
      comment: true
  }), null);
};

