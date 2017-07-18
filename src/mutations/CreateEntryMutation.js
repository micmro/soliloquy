import {
  commitMutation,
  graphql,
} from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
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





function sharedUpdater(store, newEdge) {
  const userProxy = store.get("1");
  const conn = ConnectionHandler.getConnection(
    userProxy,
    'EntryList_allEntries',
  );
  window.testConnectionHandler = ConnectionHandler
  window.testUserProxy = userProxy
  console.log("conn", conn)
  //userProxy.getLinkedRecords("entries")
  // ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

const configs = [{
  type: 'RANGE_ADD',
  parentID: '1'
}];

function CreateEntryMutation(text) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {message: text}
      },
      // updater: (store) => {
      //   // const payload = store.getRootField('addTodo');
      //   const payload = store.getRootField('createEntry');
      //   console.log("payload", payload, payload.getValue("message"), payload.getValue("id"));
      //   //testpayload.getValue("id")
      //   window.teststore = store
      //   window.testpayload = payload
      //   // const newEdge = payload.getLinkedRecord('todoEdge');
      //   sharedUpdater(store, payload);
      // },
      // optimisticUpdater: (store) => {
      //   const id = 'client:newTodo:' + tempID++;
      //   const node = store.create(id, 'Todo');
      //   node.setValue(text, 'text');
      //   node.setValue(id, 'id');
      //   const newEdge = store.create(
      //     'client:newEdge:' + tempID++,
      //     'TodoEdge',
      //   );
      //   newEdge.setLinkedRecord(node, 'node');
      //   sharedUpdater(store, user, newEdge);
      //   const userProxy = store.get(user.id);
      //   userProxy.setValue(
      //     userProxy.getValue('totalCount') + 1,
      //     'totalCount',
      //   );
      // },
      configs
    }
  );
}

export default CreateEntryMutation;


// import {
//   commitMutation,
//   graphql,
// } from 'react-relay'
// import environment from '../createRelayEnvironment'
// import {ConnectionHandler} from 'relay-runtime'


// // mutation {
// //   createEntry(newEntry: {message: "hope is a good thing 1"}) {
// // id,
// // message,
// // created,
// // edited
// //   }
// // }



// const mutation = graphql`
//   mutation CreateEntryMutation($input: EntryInput!) {
//     createEntry(newEntry: $input) {
//       id,
//       message,
//       created,
//       edited
//     }
//   }
// `;

// let tempID = 0;
// const defaultUser = "1"

// export default function CreateEntryMutation(newEntry, viewerId, callback) {
//   const variables = {
//     input: newEntry
//   }
//   commitMutation(
//     environment,
//     {
//       mutation,
//       variables,
//       onCompleted: (response) => {
//         console.log("onCompleted", response, environment)
//         if (typeof callback === "function") {
//           callback(response)
//         }
//       },
//       onError: err => console.error(err),
//       // optimisticUpdater: (proxyStore) => {
//       //   // 1 - create the `newPost` as a mock that can be added to the store
//       //   const id = 'client:newEntry:' + tempID++
//       //   const newEntry = proxyStore.create(id, 'Entry')
//       //   newEntry.setValue(id, 'id')
//       //   newEntry.setValue(newEntry.message, 'message')
//       //   newEntry.setValue(Date.now(), 'created')

//       //   // 2 - add `newPost` to the store
//       //   const viewerProxy = proxyStore.get(viewerId)
//       //   const connection = ConnectionHandler.getConnection(viewerProxy, 'EntryList')
//       //   console.log("optimisticUpdater", connection, viewerProxy)
//       //   if (connection) {
//       //     ConnectionHandler.insertEdgeAfter(connection, newEntry)
//       //   }
//       // },
//       updater: (proxyStore) => {
//         // 1 - retrieve the `newPost` from the server response
//         const createEntryField = proxyStore.getRootField('createEntry')
//         console.log("updater.createEntryField", createEntryField, proxyStore)
//         window.testproxyStore = proxyStore
//         window.testcreateEntryField  = createEntryField
//         window.testConnectionHandler = ConnectionHandler

//         // const newEntry = createEntryField.getLinkedRecord('post')

//         // 2 - add `newPost` to the store
//         const viewerProxy = proxyStore.get(viewerId)
//         console.log("updater.viewerProxy", viewerProxy)
//         // const viewerProxy = proxyStore.getRoot()
//         const connection = ConnectionHandler.getConnection(viewerProxy, 'EntryList')
//         console.log("updater.connection", connection)
//         // if (connection) {
//         //   ConnectionHandler.insertEdgeAfter(connection, createEntryField)
//         // }
//       },
//     },
//   )
// }