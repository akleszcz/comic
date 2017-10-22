import React, { Component } from 'react';

class Chapter extends Component {
  render() {
    return (
      <p>
        Volume {this.props.match.params.volumeNumber}, Chapter {this.props.match.params.chapterNumber}
      </p>
    );
  }
}

export default Chapter;
