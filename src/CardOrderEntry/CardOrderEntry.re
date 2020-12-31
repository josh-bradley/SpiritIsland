open InvaderCards

[@react.component]
let make = () => {
    let (cardOrder, setCardOrder) = React.useState(() => "");
    let onChange = event => setCardOrder(ReactEvent.Form.target(event)##value);

    let result = cardOrder 
        |> Js.String.split("")
        |> Array.to_list
        |> List.fold_left(mapCardIdToCard, [])
        |> List.map(landTypeToString)
        |> List.rev;
    
    let show = result
                |> List.fold_left((x, y) => x ++ ", " ++ y, "");

    Js.log(show);

    <div>
        <input type_="text" onChange></input>
    </div>
}; 