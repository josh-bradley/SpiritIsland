[@react.component]
let make = (~cardDetail) => {
    <MaterialUi_Paper
        style=(ReactDOM.Style.make(
            ~color="#FFF",
            ~backgroundColor=cardDetail.colour,
            ~height="120px", ()))>
        {React.string(cardDetail.InvaderCards.name)}
    </MaterialUi_Paper>
}