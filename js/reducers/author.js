const initialState = {isFetching:false};

export function author (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_AUTHOR':
      return Object.assign({},action.author);
    default:
      return state;
  }
}