'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var CardPanel$Spiritisland = require("../CardPanel/CardPanel.bs.js");
var InvaderCards$Spiritisland = require("../InvaderCards.bs.js");
var CardOrderEntry$Spiritisland = require("../CardOrderEntry/CardOrderEntry.bs.js");

function Main(Props) {
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setDrawPile = match[1];
  var drawPile = match[0];
  var match$1 = React.useState(function () {
        return /* [] */0;
      });
  var setDrawnPile = match$1[1];
  var drawnPile = match$1[0];
  var drawCard = function (dp) {
    if (!dp) {
      return ;
    }
    var rest = dp.tl;
    var nextCard = dp.hd;
    Curry._1(setDrawPile, (function (param) {
            return rest;
          }));
    return Curry._1(setDrawnPile, (function (param) {
                  return {
                          hd: nextCard,
                          tl: drawnPile
                        };
                }));
  };
  var onCardSelection = function (cards) {
    Curry._1(setDrawPile, (function (param) {
            return cards;
          }));
    return drawCard(cards);
  };
  var result = List.fold_left((function (x, y) {
          return x + (", " + y);
        }), "", List.map(InvaderCards$Spiritisland.landTypeToString, drawPile));
  console.log(result);
  var tmp;
  var exit = 0;
  if (drawPile || drawnPile) {
    exit = 1;
  } else {
    tmp = React.createElement(CardOrderEntry$Spiritisland.make, {
          onCardSelection: onCardSelection
        });
  }
  if (exit === 1) {
    tmp = React.createElement("div", undefined, React.createElement(CardPanel$Spiritisland.make, {
              drawnPile: drawnPile,
              drawPileCount: List.length(drawPile)
            }), React.createElement("button", {
              onClick: (function (param) {
                  return drawCard(drawPile);
                })
            }, "Draw"));
  }
  return React.createElement("div", undefined, tmp);
}

var make = Main;

exports.make = make;
/* react Not a pure module */
