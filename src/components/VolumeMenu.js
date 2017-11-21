import React, { Component } from 'react';
import '../css/VolumeMenu.css';
import { Link } from 'react-router-dom';

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
    return <li key={index}>
      <Link to={{  pathname: `/chapters/${chapter.id}`}}>
        Chapter {index + 1}: {chapter.title}
      </Link>
    </li>
  }

  toggleChaptersVisibility() {
    this.setState({chaptersVisible: !this.state.chaptersVisible});
  }

  render() {
    const { volumeDetails, volumeNumber } = this.props;
    const chapters = volumeDetails.chapters;
    const chapterItems = chapters.map(this.createChapterItem);
    return (
      <section className="volume-menu">
        <h2 onClick={() => this.toggleChaptersVisibility()}>
          Volume {volumeNumber}: {volumeDetails.title}
        </h2>
        <ul>
          {
          this.state.chaptersVisible
            ? chapterItems
            : null
          }
        </ul>
      </section>
    );
  }
}

export default VolumeMenu;
