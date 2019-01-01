function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(e => object_b.value.includes(e));
}

module.exports = collect_same_elements;
