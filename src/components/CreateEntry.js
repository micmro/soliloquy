import React, { Component } from 'react';
import './CreateEntry.css';


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
    console.log("submit entry", event.target.value, this.state.value)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.submitEntry}>
        <input className="CreateEntry" value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
      </form>
    );
  }
}

CreateEntry.defaultProps = {
  placeholder: 'Enter your message …'
};

export default CreateEntry