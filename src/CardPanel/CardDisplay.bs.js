'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Card$Spiritisland = require("./Card.bs.js");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardDisplay(Props) {
  var card = Props.card;
  var cardDetails = card !== undefined ? InvaderCards$Spiritisland.landTypeToString(card) : [{
        colour: "white",
        name: "No card"
      }];
  return React.createElement("div", undefined, $$Array.map((function (x) {
                    return React.createElement(Card$Spiritisland.make, {
                                cardDetail: x
                              });
                  }), cardDetails));
}

var make = CardDisplay;

exports.make = make;
/* react Not a pure module */
