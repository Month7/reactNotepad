let nextNoteId = 1;
export const addNote = () => {
    return {
        type: 'ADD_NOTE',
        id:nextNoteId++,
    }
}

export const removeNote = () => {
    return {
        type: 'REMOVE_NOTE'
    }
}

export const updateNote = (note) => {
    return {
        type: 'UPDATE_NOTE',
        note
    }
}

export const toggleNote = (note) => {
    return {
        type: 'TOGGLE_NOTE',
        note
    }
}

export const switchShow = (filter) => {
    return {
        type: 'SWITCH_SHOW',
        filter
    }
}

export const toggleFavorite = () => {
    return {
        type: 'TOGGLE_fAVORITE',
        
    }
}