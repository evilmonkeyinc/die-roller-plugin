/**
 * @file parse.js
 * @author scott.mcgowan@wisemonkeygames.com
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */


const { Status } = require('@converseai/plugins-sdk');
const ExternalResponse = require('@converseai/plugins-sdk').Payloads.ExternalFunctionResponse;
const ParseExpression = require('@evilmonkeyinc/die-roller').parse;

module.exports = function parse(app, body) {
  const response = new ExternalResponse();
  response.setBody(ParseExpression(body.payload.queryParam.expression.data[0]));
  app.send(Status.SUCCESS, response);
};
