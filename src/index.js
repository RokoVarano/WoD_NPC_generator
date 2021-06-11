import './styles.scss';
import header from './modules/frontend/_header';
import main from './modules/frontend/_mortal';

const d = document;

const body = d.querySelector('body');

body.appendChild(header());
body.appendChild(main());
