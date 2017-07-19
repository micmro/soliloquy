import React, { Component } from 'react';
import './CreateEntry.css';
import CreateEntryMutation from '../mutations/CreateEntryMutation'


const defaultUserID = "1"

class CreateEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.submitEntry = this.submitEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Ref: https://facebook.github.io/relay/docs/mutations.html
  submitEntry(event) {
    event.preventDefault();
    console.log("submit entry", event.target.value, this.state.value);

    CreateEntryMutation(this.state.value)
    // CreateEntryMutation({
    //   message: this.state.value
    // }, defaultUserID, (resp) => {
    //   console.log("response")
    // })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="CreateEntry" onSubmit={this.submitEntry}>
        <input value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
      </form>
    );
  }
}

CreateEntry.defaultProps = {
  placeholder: 'Enter your message …'
};

export default CreateEntry