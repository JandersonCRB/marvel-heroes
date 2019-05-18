const INITIAL_STATE = {
  characters: [],
  currentOffset: 0,
  selectedCharacter: null,
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_MORE':
      return { ...state, ...action.payload, characters: [...state.characters, ...action.payload.characters] };
    case 'SELECT_CHARACTER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}