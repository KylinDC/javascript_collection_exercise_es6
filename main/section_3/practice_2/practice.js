function create_updated_collection(collection_a, object_b) {
  for (let i of object_b.value) {
    for (let t of collection_a) {
      if (t['key'] === i) {
        t['count'] -= Math.floor(t['count'] / 3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
