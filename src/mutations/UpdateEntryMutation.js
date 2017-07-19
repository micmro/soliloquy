import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../createRelayEnvironment'

const defaultUserID = "1"

const mutation = graphql`
  mutation UpdateEntryMutation($id: ID!, $input: EntryInput!) {
    updateEntry(id: $id, changes: $input) {
      id
      message
      created
      edited
    }
  }
`;

const updater = (proxyStore, userId) => {
  const userStore = proxyStore.get(userId)
  const newEntry = proxyStore.getRootField("updateEntry");
  const prevEntries = userStore.getLinkedRecords("entries");
  window.testStore = proxyStore
  if (prevEntries) {
    const changedEntryIndex = prevEntries.findIndex(e => e.id === newEntry.id)
    // This is not ideal, I am sure there must be a better way
    prevEntries[changedEntryIndex].message = newEntry.message
    prevEntries[changedEntryIndex].edited = newEntry.edited
    userStore.setLinkedRecords(prevEntries, 'entries');
  }
}

function UpdateEntryMutation(entryID, message, callback) {
  const variables = {
    id: entryID,
    input: { message },
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

export default UpdateEntryMutation
