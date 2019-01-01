function count_same_elements(collection) {
  let group_count = get_group_count(collection);
  let key_count_array = [];
  for (let key in group_count) {
    key_count_array.push(key_count(key, group_count[key]));
  }
  return key_count_array;
}

function get_group_count(collection) {
  let collection_object = {};
  for (let element of collection) {
    if (collection_object[element]) {
      collection_object[element] += 1;
    } else {
      collection_object[element] = 1;
    }
  }
  return collection_object;
}

function key_count(key, count) {
  let obj = {};
  obj['key'] = key;
  obj['count'] = count;
  return obj;
}

module.exports = count_same_elements;
