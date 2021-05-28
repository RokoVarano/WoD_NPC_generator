import './styles.scss';

const d = document;

const body = d.querySelector('body');
const navbar = d.createElement('nav');
const header = d.createElement('header');
const main = d.createElement('main');
const footer = d.createElement('footer');

body.appendChild(navbar);
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

