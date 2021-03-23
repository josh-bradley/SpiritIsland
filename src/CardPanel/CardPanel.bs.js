'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var Core = require("@material-ui/core");
var CardDisplay$Spiritisland = require("./CardDisplay.bs.js");

function CardPanel(Props) {
  var drawnPile = Props.drawnPile;
  var drawPileCount = Props.drawPileCount;
  var additionalCardSlotName = Props.additionalCardSlotName;
  var isExploring = Props.isExploring;
  var match = React.useState(function () {
        return drawnPile;
      });
  var setCards = match[1];
  var cards = match[0];
  React.useEffect((function () {
          if (isExploring) {
            Curry._1(setCards, (function (param) {
                    return drawnPile;
                  }));
          } else {
            Curry._1(setCards, (function (param) {
                    return {
                            hd: /* [] */0,
                            tl: drawnPile
                          };
                  }));
          }
          
        }), [
        isExploring,
        drawnPile
      ]);
  var isAdditionalCardInPlay = Belt_Option.isSome(additionalCardSlotName);
  var match$1;
  if (cards) {
    var match$2 = cards.tl;
    var e = cards.hd;
    if (match$2) {
      var match$3 = match$2.tl;
      var b = match$2.hd;
      if (match$3) {
        var discard = match$3.tl;
        var r = match$3.hd;
        var exit = 0;
        if (discard && isAdditionalCardInPlay) {
          match$1 = [
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
          match$1 = [
            undefined,
            r,
            b,
            e,
            List.length(discard)
          ];
        }
        
      } else {
        match$1 = [
          undefined,
          undefined,
          b,
          e,
          0
        ];
      }
    } else {
      match$1 = [
        undefined,
        undefined,
        undefined,
        e,
        0
      ];
    }
  } else {
    match$1 = [
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
                      children: React.createElement("div", undefined, match$1[4]),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), additionalCardSlotName !== undefined ? React.createElement(Core.Grid, {
                        children: React.createElement(CardDisplay$Spiritisland.make, {
                              card: match$1[0],
                              cardPosName: additionalCardSlotName
                            }),
                        item: true,
                        xs: MaterialUi_Grid.Xs._2
                      }) : null, React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match$1[1],
                            cardPosName: "Ravage"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match$1[2],
                            cardPosName: "Build"
                          }),
                      item: true,
                      xs: MaterialUi_Grid.Xs._2
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(CardDisplay$Spiritisland.make, {
                            card: match$1[3],
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
