import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import Entry from './Entry'
import './EntryList.css';


class EntryList extends Component {

  render() {
    const countlable = `${this.props.entries.length} ${this.props.entries.length !== 1 ? "Items" : "Item"}`
    const entries = this.props.entries.map((entry) =>
      <li className="EntryList-entry" key={entry.id}>
        <Entry entry={entry} />
      </li>
    );
    return (<div className="EntryList">
      <span className="EntryList-count">{countlable}</span>
      <ul>
        {entries}
      </ul>
    </div>)
  }

}

EntryList.defaultProps = {
  entries: []
}

// export default EntryList

// {
//   "data": {
//     "user": {
//       "name": "Michael",
//       "surname": "Mrowetz",
//       "initials": "MM",
//       "entries": []
//     }
//   }
// }

export default createFragmentContainer(
  EntryList,
  // This `_list` fragment name suffix corresponds to the prop named `list` that
  // is expected to be populated with server data by the `<TodoList>` component.
  graphql`
    fragment EntryList_list on User {
      # Specify any fields required by '<TodoList>' itself.
      initials
      # Include a reference to the fragment from the child component.
      entries {
        ...Entry_entry
      }
    }
  `,
);
