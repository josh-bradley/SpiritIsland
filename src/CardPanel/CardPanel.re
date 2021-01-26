[@react.component]
let make = (~drawnPile, ~drawPileCount) => {
    let (ravageCard, buildCard, exploreCard, discardCount) = switch drawnPile {
        | [e, b, r, ...discard] => (Some(r), Some(b), Some(e), discard -> List.length);
        | [e, b] => (None, Some(b), Some(e), 0);
        | [e] => (None, None, Some(e), 0);
        | [] => (None, None, None, 0);
    };

    

    <div>
        <MaterialUi_Grid container={true}>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._3}>
                <div>{React.int(discardCount)}</div>
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={ravageCard} cardPosName="Ravage" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={buildCard} cardPosName="Build" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={exploreCard} cardPosName="Explore" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._3}>
                <div>{React.int(drawPileCount)}</div>
            </MaterialUi_Grid>
        </MaterialUi_Grid>
    </div>
}