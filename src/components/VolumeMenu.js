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

  createChapterItem(chapter) {
    return <li key={chapter.number}>
      <Link to={{  pathname: `/volumes/${this.props.volumeDetails.number}/chapters/${chapter.number}`}}>
        Chapter {chapter.number}: {chapter.title}
      </Link>
    </li>
  }

  toggleChaptersVisibility() {
    this.setState({chaptersVisible: !this.state.chaptersVisible});
  }

  render() {
    const { volumeDetails } = this.props;
    const chapters = volumeDetails.chapters;
    const chapterItems = chapters.map(this.createChapterItem);
    return (
      <section className="volume-menu">
        <h2 onClick={() => this.toggleChaptersVisibility()}>
          Volume {volumeDetails.number}: {volumeDetails.title}
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
