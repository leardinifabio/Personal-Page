(()=>{"use strict";class t{constructor(t){this.titulo=t||"Nome e Sobrenome"}render(){const t=document.createElement("div");t.classList.add("header-container");const e=document.createElement("h1");e.classList.add("home-title"),e.textContent=this.titulo;const n=document.createElement("nav");return n.classList.add("nav"),n.innerHTML='\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">Sobre</a></li>\n      <li><a href="#">Portfólio</a></li>\n      <li><a href="#">Contato</a></li>\n    </ul>\n    ',t.appendChild(e),t.appendChild(n),t}}class e{constructor(t,e){this.titulo=t||"Cargo Objetivo",this.subtitulo=e||""}render(){const t=document.createElement("div");t.classList.add("main-container");const e=document.createElement("h2");e.classList.add("main-title"),e.textContent=this.titulo;const n=document.createElement("h3");return n.classList.add("subtitle"),n.textContent=this.subtitulo,t.appendChild(e),t.appendChild(n),t}}class n{constructor(t,e){this.linkedinLink=t?`https://www.linkedin.com/in/${t}`:"https://www.linkedin.com",this.githubLink=e?`https://www.github.com/${e}`:"https://www.github.com"}render(){const t=document.createElement("div");return t.classList.add("footer-container"),t.innerHTML=`\n        <ul>\n            <li><a href=${this.linkedinLink}><img src="src/assets/images/linkedin.svg"></a></li>\n            <li><a href=${this.githubLink}><img src="src/assets/images/github.svg"></a></li>\n        </ul>\n        `,t}}const i=new class{constructor(){this.header=new t("Fabio Leardini"),this.main=new e("Desenvolvedor Front-End"),this.footer=new n("fabioleardini","tsxfabio")}render(){const t=document.createElement("div");return t.classList.add("home-container"),t.appendChild(this.header.render()),t.appendChild(this.main.render()),t.appendChild(this.footer.render()),t}};document.getElementById("home").appendChild(i.render())})();