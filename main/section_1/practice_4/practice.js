function collect_same_elements(collection_a, object_b) {
  let result = [];
  collection_a.forEach(cur => {
    if (object_b.value.includes(cur.key)) {
      result.push(cur.key);
    }
  });
  return result;
}

module.exports = collect_same_elements;
