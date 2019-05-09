import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('says Hello World!', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toMatch("See your Starred Repos:");
  ReactDOM.unmountComponentAtNode(div);
});
