'use strict';

var React = require("react");
var Card$Spiritisland = require("./Card.bs.js");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardDisplay(Props) {
  var card = Props.card;
  var cardDetails = card !== undefined ? InvaderCards$Spiritisland.landTypeToString(card) : [{
        colour: "white",
        name: "No card"
      }];
  return React.createElement("div", undefined, React.createElement(Card$Spiritisland.make, {
                  cardDetails: cardDetails
                }));
}

var make = CardDisplay;

exports.make = make;
/* react Not a pure module */
