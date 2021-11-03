const API_URL = 'http://localhost:8000';

const headers = {
  'Content-Type': 'application/vnd.api+json',
  Accept: 'application/vnd.api+json',
};

const SIMULATE_DELAY_MS = 1000;

const parseResponse = (res) => res.json().then(delay(SIMULATE_DELAY_MS));

const delay =
  (ms = 0) =>
  (data) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(data), ms);
    });

export const createService = (endpoint) => {
  return {
    fetchAll: () => {
      return fetch(`${API_URL}/${endpoint}`).then(parseResponse);
    },
    fetchOne: (id) => {
      return fetch(`${API_URL}/${endpoint}/${id}`).then(parseResponse);
    },
    updateOne: ({id, attributes}) => {
      return fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({data: {attributes}}),
      }).then(parseResponse);
    },
  };
};
