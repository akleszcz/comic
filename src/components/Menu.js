import React, { Component } from 'react';
import VolumeMenu from './VolumeMenu';
import '../css/Menu.scss';
//import volumeStore from '../stores/VolumeStore';
import { inject, observer } from 'mobx-react';
import MediaQuery from 'react-responsive';
import LoadingSpinner from './LoadingSpinner';

@inject('volumesStore')
@inject('userStore')
@inject('uiStateStore')
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
    const isMenuVisible = this.props.uiStateStore.isMenuVisible;
    if (this.props.volumesStore.isLoading) {
      return (
        <nav className="menu"><LoadingSpinner /></nav>
      );
    }
    return (
      <MediaQuery minWidth={770}>
        {(matches) => {
          if (matches || isMenuVisible) {
            return <nav className="menu">{volumeItems}</nav>;
          }
          return null;
        }}
      </MediaQuery>
    );
  }
}

export default Menu;
