function header(parentNode) {
  const markup = `
    <header>
        <nav>
            <h1>sawmill</h1>
            <ul>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">menu</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    </header>`;

  parentNode.insertAdjacentHTML("beforeend", markup);
}

export default header;
