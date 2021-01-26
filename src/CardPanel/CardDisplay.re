open InvaderCards;
open MaterialUi;

[@react.component]
let make = (~card, ~cardPosName) => {
    let cardDetails = switch card {
        | Some(x) => x -> landTypeToString;
        | None => [|{ name: "No card", colour: "white" }|];
    };

    <>
        <InvaderCard cardDetails={cardDetails} />
        <Typography variant={`H6} align={`Center} >
            {React.string(cardPosName)}
        </Typography>
    </>;
}