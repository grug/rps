import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu win={0} tie={0} loss={0} onReset={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
