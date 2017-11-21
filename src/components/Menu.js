import React, { Component } from 'react';
import VolumeMenu from './VolumeMenu';
import '../css/Menu.css';
//import volumeStore from '../stores/VolumeStore';
import { inject, observer } from 'mobx-react';

@inject('volumesStore')
@observer
class Menu extends Component {
  constructor(props, context) {
    super(props, context);

    this.createVolumeItem = this.createVolumeItem.bind(this);
  }

  componentDidMount() {
    this.props.volumesStore.loadVolumes();
  }

  createVolumeItem(volume, index) {
    return <VolumeMenu key={volume.id} volumeDetails={volume} volumeNumber={index + 1}/>
  }

  render() {
    const volumeItems = this.props.volumesStore.volumes.map(this.createVolumeItem);
    return (
      <nav className="menu">
        {volumeItems}
      </nav>
    );
  }
}

export default Menu;
