function home() {
  const parentNode = document.querySelector("main");

  const markup = `
    <div class="home-content">
      <h2>The Smoko Room</h2>
      <p>
        Having moved from the original site in Leigh, the Sawmill Brewery
        has been turning out beer from premises just out of Matakana since
        February 2016. The end of July 2016 we opened the doors to visitors
        and locals to experience the kind of hospitality Sawmill is about -
        straight forward and generous.
      </p>
  </div>`;

  parentNode.textContent = "";
  parentNode.insertAdjacentHTML("beforeend", markup);
}

export default home;
