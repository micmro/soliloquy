const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// URL just hardcoded for now - should be in a conf file or so
const serverURL = "http://localhost:8080/graphql"

function fetchQuery(
  operation,
  variables,
) {
  return fetch(serverURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})