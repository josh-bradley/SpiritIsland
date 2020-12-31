open InvaderCards

[@react.component]
let make = () => {
    let (cardOrder, setCardOrder) = React.useState(() => []);
    let onCardSelection = (cards) => setCardOrder(_ => cards);

    
    let result = cardOrder
                    |> List.map(landTypeToString)
                    |> List.fold_left((x, y) => x ++ ", " ++ y, "");
    Js.log(result);

    <div>
        <CardOrderEntry onCardSelection={onCardSelection} />
    </div>
}