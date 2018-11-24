import React, { Component } from 'react';

import './Menu.css';

export default class Menu extends Component {
  render(props) {
    return <header className="Menu">
      <p>Win: {this.props.win}</p>
      <p>Tie: {this.props.tie}</p>
      <p>Loss: {this.props.loss}</p>
      <button onClick={this.props.onReset}>Reset</button>
    </header>;
  }
}