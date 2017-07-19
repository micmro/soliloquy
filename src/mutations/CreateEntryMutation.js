import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../createRelayEnvironment'

const defaultUserID = "1"

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

/** Updater for the  */
const updater = (proxyStore, userId) => {
  const userStore = proxyStore.get(userId)
  const newEntry = proxyStore.getRootField("createEntry");
  const prevEntries = userStore.getLinkedRecords("entries");
  if (prevEntries) {
    prevEntries.push(newEntry); // You might want to append or prepend
    userStore.setLinkedRecords(prevEntries, 'entries');
  }
}

function CreateEntryMutation(entryID, callback) {
  const variables = {
    input: { message: entryID },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response)
      },
      // In production I'd also use a optimisticUpdater, but to save time I'll skip this
      updater: (store) => updater(store, defaultUserID),
      onError: err => console.error(err),
    },
  );
}

export default CreateEntryMutation
