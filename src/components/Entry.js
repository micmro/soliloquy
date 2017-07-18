import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
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
    console.log("delete", this.props.entry.id)
  }

  editEntry() {
    console.log("edit", this.props.entry.id)
  }

  render() {
    const entry = this.props.entry;
    const formatedDate = (new Date(entry.created)).toLocaleString()
    return (<div className="Entry">
      <Avatar initial={this.props.initial} />
      <div className="Entry-message-wrap">
        {entry.message}
        <span className="Entry-buttons">
          <button title="Edit Entry" type="button" onClick={this.editEntry}><span role="img" aria-label="Edit">🖊</span></button>
          <button title="Delete Entry" type="button" onClick={this.deleteEntry}><span role="img" aria-label="Delete">✖️</span></button>
        </span>
      </div>
      <span className="Entry-created">{formatedDate}</span>
    </div>
    );
  }
}

Entry.defaultProps = {
  entry: {
    id: 1,
    message: 'First Entry....',
    created: Date.now()
  },
  initial: 'MM'
};

// graphql`
//   # This fragment only applies to objects of type 'Todo'.
//   fragment App_user on Entry {
//     id
//     message
//     created
//   }
// `

// export default Entry
// Export a *new* React component that wraps the original `<TodoItem>`.
export default createFragmentContainer(Entry, {
  // For each of the props that depend on server data, we define a corresponding
  // key in this object. Here, the component expects server data to populate the
  // `item` prop, so we'll specify the fragment from above at the `item` key.
  entry: graphql`
    fragment Entry_entry on Entry {
      id
      message
      created
    }
  `,
  initial: graphql`
    fragment Entry_initial on User {
      initials
    }
  `,
});