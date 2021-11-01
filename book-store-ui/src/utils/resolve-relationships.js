const byIdType = (expected) => (value) => expected.id === value.id && expected.type === value.type;

const fromEntries = (acc, [key, value]) => {
  return {...acc, [key]: value};
};

export const resolveRelationships = ({data, included}) => {
  const find = (predicate) => included.find(predicate);

  const resolve = (data) => {
    return Array.isArray(data) ? data.map(byIdType).map(find).map(resolveOne) : find(byIdType(data)).attributes;
  };

  const resolveOne = ({id, attributes = {}, relationships = {}}) => {
    return Object.entries(relationships)
      .map(([key, {data}]) => [key, resolve(data)])
      .reduce(fromEntries, {id, ...attributes});
  };

  return Array.isArray(data) ? data.map(resolveOne) : resolveOne(data);
};
