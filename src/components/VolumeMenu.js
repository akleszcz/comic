import React, { Component } from 'react';
import '../css/VolumeMenu.css';
import { Link } from 'react-router-dom';

class VolumeMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.createChapterItems = this.createChapterItems.bind(this);
    this.toggleChaptersVisibility = this.toggleChaptersVisibility.bind(this);
    this.state = {
      chaptersVisible: true
    }
  }

  createChapterItems(chapter) {
    return <li key={chapter.number}>
      <Link to={`/volumes/${this.props.number}/chapters/${chapter.number}`}>
        Chapter {chapter.number}: {chapter.title}
      </Link>
    </li>
  }

  toggleChaptersVisibility() {
    this.setState({chaptersVisible: !this.state.chaptersVisible});
  }

  render() {
    const chapters = this.props.chapters;
    const chapterItems = chapters.map(this.createChapterItems);
    return (
      <section className="volumeMenu">
        <Link to={`/volumes/${this.props.number}/chapters/1`} onClick={() => this.toggleChaptersVisibility()}>
          Volume {this.props.number}: {this.props.title}
        </Link>
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
