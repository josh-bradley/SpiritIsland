type landtype =
    | Sand
    | Jungle
    | Wetland
    | Mountain
    | Coastal;

type invaderCard = 
    | Level1(landtype)
    | Level2(landtype)
    | Level3((landtype, landtype));

let cardsLevel1 = [|Level1(Sand), Level1(Jungle), Level1(Wetland), Level1(Mountain)|];
let cardsLevel2 = [|Level2(Sand), Level2(Jungle), Level2(Wetland), Level2(Mountain), Level2(Coastal)|];
let cardsLevel3 = [|Level3((Sand, Jungle)), Level3((Sand, Wetland)), Level3((Sand, Mountain)),
                    Level3((Jungle, Wetland)), Level3((Mountain, Jungle)), Level3((Wetland, Mountain))|];

let getRandomCard = (cardGroup: array(invaderCard)) => {
    let randomFromZero = Js.Math.random_int(0)
    let idx = cardGroup -> Array.length -> randomFromZero;
    cardGroup[idx]
};

let mapCardIdToCard = (cardGroup: list(invaderCard), cardId: string) => {
    let nextCard = switch cardId {
        | "1" => Some(getRandomCard(cardsLevel1))
        | "2" => Some(getRandomCard(cardsLevel2))
        | "3" => Some(getRandomCard(cardsLevel3))
        | "C" | "c" => Some(Level2(Coastal))
        | _ => None
    };

    switch nextCard {
        | Some(x) => [x, ...cardGroup];
        | None => cardGroup 
    }
};

let landTypeToString = (x) => {
    let landTypeVal = switch x {
        | Level1(a) => a
        | Level2(a) => a
        | Level3((a, _)) => a
    };

    switch landTypeVal {
        | Sand => "Sand"
        | Jungle => "Jungle"
        | Wetland => "Wetland"
        | Mountain => "Mountain"
        | Coastal => "Coastal"
    };
};