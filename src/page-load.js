import header from "./header";
import main from "./main";
import footer from "./footer";

function pageLoad(parentNode) {
  header(parentNode);
  main(parentNode);
  footer(parentNode);
}

export default pageLoad;
