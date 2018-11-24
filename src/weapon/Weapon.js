import React, { Component } from 'react';

import './Weapon.css';

export default class Weapon extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.active) {
      this.props.onClick(this.props.name);
    }
  }

  render() {
    const active = this.props.active ? 'active' : '';
    const selected = this.props.selected ? 'selected' : '';
    const winner = this.props.winner ? 'winner' : '';
    const classes = `Weapon ${this.props.name} ${active} ${selected} ${winner}`;
    return <div className={classes} onClick={this.handleClick}>
      <img src={this.props.src} alt={this.props.name} className="weapon-image"/>
    </div>
  }
}