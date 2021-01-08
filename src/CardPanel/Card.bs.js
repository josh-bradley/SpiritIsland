'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Core = require("@material-ui/core");

function Card(Props) {
  var cardDetails = Props.cardDetails;
  return React.createElement(Core.Grid, {
              children: $$Array.map((function (cardDetail) {
                      return React.createElement(Core.Grid, {
                                  children: React.createElement(Core.Paper, {
                                        children: cardDetail.name,
                                        style: {
                                          backgroundColor: cardDetail.colour,
                                          color: "#FFF",
                                          height: "100%"
                                        }
                                      }),
                                  item: true,
                                  style: {
                                    flexGrow: "1"
                                  }
                                });
                    }), cardDetails),
              container: true,
              direction: "column",
              style: {
                height: "120px"
              }
            });
}

var make = Card;

exports.make = make;
/* react Not a pure module */
