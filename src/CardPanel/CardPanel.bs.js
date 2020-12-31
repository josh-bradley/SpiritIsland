'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var CardDisplay$Spiritisland = require("./CardDisplay.bs.js");

function CardPanel(Props) {
  var drawnPile = Props.drawnPile;
  var drawPileCount = Props.drawPileCount;
  var match;
  if (drawnPile) {
    var match$1 = drawnPile.tl;
    var e = drawnPile.hd;
    if (match$1) {
      var match$2 = match$1.tl;
      var b = match$1.hd;
      match = match$2 ? [
          match$2.hd,
          b,
          e,
          List.length(match$2.tl)
        ] : [
          undefined,
          b,
          e,
          0
        ];
    } else {
      match = [
        undefined,
        undefined,
        e,
        0
      ];
    }
  } else {
    match = [
      undefined,
      undefined,
      undefined,
      0
    ];
  }
  return React.createElement("div", undefined, React.createElement("div", undefined, match[3]), React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[0]
                }), React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[1]
                }), React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[2]
                }), React.createElement("div", undefined, drawPileCount));
}

var make = CardPanel;

exports.make = make;
/* react Not a pure module */