import React, { Component } from 'react';
import VolumeMenu from './VolumeMenu';
import '../css/Menu.css';
import volumeStore from '../stores/VolumeStore';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      volumes: [ {
          number: 1,
          title: "Title 1",
          chapters: [
            {
              number: 1,
              title: "The Beginning",
              numberOfPages: 3
            },
            {
              number: 2,
              title: "Another chapter",
              numberOfPages: 1
            }
          ]
        },
        {
          number: 2,
          title: "Title 2",
          chapters: [
          ]
        }
      ]
    };

    this.createVolumeItem = this.createVolumeItem.bind(this);
  }

  createVolumeItem(volume) {
    return <VolumeMenu key={volume.number} number={volume.number} title={volume.title} chapters={volume.chapters}/>
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
