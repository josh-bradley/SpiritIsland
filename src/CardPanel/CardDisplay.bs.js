'use strict';

var React = require("react");
var Core = require("@material-ui/core");
var InvaderCard$Spiritisland = require("./InvaderCard.bs.js");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardDisplay(Props) {
  var card = Props.card;
  var cardPosName = Props.cardPosName;
  var cardDetails = card !== undefined ? InvaderCards$Spiritisland.landTypeToString(card) : [{
        colour: "white",
        name: "No card"
      }];
  return React.createElement(React.Fragment, undefined, React.createElement(InvaderCard$Spiritisland.make, {
                  cardDetails: cardDetails
                }), React.createElement(Core.Typography, {
                  children: cardPosName,
                  variant: "h6"
                }));
}

var make = CardDisplay;

exports.make = make;
/* react Not a pure module */
