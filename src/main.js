import home from "./tabs/home";

function main(parentNode) {
  const markup = `<main></main>`;
  parentNode.insertAdjacentHTML("beforeend", markup);

  home(parentNode);
}

export default main;
