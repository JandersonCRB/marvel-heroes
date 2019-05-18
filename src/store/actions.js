export function fetchMore(offset) {
  return {
    type: 'ASYNC_FETCH_MORE',
    payload: {
      characters: [],
      currentOffset: offset,
    },
  };
}
