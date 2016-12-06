function* zip(...its) {
  its = its.map(it => it[Symbol.iterator]());
  while(true) {
    const vs = its.map(it => it.next());
    if (vs.some(v => v.done)) return;
    yield vs.map(v => v.value);
  }
}