'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardOrderEntry(Props) {
  var onCardSelection = Props.onCardSelection;
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setCardOrder = match[1];
  var cardOrder = match[0];
  var onChange = function ($$event) {
    var cardOrderText = $$event.target.value;
    var result = List.rev(List.fold_left(InvaderCards$Spiritisland.mapCardIdToCard, /* [] */0, $$Array.to_list(cardOrderText.split(""))));
    return Curry._1(setCardOrder, (function (param) {
                  return result;
                }));
  };
  var onClick = function (param) {
    return Curry._1(onCardSelection, cardOrder);
  };
  var result = List.map(InvaderCards$Spiritisland.landTypeToString, cardOrder);
  var a = result ? result.hd : "No more cards";
  return React.createElement("div", undefined, React.createElement("input", {
                  type: "text",
                  onChange: onChange
                }), React.createElement("div", undefined, a), React.createElement("button", {
                  onClick: onClick
                }, "Next"));
}

var make = CardOrderEntry;

exports.make = make;
/* react Not a pure module */
