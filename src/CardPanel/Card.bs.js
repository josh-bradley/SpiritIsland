'use strict';

var React = require("react");
var Core = require("@material-ui/core");

function Card(Props) {
  var cardDetail = Props.cardDetail;
  return React.createElement(Core.Paper, {
              children: cardDetail.name,
              style: {
                backgroundColor: cardDetail.colour,
                color: "#FFF",
                height: "120px"
              }
            });
}

var make = Card;

exports.make = make;
/* react Not a pure module */
