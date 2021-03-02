'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var Core = require("@material-ui/core");
var InvaderCard$Spiritisland = require("./InvaderCard.bs.js");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardDisplay(Props) {
  var card = Props.card;
  var cardPosName = Props.cardPosName;
  var x = card !== undefined ? card : /* [] */0;
  var cardDetails = x ? List.flatten(List.map(InvaderCards$Spiritisland.landTypeToDetails2, x)) : ({
        hd: {
          colour: "white",
          name: "No card"
        },
        tl: /* [] */0
      });
  return React.createElement(React.Fragment, undefined, React.createElement(InvaderCard$Spiritisland.make, {
                  cardDetails: cardDetails
                }), React.createElement(Core.Typography, {
                  align: "center",
                  children: cardPosName,
                  variant: "h6"
                }));
}

var make = CardDisplay;

exports.make = make;
/* react Not a pure module */
