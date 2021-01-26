open MaterialUi;
open InvaderCards;
[@react.component]
let make = (~cardDetails) => {
    <Grid
        container={true}
        direction={`Column}
        style=(ReactDOM.Style.make(~height="120px", ()))>
    {
        cardDetails
        |> Array.map((cardDetail) => {
            <Grid 
                item={true}
                style=(ReactDOM.Style.make(~flexGrow="1", ()))>
                <Paper
                    elevation={MaterialUi_Types.Number.int(8)}
                    style=(ReactDOM.Style.make(
                        ~color="#FFF",
                        ~height="100%",
                        ~backgroundColor=cardDetail.colour, ()))>
                    {React.string(cardDetail.InvaderCards.name)}
                </Paper>
            </Grid>
        })
        |> React.array;
    }
    </Grid>
}