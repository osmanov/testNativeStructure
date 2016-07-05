const LOAD_SUCCESS='testNativeStructure/author/LOAD_SUCCESS';

const initialState = {isFetching:false};

export function updateAuthor(){
  return {
    type: LOAD_SUCCESS,
    author:{name:'Osmanov'}
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({},action.author);
    default:
      return state;
  }
}