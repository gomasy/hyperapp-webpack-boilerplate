import { h } from 'hyperapp';

// css
import './style.scss';

export const state = {
    'text': <h1>Hello world!</h1>,
}

export const view = state => (
    <div>
        {state.text}
    </div>
);
