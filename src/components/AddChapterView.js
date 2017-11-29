import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('chapterStore')
@observer
class AddChapterView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: ''
    };
    this.addChapter = this.addChapter.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  addChapter() {
    this.props.chapterStore.createChapter(this.state.title, this.props.position, this.props.volumeId);
  }

  render() {
    return (
      <div>
        <input type = "text" onChange={this.handleTitleChange}/>
        <button onClick={this.addChapter}>+</button>
      </div>
    );
  }
}

export default AddChapterView;
