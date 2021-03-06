import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Add from './icons/Add';
import '../css/AddChapterView.scss';

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
        <button className="icon-button"><Add onClick={this.addChapter}/></button>
      </div>
    );
  }
}

export default AddChapterView;
