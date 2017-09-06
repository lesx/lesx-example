import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './index.lesx';

console.log('App:', App);

render(<App />, document.querySelector('#root'));

