[@react.component]
let make = () => {
    let (drawPile, setDrawPile) = React.useState(() => []);
    let (drawnPile, setDrawnPile) = React.useState(() => []);
    let (isExploring, setIsExploring) = React.useState(() => false);

    let explore = (dp) => {
        switch dp {
            | [nextCard, ...rest] => {
                setDrawPile(_ => rest)
                setDrawnPile(_ => [[nextCard], ...drawnPile])
                setIsExploring(_ => true)
            }
            | [] => ()
        }
    };

    let advanceCards = () => {
      setIsExploring(_ => false);
    };

    let onCardSelection = (cards) => {
        setDrawPile(_ => cards);
    };

    <div>
        {
            switch (drawPile, drawnPile) {
                | ([], []) => <CardOrderEntry onCardSelection />
                | (_, _) => {
                    <>
                        <MaterialUi_Container maxWidth={MaterialUi.Container.MaxWidth.xl}>
                          <CardPanel drawnPile drawPileCount={drawPile -> List.length} isExploring={isExploring} />
                          {
                            switch(isExploring) {
                              | true => <MaterialUi_Button onClick={_ => advanceCards()}>{React.string("Advance Cards")}</MaterialUi_Button>
                              | false => <MaterialUi_Button onClick={_ => explore(drawPile)}>{React.string("Explore")}</MaterialUi_Button>
                            }
                          }
                          
                        </MaterialUi_Container>
                    </>
                }
            }
        }
    </div>
}