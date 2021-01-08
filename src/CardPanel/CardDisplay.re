open InvaderCards

[@react.component]
let make = (~card) => {
    let cardDetails = switch card {
        | Some(x) => x -> landTypeToString;
        | None => [|{ name: "No card", colour: "white" }|];
    };

    <div>
        {
            cardDetails
            |> Array.map(x => { <Card cardDetail={x} /> })
            |> React.array;
        }
    </div>;
}