'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");

function CardOrderEntry(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setCardOrder = match[1];
  var onChange = function ($$event) {
    return Curry._1(setCardOrder, $$event.target.value);
  };
  var result = List.rev(List.map(InvaderCards$Spiritisland.landTypeToString, List.fold_left(InvaderCards$Spiritisland.mapCardIdToCard, /* [] */0, $$Array.to_list(match[0].split("")))));
  var show = List.fold_left((function (x, y) {
          return x + (", " + y);
        }), "", result);
  console.log(show);
  return React.createElement("div", undefined, React.createElement("input", {
                  type: "text",
                  onChange: onChange
                }));
}

var make = CardOrderEntry;

exports.make = make;
/* react Not a pure module */
