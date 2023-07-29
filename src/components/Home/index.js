import './styles.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Home {
    constructor() {
        this.header = new Header('Fabio Leardini');
        this.main = new Main('Desenvolvedor Front-End');
        this.footer = new Footer('fabioleardini', 'tsxfabio');
    }

    render() {
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home-container');

        homeContainer.appendChild(this.header.render());
        homeContainer.appendChild(this.main.render());
        homeContainer.appendChild(this.footer.render());


        return homeContainer;
    }
}