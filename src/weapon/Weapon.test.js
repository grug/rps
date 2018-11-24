import React from 'react';
import ReactDOM from 'react-dom';
import Weapon from './Weapon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weapon
    name="rock"
    key="rock"
    src="./"
    active={true}
    selected={true}
    winner={true}
    onClick={() => {}}/>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
