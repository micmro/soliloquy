import React, { Component } from 'react';
import UpdateEntryMutation from '../mutations/UpdateEntryMutation';
import './EditEntry.css';


class EditEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.entry.message};

    this.submitEntry = this.submitEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitEntry(event) {
    event.preventDefault();
    UpdateEntryMutation(
      this.props.entry.id,
      this.state.value,
      this.props.onDone
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount(){
    this.editInput.focus();
  }

  render() {
    return (<form className="EditEntry" onSubmit={this.submitEntry}>
        <input ref={(i) => { this.editInput = i }} value={this.state.value} onChange={this.handleChange} />
        <span className="EditEntry-buttons">
          <button title="Save Edit" type="submit"><span role="img" aria-label="Save">💾</span></button>
          <button type="reset" onClick={this.props.onDone}>Cancel</button>
        </span>
      </form>
    );
  }
}

export default EditEntry;