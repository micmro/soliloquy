import React, { Component } from 'react';
import CreateEntry from './CreateEntry'
import EntryList from './EntryList'
import {
  QueryRenderer,
  graphql,
} from 'react-relay' // or require('react-relay/compat') for compatibility
import './App.css'
import environment from '../createRelayEnvironment'

const AppAllEntriesQuery = graphql`
  query AppAllEntriesQuery($userId: ID!) {
    user(id: $userId) {
      ...EntryList
    }
  }
`

class App extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllEntriesQuery}
        variables={{
          userId: 1,
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props)
            return (
              <div className="App">
                <EntryList data={props.user} />
                <CreateEntry />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    )
  }
}

export default App;