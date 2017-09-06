import React, { Component } from 'react';
import { render } from 'react-dom';
import My from './My';
import App from './index.lesx';

console.log('App:', App);

render(<App
	components={{
		My,
	}}
/>, document.querySelector('#root'));
