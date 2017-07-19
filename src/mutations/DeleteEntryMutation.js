import environment from '../createRelayEnvironment'
import {
  commitMutation,
  graphql,
} from 'react-relay';

const mutation = graphql`
  mutation DeleteEntryMutation($input: ID!) {
    deleteEntry(id: $input) {
      id
    }
  }
`;

const configs = [{
  type: 'NODE_DELETE',
  deletedIDFieldName: 'id',
}];

function DeleteEntryMutation(entryID) {
  const variables = {
    input: entryID,
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

export default DeleteEntryMutation