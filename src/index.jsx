import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';
import getImage from './image';

const container = document.createElement('div');
document.body.appendChild(container);

const image = getImage();
ReactDOM.render(<Home image={image.image} text={image.text} />, container);
