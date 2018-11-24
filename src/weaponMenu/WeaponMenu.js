import React from 'react';
import Weapon from '../weapon/Weapon';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './WeaponMenu.css';

const weaponImages = {
  'rock': rock,
  'paper': paper,
  'scissors': scissors
}

export default (props) => {
  const weapons = props.weapons.map(weapon => (
    <Weapon
      name={weapon}
      key={weapon}
      src={weaponImages[weapon]}
      active={props.active}
      selected={props.selectedWeapon === weapon}
      winner={props.selectedWeapon === weapon && props.winner}
      onClick={props.onClick}>
    </Weapon>
  ));
  return <section className="WeaponMenu">
    {weapons}
  </section>
}