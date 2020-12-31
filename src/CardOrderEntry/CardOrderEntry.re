open InvaderCards

[@react.component]
let make = (~onCardSelection) => {
    let (cardOrder, setCardOrder) = React.useState(() => []);
    let onChange = event => {
        let cardOrderText = ReactEvent.Form.target(event)##value;
        let result = cardOrderText 
                        |> Js.String.split("")
                        |> Array.to_list
                        |> List.fold_left(mapCardIdToCard, [])
                        |> List.rev;

        setCardOrder(_ => result);
    }

    let onClick = _ => { onCardSelection(cardOrder); }

    let result = cardOrder
                    |> List.map(landTypeToString);

    let a = switch result {
        | [x, ..._] => x
        | [] => "No more cards"
    };

    <div>
        <input onChange type_="text"></input>
        <div>{React.string(a)}</div>
        <button onClick>{React.string("Next")}</button>
    </div>;
}; 