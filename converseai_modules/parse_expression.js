/**
 * @file parse_expression.js
 * @author scott.mcgowan@wisemonkeygames.com
 * @description
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

const { Status } = require('@converseai/plugins-sdk');
const { ModuleResponse } = require('@converseai/plugins-sdk').Payloads.Module;
const ParseExpression = require('@evilmonkeyinc/die-roller').parse;

module.exports = (app, body) => {
  const { expression } = body.payload.moduleParam;

  if (expression === undefined) {
    app.fail({
      httpStatus: 400,
      code: 'REQUIRED_PARAMS_UNDEFINED',
      description: 'Required parameter "expression" is undefined.',
    });
    return;
  }

  const response = new ModuleResponse();
  response.setValue(ParseExpression(expression));
  app.send(Status.SUCCESS, response);
};
