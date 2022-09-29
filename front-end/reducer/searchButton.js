
export default function searchButtons(state = null
    , action) {  switch(action.type) {
        case "SEARCH_VIEW":
            return true 
        case "SEARCH_RESULT_VIEW": //create this
            return null ;
        default:
          return state;
      }
};