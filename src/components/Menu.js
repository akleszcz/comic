import React, { Component } from 'react';
import VolumeMenu from './VolumeMenu';
import '../css/Menu.css';
import volumeStore from '../stores/VolumeStore';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);

    this.createVolumeItem = this.createVolumeItem.bind(this);
  }

  createVolumeItem(volume) {
    return <VolumeMenu key={volume.number} volumeDetails={volume}/>
  }

  render() {
    const volumeItems = volumeStore.volumes.map(this.createVolumeItem);
    return (
      <nav className="menu">
        {volumeItems}
      </nav>
    );
  }
}

export default Menu;
