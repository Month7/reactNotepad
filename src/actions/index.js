let nextNoteId = 0;
export const addNote = (note) =>{
    return {
        type: 'ADD_NOTE',
        id:nextNoteId++,
        title:note.title,
        content:note.content
    }
}

export const removeNote = () =>{

}

export const togglNote = (id) =>{
    return {
        type: 'TOGGLE_NOTE',
        id
    }
}