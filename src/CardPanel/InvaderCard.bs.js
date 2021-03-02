'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var MaterialUi_Types = require("@jsiebern/bs-material-ui/src/MaterialUi_Types.bs.js");
var Core = require("@material-ui/core");

function InvaderCard(Props) {
  var cardDetails = Props.cardDetails;
  return React.createElement(Core.Grid, {
              children: $$Array.of_list(List.map((function (cardDetail) {
                          return React.createElement(Core.Grid, {
                                      children: React.createElement(Core.Paper, {
                                            children: cardDetail.name,
                                            elevation: MaterialUi_Types.$$Number.$$int(8),
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
                        }), cardDetails)),
              container: true,
              direction: "column",
              style: {
                height: "120px"
              }
            });
}

var make = InvaderCard;

exports.make = make;
/* react Not a pure module */
