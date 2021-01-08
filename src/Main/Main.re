[@react.component]
let make = () => {
    let (drawPile, setDrawPile) = React.useState(() => []);
    let (drawnPile, setDrawnPile) = React.useState(() => []);

    let drawCard = (dp) => {
        switch dp {
            | [nextCard, ...rest] => {
                setDrawPile(_ => rest)
                setDrawnPile(_ => [nextCard, ...drawnPile]);
            }
            | [] => ()
        }
    };

    let onCardSelection = (cards) => {
        setDrawPile(_ => cards);
        drawCard(cards);
    };

    <div>
        {
            switch (drawPile, drawnPile) {
                | ([], []) => <CardOrderEntry onCardSelection={onCardSelection} />
                | (_, _) => {
                    <>
                        <CardPanel drawnPile={drawnPile} drawPileCount={drawPile -> List.length} />
                        <MaterialUi_Button onClick={_ => drawCard(drawPile)}>{React.string("Draw")}</MaterialUi_Button>
                    </>
                }
            }
        }
    </div>
}