/**
 * @flow
 * @relayHash ef85f93d6484eec57d9f8d21e2ffcef1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateEntryMutationVariables = {|
  input: {
    message: string;
  };
|};

export type CreateEntryMutationResponse = {|
  +createEntry: ?{|
    +id: string;
    +message: string;
    +created: number;
    +edited: ?number;
  |};
|};
*/


/*
mutation CreateEntryMutation(
  $input: EntryInput!
) {
  createEntry(newEntry: $input) {
    id
    message
    created
    edited
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EntryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateEntryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "newEntry",
            "variableName": "input",
            "type": "EntryInput"
          }
        ],
        "concreteType": "Entry",
        "name": "createEntry",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "message",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "created",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "edited",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateEntryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EntryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateEntryMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "newEntry",
            "variableName": "input",
            "type": "EntryInput"
          }
        ],
        "concreteType": "Entry",
        "name": "createEntry",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "message",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "created",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "edited",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateEntryMutation(\n  $input: EntryInput!\n) {\n  createEntry(newEntry: $input) {\n    id\n    message\n    created\n    edited\n  }\n}\n"
};

module.exports = batch;
