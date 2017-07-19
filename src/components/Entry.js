import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Avatar from './Avatar';
import EditEntry from './EditEntry';
import DeleteEntryMutation from '../mutations/DeleteEntryMutation';
import './Entry.css';


class Entry extends Component {

  state = {inEditMode: false};

  constructor(props) {
    super(props);

    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.onEditDone = this.onEditDone.bind(this);
  }

  deleteEntry() {
    DeleteEntryMutation(this.props.entry.id);
  }

  editEntry() {
    this.setState({inEditMode: true});
  }

  onEditDone() {
    this.setState({inEditMode: false});
  }

  render() {
    const entry = this.props.entry;
    const formatedDate = (new Date(entry.created)).toLocaleString()

    let content;
    if (this.state.inEditMode) {
      content = (<div className="Entry-message-wrap">
        <EditEntry entry={this.props.entry} onDone={this.onEditDone} />
      </div>);
    } else {
      content = (<div className="Entry-message-wrap">
        {entry.message}
        <span className="Entry-buttons">
          <button title="Edit Entry" type="button" onClick={this.editEntry}><span role="img" aria-label="Edit">🖊</span></button>
          <button title="Delete Entry" type="button" onClick={this.deleteEntry}><span role="img" aria-label="Delete">✖️</span></button>
        </span>
      </div>);
    }

    return (<div className="Entry">
      <Avatar initials={this.props.initials} />
      {content}
      <span className="Entry-created">{formatedDate}</span>
    </div>
    );
  }
}

export default createFragmentContainer(Entry, {
  entry: graphql`
    fragment Entry_entry on Entry {
      id
      message
      created
    }
  `,
  // initial: graphql`
  //   fragment Entry_initial on User {
  //     initials
  //   }
  // `,
});