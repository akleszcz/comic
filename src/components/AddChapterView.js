import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Add from './icons/Add';

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
      <div className="add-chapter-container">
        <input type = "text" onChange={this.handleTitleChange}/>
        <Add onClick={this.addChapter}/>
      </div>
    );
  }
}

export default AddChapterView;
