import './styles.scss';

export default class Footer {
    constructor(linkedin, github) {
        this.linkedinLink = linkedin ? `https://www.linkedin.com/in/${linkedin}` : 'https://www.linkedin.com';
        this.githubLink = github ? `https://www.github.com/${github}` : 'https://www.github.com';
    }

    render() {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('footer-container');
        footerContainer.innerHTML =
        `
        <ul>
            <li><a href=${this.linkedinLink}><img src="src/assets/images/linkedin.svg"></a></li>
            <li><a href=${this.githubLink}><img src="src/assets/images/github.svg"></a></li>
        </ul>
        `

        return footerContainer;
    }
}