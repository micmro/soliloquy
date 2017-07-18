// import {
//   commitMutation,
//   graphql,
// } from 'react-relay';
// import { ConnectionHandler } from 'relay-runtime';
import environment from '../createRelayEnvironment'

// const mutation = graphql`
//   mutation DestroyShipMutation($input: DestroyShipData!) {
//     destroyShip(input: $input) {
//       destroyedShipId
//       faction {
//         ships {
//           id
//         }
//       }
//     }
//   }
// `;

// const configs = [{
//   type: 'NODE_DELETE',
//   deletedIDFieldName: 'destroyedShipId',
// }];



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