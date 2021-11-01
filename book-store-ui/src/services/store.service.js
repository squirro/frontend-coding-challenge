const api = 'http://localhost:8000';

const headers = {
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json',
};

const parseResponse = (res) => res.json();

export const StoreService = {
  fetchAll: () => {
    return fetch(`${api}/stores?sort=rating`).then(parseResponse);
  },
  fetchOne: (id) => {
    return fetch(`${api}/stores/${id}`).then(parseResponse);
  },
  updateOne: ({id, attributes}) => {
    return fetch(`${api}/stores/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({data: {attributes}}),
    }).then(parseResponse);
  },
};
