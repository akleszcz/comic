import React, { Component } from 'react';
import '../css/VolumeMenu.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import AddChapterView from './AddChapterView';

@inject('userStore')
@observer
class VolumeMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.createChapterItem = this.createChapterItem.bind(this);
    this.toggleChaptersVisibility = this.toggleChaptersVisibility.bind(this);
    this.state = {
      chaptersVisible: true
    }
  }

  createChapterItem(chapter, index) {
    let removeButton = null, addChapterView = null;
    if (this.props.userStore.currentUser.admin) {
      removeButton = <button>x</button>;
      addChapterView = <AddChapterView position={index + 1} volumeId={this.props.volumeDetails.id}/>;
    }
    return <li key={index}>
      <Link to={{  pathname: `/chapters/${chapter.id}`}}>
        Chapter {index + 1}: {chapter.title}
      </Link>
      {removeButton}
      {addChapterView}
    </li>
  }

  toggleChaptersVisibility() {
    this.setState({chaptersVisible: !this.state.chaptersVisible});
  }

  render() {
    const { volumeDetails, volumeNumber } = this.props;
    const chapters = volumeDetails.chapters;
    /*let addChapterView;
    if (this.props.userStore.currentUser.admin) {
      addChapterView = <li><AddChapterView position={0} volumeId={this.props.volumeDetails.id}/></li>;
    }*/
    const chapterItems = chapters.map(this.createChapterItem);
    return (
      <section className="volume-menu">
        <h2 onClick={() => this.toggleChaptersVisibility()}>
          Volume {volumeNumber}: {volumeDetails.title}
        </h2>
        <ul>
          {
          this.state.chaptersVisible
            ?
            chapterItems
            : null
          }
        </ul>
      </section>
    );
  }
}

export default VolumeMenu;
