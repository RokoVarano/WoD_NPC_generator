import './styles.scss';
import navbar from './modules/_navbar';
import header from './modules/_header';
import main from './modules/_main';

const d = document;

const body = d.querySelector('body');

body.appendChild(navbar());
body.appendChild(header());
body.appendChild(main());
