export const SHOW_SEARCH_BUTTONS = "SHOW_SEARCH_BUTTONS"
export const HIDE_SEARCH_BUTTONS = "HIDE_SEARCH_BUTTONS"

export const showSearchBtn = () => {
    return {
        type: SHOW_SEARCH_BUTTONS,
    }
}

export const hideSearchBtn = () => {
    return {
        type: HIDE_SEARCH_BUTTONS,
    }
}

