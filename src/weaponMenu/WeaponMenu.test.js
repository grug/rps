import React from 'react';
import ReactDOM from 'react-dom';
import WeaponMenu from './WeaponMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeaponMenu weapons={['rock', 'paper', 'scissors']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
