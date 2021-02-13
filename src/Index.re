[@bs.val] external document: Js.t({..}) = "document";

let makeContainer = () => {
  let container = document##createElement("div");
  container##setAttribute("style", "width:100%") |> ignore
  let () = document##body##appendChild(container);

  container;
};

ReactDOMRe.render(
  <Main>
  </Main>,
  makeContainer(),
);

