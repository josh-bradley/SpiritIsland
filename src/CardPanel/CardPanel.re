[@react.component]
let make = (~drawPile) => {
    let (ravageCard, buildCard, exploreCard) = switch drawPile {
        | [e, b, r, ..._] => (Some(r), Some(b), Some(e));
        | [e, b] => (None, Some(b), Some(e));
        | [e] => (None, None, Some(e));
        | [] => (None, None, None);
    };

    <div>
        <CardDisplay card={ravageCard} />
        <CardDisplay card={buildCard} />
        <CardDisplay card={exploreCard} />
    </div>
}