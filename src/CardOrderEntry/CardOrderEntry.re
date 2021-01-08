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

    let onClick = _ => { onCardSelection(cardOrder); };

    <div>
        <input onChange type_="text"></input>
        <MaterialUi_Button onClick>{React.string("Load")}</MaterialUi_Button>
    </div>;
}; 