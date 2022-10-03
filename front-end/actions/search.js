
export const SET_SEARCH_TERM = "SET_SEARCH_TERM"
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT"

export const SET_SHOW_NEXT = "SET_SHOW_NEXT"
export const SET_SHOW_PREVIOUS = "SET_SHOW_PREVIOUS"
export const RESET_SEARCH = "RESET_SEARCH"
export const SET_SHOW_PREVIOUS_TO_TRUE = "SET_SHOW_PREVIOUS_TO_TRUE"
export const SET_SHOW_NEXT_TO_TRUE = "SET_SHOW_PREVIOUS_TO_TRUE"


export const setSearchTerm = (term) => {
    return {
        type: SET_SEARCH_TERM,
        payload: term
    }
}

export const setSearchResults= (term) => {
    return {
        type: GET_SEARCH_RESULT,
        payload: term
    }
}

export const setShowPreviousToTrue = () => {
    return {
        type: SET_SHOW_PREVIOUS_TO_TRUE
    }
}

export const setShowNextToTrue = () => {
    return {
        type: SET_SHOW_NEXT_TO_TRUE
    }
}

export const setShowPrevious = () => {
    return {
        type: SET_SHOW_PREVIOUS
    }
}

export const setShowNext = () => {
    return {
        type: SET_SHOW_NEXT
    }
}

export const setResetSearch = () => {
    return {
        type: RESET_SEARCH
    }
}


export const getSearchResults = (search) => {

    let term = search.term
    let start = search.start
    console.log("current state", search)
    if (term === ''){
        console.log("blank")
        return;
    }

    



   
    
    
    console.log("start", start)

 
    console.log("What is term", term)
    return async (dispatch) => {

        dispatch(setResetSearch())

        try {
            const res = await fetch(`http://127.0.0.1:8000/search/?q=${search.term}&start=${search.start}`)
            const data = await res.json()
            if (data !== undefined) {

                if (data.items !== undefined){
                    console.log("data:", data)
                    dispatch(setSearchResults(data))
                }

                if (search.start > 10) {
                    console.log("start", start)
                    console.log("search value is greather than 10:", search)
                    dispatch(setShowPreviousToTrue())
                } 

                if (data.searchInformation.totalResults > start + 10 && (start + 10 <= 91)) {
                    console.log("start", start)
                    console.log("value isless than 91:", start)
                    dispatch(setShowNextToTrue())
                } 
            }
        } catch (err) { 
            console.log("Error occured")
                console.log(err)
        }
    }
          

}


