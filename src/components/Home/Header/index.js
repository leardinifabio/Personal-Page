import './styles.scss';
export default class Header {
    constructor(titulo) {
        this.titulo = titulo || 'Nome e Sobrenome'
    }

    render() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = this.titulo;

    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.innerHTML = 
    `
    <ul>
      <li><a href="#">sobre</a></li>
      <li><a href="#">portfólio</a></li>
      <li><a href="#">contato</a></li>
    </ul>
    `;

    headerContainer.appendChild(homeTitle);
    headerContainer.appendChild(nav);

    return headerContainer;

    }
}