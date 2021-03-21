'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var Core = require("@material-ui/core");
var CardDisplay$Spiritisland = require("./CardDisplay.bs.js");

function CardPanel(Props) {
  var drawnPile = Props.drawnPile;
  var drawPileCount = Props.drawPileCount;
  var additionalCardSlotName = Props.additionalCardSlotName;
  var isAdditionalCardInPlay = Belt_Option.isSome(additionalCardSlotName);
  var match;
  if (drawnPile) {
    var match$1 = drawnPile.tl;
    var e = drawnPile.hd;
    if (match$1) {
      var match$2 = match$1.tl;
      var b = match$1.hd;
      if (match$2) {
        var discard = match$2.tl;
        var r = match$2.hd;
        var exit = 0;
        if (discard && isAdditionalCardInPlay) {
          match = [
            discard.hd,
            r,
            b,
            e,
            List.length(discard.tl)
          ];
        } else {
          exit = 1;
        }
        if (exit === 1) {
          match = [
            undefined,
            r,
            b,
            e,
            List.length(discard)
          ];
        }
        
      } else {
        match = [
          undefined,
          undefined,
          b,
          e,
          0
        ];
      }
    } else {
      match = [
        undefined,
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
