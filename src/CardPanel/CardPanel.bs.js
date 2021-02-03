'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var Core = require("@material-ui/core");
var CardDisplay$Spiritisland = require("./CardDisplay.bs.js");

function CardPanel(Props) {
  var drawnPile = Props.drawnPile;
  var drawPileCount = Props.drawPileCount;
  var additionalCardSlotName = Props.additionalCardSlotName;
  var match;
  if (drawnPile) {
    var match$1 = drawnPile.tl;
    var f = drawnPile.hd;
    if (match$1) {
      var match$2 = match$1.tl;
      var e = match$1.hd;
      if (match$2) {
        var discard = match$2.tl;
        var b = match$2.hd;
        match = discard ? [
            f,
            discard.hd,
            b,
            e,
            List.length(discard.tl)
          ] : [
            undefined,
            b,
            e,
            f,
            List.length(discard)
          ];
      } else {
        match = [
          undefined,
          undefined,
          e,
          f,
          0
        ];
      }
    } else {
      match = [
        undefined,
        undefined,
        undefined,
        f,
        0
      ];
    }
  } else {
    match = [
      undefined,
      undefined,
      undefined,
      undefined,
      0
    ];
  }
  return React.createElement("div", undefined, React.createElement(Core.Grid, {
                  children: null,
                  container: true,
                  spacing: 2,
                  style: {
                    flexGrow: "1"
                  }
                }, React.createElement(Core.Grid, {
                      children: React.createElement("div", undefined, match[4]),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), additionalCardSlotName !== undefined ? React.createElement(Core.Grid, {
                        children: React.createElement(CardDisplay$Spiritisland.make, {
                              card: match[0],
                              cardPosName: additionalCardSlotName
                            }),
                        item: true,
                        xs: MaterialUi_Grid.Xs._2
                      }) : null, React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[1],
                            cardPosName: "Ravage"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[2],
                            cardPosName: "Build"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match[3],
                            cardPosName: "Explore"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement("div", undefined, drawPileCount),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    })));
}

var make = CardPanel;

exports.make = make;
/* react Not a pure module */
