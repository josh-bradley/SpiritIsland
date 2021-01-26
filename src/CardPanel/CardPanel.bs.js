'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var Core = require("@material-ui/core");
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
  return React.createElement("div", undefined, React.createElement(Core.Grid, {
                  children: null,
                  container: true
                }, React.createElement(Core.Grid, {
                      children: React.createElement("div", undefined, match[3]),
                      item: true,
                      xs: MaterialUi_Grid.Xs._3
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[0],
                            cardPosName: "Ravage"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[1],
                            cardPosName: "Build"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[2],
                            cardPosName: "Explore"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement("div", undefined, drawPileCount),
                      item: true,
                      xs: MaterialUi_Grid.Xs._3
                    })));
}

var make = CardPanel;

exports.make = make;
/* react Not a pure module */
