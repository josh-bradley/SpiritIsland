open InvaderCards

[@react.component]
let make = (~card) => {
    let cardDetails = switch card {
        | Some(x) => x -> landTypeToString;
        | None => [|{ name: "No card", colour: "white" }|];
    };

    <div>
        <Card cardDetails={cardDetails} />
    </div>;
}