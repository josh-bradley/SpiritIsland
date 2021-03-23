open InvaderCards;

[@react.component]
let make = (~card, ~cardPosName) => {
    let cardDetails = switch card {
      | Some(x) => x
      | None => []
    } |> fun
          | [] => [{ name: "No card", colour: "white" }]
          | [...x] => x |> List.map(landTypeToDetails2) |> List.flatten;

    <>
        <InvaderCard cardDetails={cardDetails} />
        <MaterialUi_Typography variant={`H6} align={`Center} >
            {React.string(cardPosName)}
        </MaterialUi_Typography>
        <MaterialUi_Button>{React.string("Pause")}</MaterialUi_Button>
    </>;
} 