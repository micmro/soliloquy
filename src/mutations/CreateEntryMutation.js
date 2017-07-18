import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../createRelayEnvironment'

const mutation = graphql`
  mutation CreateEntryMutation($input: EntryInput!) {
    createEntry(newEntry: $input) {
      id,
      message,
      created,
      edited
    }
  }
`;


const configs = [{
  type: 'RANGE_ADD',
  parentID: 'shipId',
  connectionInfo: [{
    key: 'entries',
    parentID: "1",
    rangeBehavior: 'append',
  }],
  // edgeName: 'newShipEdge',
}];


function CreateEntryMutation(entryID) {
  const variables = {
    input: { message: entryID },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log('Success!', response)
      },
      onError: err => console.error(err),
      configs,
    },
  );
}

export default CreateEntryMutation
