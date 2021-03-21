'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Core = require("@material-ui/core");
var MaterialUi_Container = require("@jsiebern/bs-material-ui/src/MaterialUi_Container.bs.js");
var CardPanel$Spiritisland = require("../CardPanel/CardPanel.bs.js");
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
  var match$2 = React.useState(function () {
        return false;
      });
  var setIsExploring = match$2[1];
  var onCardSelection = function (cards) {
    return Curry._1(setDrawPile, (function (param) {
                  return cards;
                }));
  };
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
    tmp = React.createElement(React.Fragment, undefined, React.createElement(Core.Container, {
              children: null,
              maxWidth: MaterialUi_Container.MaxWidth.xl
            }, React.createElement(CardPanel$Spiritisland.make, {
                  drawnPile: drawnPile,
                  drawPileCount: List.length(drawPile)
                }), match$2[0] ? React.createElement(Core.Button, {
                    onClick: (function (param) {
                        Curry._1(setDrawnPile, (function (param) {
                                return {
                                        hd: /* [] */0,
                                        tl: drawnPile
                                      };
                              }));
                        return Curry._1(setIsExploring, (function (param) {
                                      return false;
                                    }));
                      }),
                    children: "Advance Cards"
                  }) : React.createElement(Core.Button, {
                    onClick: (function (param) {
                        if (!drawPile) {
                          return ;
                        }
                        var rest = drawPile.tl;
                        var nextCard = drawPile.hd;
                        Curry._1(setDrawPile, (function (param) {
                                return rest;
                              }));
                        if (drawnPile) {
                          if (!drawnPile.hd) {
                            var actualDrawnPile = drawnPile.tl;
                            Curry._1(setDrawnPile, (function (param) {
                                    return {
                                            hd: {
                                              hd: nextCard,
                                              tl: /* [] */0
                                            },
                                            tl: actualDrawnPile
                                          };
                                  }));
                          }
                          
                        } else {
                          Curry._1(setDrawnPile, (function (param) {
                                  return {
                                          hd: {
                                            hd: nextCard,
                                            tl: /* [] */0
                                          },
                                          tl: /* [] */0
                                        };
                                }));
                        }
                        return Curry._1(setIsExploring, (function (param) {
                                      return true;
                                    }));
                      }),
                    children: "Explore"
                  })));
  }
  return React.createElement("div", undefined, tmp);
}

var make = Main;

exports.make = make;
/* react Not a pure module */
