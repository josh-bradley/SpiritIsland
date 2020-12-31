'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");
var CardOrderEntry$Spiritisland = require("../CardOrderEntry/CardOrderEntry.bs.js");

function Main(Props) {
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setCardOrder = match[1];
  var onCardSelection = function (cards) {
    return Curry._1(setCardOrder, (function (param) {
                  return cards;
                }));
  };
  var result = List.fold_left((function (x, y) {
          return x + (", " + y);
        }), "", List.map(InvaderCards$Spiritisland.landTypeToString, match[0]));
  console.log(result);
  return React.createElement("div", undefined, React.createElement(CardOrderEntry$Spiritisland.make, {
                  onCardSelection: onCardSelection
                }));
}

var make = Main;

exports.make = make;
/* react Not a pure module */
