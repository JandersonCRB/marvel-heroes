export function fetchMore(offset) {
  return {
    type: 'ASYNC_FETCH_MORE',
    payload: {
      characters: [], // Gonna fill this in saga
      currentOffset: offset,
    },
  };
}

export function selectCharacter(id) {
  return {
    type: 'ASYNC_SELECT_CHARACTER',
    payload: {
      id,
      selectedCharacter: {}, // Gonna fill this in saga
    },
  }
}