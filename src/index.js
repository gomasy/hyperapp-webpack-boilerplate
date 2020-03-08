import { app } from 'hyperapp';
import { state, view } from './app';

// css
import './style.scss';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

app({
    init: 0,
    view: () => view(state),
    node: document.querySelector('#app'),
});
