import { SET_SEARCH_TERM, GET_SEARCH_RESULT } from "../actions/search";

const initialState = {
    term: null
}
export default function searchReducer(state = initialState, action) { 
    console.log(action)
     switch(action.type) {
        case SET_SEARCH_TERM:
            return {...state,
            term: action.payload}
        case GET_SEARCH_RESULT: //create this
            return null ;
        default:
          return state;
      }
};