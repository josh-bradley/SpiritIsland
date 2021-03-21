[@react.component]
let make = (~drawnPile, ~drawPileCount, ~additionalCardSlotName: option(string)=?) => {
    let (additionalCard, ravageCard, buildCard, exploreCard, discardCount) = switch drawnPile {
        | [e, b, r, f, ...discard] => (Some(f), Some(r), Some(b), Some(e), discard -> List.length);  
        | [e, b, r, ...discard] => (None, Some(r), Some(b), Some(e), discard -> List.length);
        | [e, b] => (None, None, Some(b), Some(e), 0);
        | [e] => (None, None, None, Some(e), 0);
        | [] => (None, None, None, None, 0);
    };

    <div>
        <MaterialUi_Grid container={true} spacing={`V2} style=(ReactDOM.Style.make(~flexGrow="1", ()))>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <div>{React.int(discardCount)}</div>
            </MaterialUi_Grid>
            {
              switch(additionalCardSlotName) {
                | Some(cardName) => <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                      <CardDisplay card={additionalCard} cardPosName={cardName} />
                  </MaterialUi_Grid>
                | None => React.null
              }
            }
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={ravageCard} cardPosName="Ravage" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={buildCard} cardPosName="Build" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <CardDisplay card={exploreCard} cardPosName="Explore" />
            </MaterialUi_Grid>
            <MaterialUi_Grid item={true} xs={MaterialUi.Grid.Xs._2}>
                <div>{React.int(drawPileCount)}</div>
            </MaterialUi_Grid>
        </MaterialUi_Grid>
    </div>
}