import React, { Component } from 'react';
import Avatar from './Avatar'
import './Entry.css';


class Entry extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }


  deleteEntry() {
    console.log("delete", this.props.id)
  }

  editEntry() {
    console.log("edit", this.props.id)
  }

  render() {
    const formatedDate = (new Date(this.props.created)).toLocaleString()
    return (<div className="Entry">
      <Avatar initial={this.props.initial} />
      <div className="Entry-message-wrap">
        {this.props.message}
        <span className="Entry-buttons">
          <button title="Edit Entry" type="button" onClick={this.editEntry}>🖊</button>
          <button title="Delete Entry" type="button" onClick={this.deleteEntry}>✖️</button>
        </span>
      </div>
      <span className="Entry-created">{formatedDate}</span>
    </div>
    );
  }
}

Entry.defaultProps = {
  id: 1,
  initial: "MM",
  message: 'First Entry....',
  created: Date.now()
};

export default Entry