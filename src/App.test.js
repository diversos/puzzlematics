import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { smallTime } from './Components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('[0-10] to 2 digit string', () => {
  expect(smallTime(5)).toBe("05");
  expect(smallTime(22)).toBe("22");
  expect(smallTime(0)).toBe("00");
  expect(smallTime("3")).toBe("03");
})