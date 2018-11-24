import React, { Component } from 'react';
import WeaponMenu from '../weaponMenu/WeaponMenu';

import './Board.css';

const defaultState = {
  aiWeapon: '',
  userWeapon: '',
  winner: '',
  showingResult: false,
};

export default class Board extends Component {
  constructor() {
    super();
    this.state = defaultState;

    // A little bit verbose but more extensible and permits clean code when calculating result
    this.weaponRules = {
      'rock': {
        beats: {
          'scissors': true,
          'paper': false
        }
      },
      'paper': {
        beats: {
          'rock': true,
          'scissors': false
        }
      },
      'scissors': {
        beats: {
          'paper': true,
          'rock': false
        }
      }
    }

    this.handleWeaponClick = this.handleWeaponClick.bind(this);
  }

  getWeapons() {
    return Object.keys(this.weaponRules);
  }

  handleWeaponClick(selectedWeapon) {
    if (this.state.showingResult) return;

    this.setState({ 
      aiWeapon: this.selectWeaponForAi(),
      userWeapon: selectedWeapon,
    }, (state) => {
      const result = this.calculateResult(this.state.aiWeapon, this.state.userWeapon);
      this.setState({ 
        winner: result,
        showingResult: true
      });
      this.props.onResult(result);

      // Block the game for 2 sec to show the result
      setTimeout(() => this.setState(defaultState), 2000);
    });
  }

  selectWeaponForAi() {
    return this.getWeapons()[Math.floor(Math.random() * 3)];
  }

  calculateResult(aiWeapon, userWeapon) {
    if (aiWeapon === userWeapon) {
      return 'tie';
    }
    return this.weaponRules[userWeapon].beats[aiWeapon] ? 'user' : 'ai';
  }

  render() {
    return <section className="Board">
      <h2>AI</h2>
      <WeaponMenu
        active={false}
        selectedWeapon={this.state.aiWeapon}
        winner={this.state.winner === 'ai'}
        weapons={this.getWeapons()}>
      </WeaponMenu>
      <h2>You</h2>
      <WeaponMenu
        active={!this.state.showingResult}
        selectedWeapon={this.state.userWeapon}
        winner={this.state.winner === 'user'}
        onClick={this.handleWeaponClick}
        weapons={this.getWeapons()}>
      </WeaponMenu>
    </section>
  }
}