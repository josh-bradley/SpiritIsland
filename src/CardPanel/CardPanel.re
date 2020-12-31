[@react.component]
let make = (~drawnPile, ~drawPileCount) => {
    let (ravageCard, buildCard, exploreCard, discardCount) = switch drawnPile {
        | [e, b, r, ...discard] => (Some(r), Some(b), Some(e), discard -> List.length);
        | [e, b] => (None, Some(b), Some(e), 0);
        | [e] => (None, None, Some(e), 0);
        | [] => (None, None, None, 0);
    };

    <div>
        <div>{React.int(discardCount)}</div>
        <CardDisplay card={ravageCard} />
        <CardDisplay card={buildCard} />
        <CardDisplay card={exploreCard} />
        <div>{React.int(drawPileCount)}</div>
    </div>
}