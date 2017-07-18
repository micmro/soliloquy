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
      name,
      initials,
      entries {
        id,
        message,
        created,
        edited
      }
    }
  }
`

class App extends Component {

  render() {

    // const dummyEntries = [1,2,3,4,5,6].map(x => ({
    //   id: x,
    //   initial: 'MM',
    //   message: `message ${x}`,
    //   created: Date.now()
    // }));

    // return (
    //   <div className="App">
    //     <EntryList entries={dummyEntries} />
    //     <CreateEntry />
    //   </div>
    // );


// {
//   user(id: 1) {
//     name,
//     initials,
//     entries {
//       id,
//       message,
//       created,
//       edited
//     }
//   }
// }

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
                <EntryList entries={props.user.entries} />
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