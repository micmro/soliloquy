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

// Does set Node in `entries` to null, there might be a better sollution
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
      onError: err => console.error(err),
      configs,
    },
  );
}

export default DeleteEntryMutation