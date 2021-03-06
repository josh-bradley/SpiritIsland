type cardTypeDetails = {
    colour: string,
    name: string
};

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

let cardsLevel1 = [Level1(Sand), Level1(Jungle), Level1(Wetland), Level1(Mountain)];
let cardsLevel2 = [Level2(Sand), Level2(Jungle), Level2(Wetland), Level2(Mountain), Level2(Coastal)];
let cardsLevel3 = [Level3((Sand, Jungle)), Level3((Sand, Wetland)), Level3((Sand, Mountain)),
                    Level3((Jungle, Wetland)), Level3((Mountain, Jungle)), Level3((Wetland, Mountain))];

let getRandomCard = (cardGroup) => {
    let randomFromZero = Js.Math.random_int(0)
    let idx = cardGroup -> List.length -> randomFromZero;
    cardGroup -> List.nth(idx)
};

let filterList = (filter, source) => {
    List.filter((x) => List.for_all((y) => y !== x, filter), source)
}

let mapCardIdToCard = (cardGroup: list(invaderCard), cardId: string) => {
    let filterCards = cardGroup -> filterList;
    let getFilteredCards = x => getRandomCard(filterCards(x))
    let nextCard = switch cardId {
        | "1" => Some(cardsLevel1 -> getFilteredCards)
        | "2" => Some(cardsLevel2 -> getFilteredCards)
        | "3" => Some(cardsLevel3 -> getFilteredCards)
        | "C" | "c" => Some(Level2(Coastal))
        | _ => None
    };

    switch nextCard {
        | Some(x) => [x, ...cardGroup];
        | None => cardGroup 
    }
};

let landToDetails =
    fun
        | Sand => { name: "Sand", colour: "#E8BD80" }
        | Jungle => { name: "Jungle", colour: "#558D56" }
        | Wetland => { name: "Wetland", colour: "#BAE3EA" }
        | Mountain => { name: "Mountain", colour: "#868686" }
        | Coastal => { name: "Coastal", colour: "#65BDE4" };

let landTypeToDetails2 = (x) => {
    switch x {
        | Level1(a) => [a]
        | Level2(a) => [a]
        | Level3((a, b)) => [a, b]
    } |> List.map ((x) => landToDetails(x))
};
