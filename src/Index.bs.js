'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Main$Spiritisland = require("./Main/Main.bs.js");

function makeContainer(param) {
  var container = document.createElement("div");
  container.setAttribute("style", "width:100%");
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(Main$Spiritisland.make, {}), makeContainer(undefined));

exports.makeContainer = makeContainer;
/*  Not a pure module */
