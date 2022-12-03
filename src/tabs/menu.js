function menu() {
  const parentNode = document.querySelector("main");

  const markup = `
    <div class="menu-content">
        <h2>menu</h2>
        <p>
            Our menu celebrates the farmers and growers we work with.
            Ingredients are ethically sourced, seasonal and availability is
            often weather dependent. Our cheeses, olive oil, kaimoana, beef,
            bread, olives, fruit and vegetables are largely sourced from the
            Mahurangi region.
        </p>
        <p>
            Our food is created to share amongst friends and family. Each dish
        </p>
        <p>
            <a href="#">SAMPLE MENU - SUBJECT TO CHANGE</a>
        </p>
    </div>`;

  parentNode.textContent = "";
  parentNode.insertAdjacentHTML("beforeend", markup);
}

export default menu;
