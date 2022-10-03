import { SET_SEARCH_TERM, GET_SEARCH_RESULT, SET_SHOW_NEXT, SET_SHOW_PREVIOUS, RESET_SEARCH, SET_SHOW_PREVIOUS_TO_TRUE, SET_SHOW_NEXT_TO_TRUE} from "../actions/search";

const initialState = {
    term: null,
    data: null,
    searching: false,
    start: 1, 
    showPrevious: false,
    showNext: false
}
export default function searchReducer(state = initialState, action) { 
    console.log(action)
     switch(action.type) {
        case SET_SEARCH_TERM:
            return {...state,
            term: action.payload}
        case GET_SEARCH_RESULT: 
            return {...state,
            searching: false,
            data: action.payload}
        case RESET_SEARCH: //remove me
                return {
                    ...state,
                    data: null,
                    searching: true,
                    showNext: false,
                    showPrevious: false
                    
                }
        case SET_SHOW_PREVIOUS_TO_TRUE:
            return {
                ...state,
                showPrevious: true
            }
        case SET_SHOW_NEXT_TO_TRUE:
            return {
                    ...state,
                    showNext: true
            }
        case SET_SHOW_PREVIOUS:
            return {...state,
                start: state.start -= 10}
        case SET_SHOW_NEXT:
            return {...state,
                start: state.start += 10}
        default:
          return state;
      }
};