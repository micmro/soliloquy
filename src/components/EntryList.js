import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import Entry from './Entry'
import './EntryList.css';


class EntryList extends Component {

  render() {
    console.log("EntryList props", this.props)
    const entries = this.props.data.entries || []
    const initials = this.props.data.initials
    const countlable = `${entries.length} ${entries.length !== 1 ? "Items" : "Item"}`
    return (<div className="EntryList">
      <span className="EntryList-count">{countlable}</span>
      <ul>
        {entries.map((entry) => (
          <li className="EntryList-entry" key={`Entry_${entry.id}`}>
            <Entry entry={entry} initial={initials} />
          </li>
        ))}
      </ul>
    </div>)
  }
}

// EntryList.defaultProps = {
//   entries: []
// }

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

// This `_list` fragment name suffix corresponds to the prop named `list` that
// is expected to be populated with server data by the `<TodoList>` component.


export default createFragmentContainer(
  EntryList,
  graphql`
    fragment EntryList on User {
      initials
      entries {
        id
        ...Entry_entry
      }
    }
  `,
);
