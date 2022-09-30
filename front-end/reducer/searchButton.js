
import { SHOW_SEARCH_BUTTONS, HIDE_SEARCH_BUTTONS } from "../actions/searchButtons";


export default function searchReducer(state = true
    , action) {  switch(action.type) {
        case SHOW_SEARCH_BUTTONS:
            return true 
        case HIDE_SEARCH_BUTTONS: 
            return false ;
        default:
          return state;
      }
};