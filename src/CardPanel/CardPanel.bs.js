'use strict';

var React = require("react");
var CardDisplay$Spiritisland = require("./CardDisplay.bs.js");

function CardPanel(Props) {
  var drawPile = Props.drawPile;
  var match;
  if (drawPile) {
    var match$1 = drawPile.tl;
    var e = drawPile.hd;
    if (match$1) {
      var match$2 = match$1.tl;
      var b = match$1.hd;
      match = match$2 ? [
          match$2.hd,
          b,
          e
        ] : [
          undefined,
          b,
          e
        ];
    } else {
      match = [
        undefined,
        undefined,
        e
      ];
    }
  } else {
    match = [
      undefined,
      undefined,
      undefined
    ];
  }
  return React.createElement("div", undefined, React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[0]
                }), React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[1]
                }), React.createElement(CardDisplay$Spiritisland.make, {
                  card: match[2]
                }));
}

var make = CardPanel;

exports.make = make;
/* react Not a pure module */
