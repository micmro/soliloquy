/**
 * @flow
 * @relayHash af517c9c87d81df2a226bf01b6a36e88
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteEntryMutationVariables = {|
  input: string;
|};

export type DeleteEntryMutationResponse = {|
  +deleteEntry: ?{|
    +id: string;
  |};
|};
*/


/*
mutation DeleteEntryMutation(
  $input: ID!
) {
  deleteEntry(id: $input) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteEntryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "input",
            "type": "ID"
          }
        ],
        "concreteType": "Entry",
        "name": "deleteEntry",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
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
  "name": "DeleteEntryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeleteEntryMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "input",
            "type": "ID"
          }
        ],
        "concreteType": "Entry",
        "name": "deleteEntry",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation DeleteEntryMutation(\n  $input: ID!\n) {\n  deleteEntry(id: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
