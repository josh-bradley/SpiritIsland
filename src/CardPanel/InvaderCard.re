open InvaderCards;
[@react.component]
let make = (~cardDetails) => {
    <MaterialUi_Grid
        container={true}
        direction={`Column}
        style=(ReactDOM.Style.make(~height="120px", ()))>
    {
        cardDetails
        |> List.map((cardDetail) => {
            <MaterialUi_Grid 
                item={true}
                style=(ReactDOM.Style.make(~flexGrow="1", ()))>
                <MaterialUi_Paper
                    elevation={MaterialUi_Types.Number.int(8)}
                    style=(ReactDOM.Style.make(
                        ~color="#FFF",
                        ~height="100%",
                        ~backgroundColor=cardDetail.colour, ()))>
                    {React.string(cardDetail.InvaderCards.name)}
                </MaterialUi_Paper>
            </MaterialUi_Grid>
        })
        |> Array.of_list
        |> React.array;
    }
    </MaterialUi_Grid>
}