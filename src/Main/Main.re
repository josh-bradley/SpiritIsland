open InvaderCards

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

    
    let result = drawPile
                    |> List.map(landTypeToString)
                    |> List.fold_left((x, y) => x ++ ", " ++ y, "");
    Js.log(result);

    <div>
        {
            switch (drawPile, drawnPile) {
                | ([], []) => <CardOrderEntry onCardSelection={onCardSelection} />
                | (_, _) => {
                    <div>
                        <CardPanel drawnPile={drawnPile} drawPileCount={drawPile -> List.length} />
                        <button onClick={_ => drawCard(drawPile)}>{React.string("Draw")}</button>
                    </div>
                }
            }
        }
    </div>
}