function menu() {
  const parentNode = document.querySelector("main");

  const markup = `
    <div class="contact-content">
        <h2>contact us</h2>
        <form action="">
            <p class="field">
                <label for="name">name</label>
                <input type="text" id="name" required />
            </p>
            <p class="field">
                <label for="mail">email</label>
                <input type="email" id="mail" required />
            </p>
            <p class="field">
                <label for="tel">phone</label>
                <input type="tel" id="tel" required />
            </p>
            <p class="field">
                <label for="msg">message</label>
                <textarea name="msg" id="msg" cols="70" rows="10"></textarea>
            </p>
            <button type="submit">submit</button>
        </form>
    </div>`;

  parentNode.textContent = "";
  parentNode.insertAdjacentHTML("beforeend", markup);
}

export default menu;
