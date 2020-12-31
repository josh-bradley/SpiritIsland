'use strict';

var List = require("bs-platform/lib/js/list.js");
var Js_math = require("bs-platform/lib/js/js_math.js");

var cardsLevel1 = {
  hd: {
    TAG: /* Level1 */0,
    _0: /* Sand */0
  },
  tl: {
    hd: {
      TAG: /* Level1 */0,
      _0: /* Jungle */1
    },
    tl: {
      hd: {
        TAG: /* Level1 */0,
        _0: /* Wetland */2
      },
      tl: {
        hd: {
          TAG: /* Level1 */0,
          _0: /* Mountain */3
        },
        tl: /* [] */0
      }
    }
  }
};

var cardsLevel2 = {
  hd: {
    TAG: /* Level2 */1,
    _0: /* Sand */0
  },
  tl: {
    hd: {
      TAG: /* Level2 */1,
      _0: /* Jungle */1
    },
    tl: {
      hd: {
        TAG: /* Level2 */1,
        _0: /* Wetland */2
      },
      tl: {
        hd: {
          TAG: /* Level2 */1,
          _0: /* Mountain */3
        },
        tl: {
          hd: {
            TAG: /* Level2 */1,
            _0: /* Coastal */4
          },
          tl: /* [] */0
        }
      }
    }
  }
};

var cardsLevel3 = {
  hd: {
    TAG: /* Level3 */2,
    _0: [
      /* Sand */0,
      /* Jungle */1
    ]
  },
  tl: {
    hd: {
      TAG: /* Level3 */2,
      _0: [
        /* Sand */0,
        /* Wetland */2
      ]
    },
    tl: {
      hd: {
        TAG: /* Level3 */2,
        _0: [
          /* Sand */0,
          /* Mountain */3
        ]
      },
      tl: {
        hd: {
          TAG: /* Level3 */2,
          _0: [
            /* Jungle */1,
            /* Wetland */2
          ]
        },
        tl: {
          hd: {
            TAG: /* Level3 */2,
            _0: [
              /* Mountain */3,
              /* Jungle */1
            ]
          },
          tl: {
            hd: {
              TAG: /* Level3 */2,
              _0: [
                /* Wetland */2,
                /* Mountain */3
              ]
            },
            tl: /* [] */0
          }
        }
      }
    }
  }
};

function getRandomCard(cardGroup) {
  var idx = Js_math.random_int(0, List.length(cardGroup));
  return List.nth(cardGroup, idx);
}

function filterList(filter, source) {
  return List.filter(function (x) {
                return List.for_all((function (y) {
                              return y !== x;
                            }), filter);
              })(source);
}

function mapCardIdToCard(cardGroup, cardId) {
  var nextCard;
  switch (cardId) {
    case "1" :
        nextCard = getRandomCard(filterList(cardGroup, cardsLevel1));
        break;
    case "2" :
        nextCard = getRandomCard(filterList(cardGroup, cardsLevel2));
        break;
    case "3" :
        nextCard = getRandomCard(filterList(cardGroup, cardsLevel3));
        break;
    case "C" :
    case "c" :
        nextCard = {
          TAG: /* Level2 */1,
          _0: /* Coastal */4
        };
        break;
    default:
      nextCard = undefined;
  }
  if (nextCard !== undefined) {
    return {
            hd: nextCard,
            tl: cardGroup
          };
  } else {
    return cardGroup;
  }
}

function landTypeToString(x) {
  var landTypeVal;
  switch (x.TAG | 0) {
    case /* Level1 */0 :
    case /* Level2 */1 :
        landTypeVal = x._0;
        break;
    case /* Level3 */2 :
        landTypeVal = x._0[0];
        break;
    
  }
  switch (landTypeVal) {
    case /* Sand */0 :
        return "Sand";
    case /* Jungle */1 :
        return "Jungle";
    case /* Wetland */2 :
        return "Wetland";
    case /* Mountain */3 :
        return "Mountain";
    case /* Coastal */4 :
        return "Coastal";
    
  }
}

exports.cardsLevel1 = cardsLevel1;
exports.cardsLevel2 = cardsLevel2;
exports.cardsLevel3 = cardsLevel3;
exports.getRandomCard = getRandomCard;
exports.filterList = filterList;
exports.mapCardIdToCard = mapCardIdToCard;
exports.landTypeToString = landTypeToString;
/* No side effect */
