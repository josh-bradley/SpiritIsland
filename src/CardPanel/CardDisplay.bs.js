'use strict';

var React = require("react");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardDisplay(Props) {
  var card = Props.card;
  var d = card !== undefined ? InvaderCards$Spiritisland.landTypeToString(card) : "No card";
  return React.createElement("div", undefined, d);
}

var make = CardDisplay;

exports.make = make;
/* react Not a pure module */
