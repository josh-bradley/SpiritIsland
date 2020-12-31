open InvaderCards

[@react.component]
let make = (~card) => {
    let d = switch card {
        | Some(x) => x -> landTypeToString;
        | None => "No card";
    };

    <div>{React.string(d)}</div>
}