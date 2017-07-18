import React, { Component } from 'react';
import Entry from './Entry'
import './EntryList.css';


class EntryList extends Component {

  render() {
    const countlable = `${this.props.entries.length} ${this.props.entries.length !== 1 ? "Items" : "Item"}`
    const entries = this.props.entries.map((entry) =>
      <li className="EntryList-entry" key={entry.id}>
        <Entry id={entry.id} message={entry.message} />
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

export default EntryList