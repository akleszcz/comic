import React, { Component } from 'react';
import VolumeMenu from './VolumeMenu';
import '../css/Menu.css';

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
              title: "The Beginning"
            },
            {
              number: 2,
              title: "Another chapter"
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

    this.createVolumeItems = this.createVolumeItems.bind(this);
  }

  createVolumeItems(volume) {
    return <VolumeMenu key={volume.number} number={volume.number} title={volume.title} chapters={volume.chapters}/>
  }

  render() {
    const volumes = this.state.volumes;
    const volumeItems = volumes.map(this.createVolumeItems);
    return (
      <nav className="menu">
        {volumeItems}
      </nav>
    );
  }
}

export default Menu;
