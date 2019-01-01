function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(e => flatten_arr(collection_b).includes(e));
}

function flatten_arr(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten_arr(cur) : cur), []);
}

module.exports = collect_same_elements;
