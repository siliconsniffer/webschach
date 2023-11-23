class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <style>
        :root {
            --bg-header: #272727;
            --drop-shadow: 3px 3px 3px #212121;
            --nav-a: #9b9b9b;
        }

        .light-mode {
            --bg-header: #e1e1e1;
            --drop-shadow: 3px 3px 3px #c8c8c8;
            --nav-a: #504f4f;
        }
        
        .navbar {
          display: flex;
          justify-content: space-evenly;
          padding: 1.5px;
          filter: drop-shadow(var(--drop-shadow));
          background-color: var(--bg-header);
          position: relative;
          overflow: hidden;
        }
        
        .navbar-a {
            align-self: center;
            color: var(--nav-a);
            flex-grow: 1;
            font-size: larger;
        }
        
        .navbar-big {
            flex-grow: 5;
            font-size:x-large;
        }
        
        .navbar-brand {
            display: flex;
            justify-content: center;
            font-weight: bolder;
            text-transform: uppercase;
        
            &:hover {
                color: grey;
            }
        }
        
        @media screen and (max-width: 700px) {
            .navbar-a [
                font-size: large;
            ]
        }
      </style>
      <div class="navbar">
        <a class="navbar-a" href="page1.html">
            <div class="navbar-brand">Page 1</div>
        </a>
        <a class="navbar-a" href="page2.html">
            <div class="navbar-brand">Page 2</div>
        </a>
        <a class="navbar-a navbar-big" href="index.html">
            <div class="navbar-brand">Home</div>
        </a>
        <a class="navbar-a" href="impressum.html">
            <div class="navbar-brand">Impressum</div>
        </a>
        <a class="navbar-a" href="sources.html">
            <div class="navbar-brand">Sources</div>
        </a>
    </div>
      `;
    }
}

customElements.define("header-component", Header);
