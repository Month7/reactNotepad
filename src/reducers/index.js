import { combineReducers } from 'redux'
import notes from './notes';
import showNotes from './showNotes';

const notesApp = combineReducers({
    notes,
    showNotes
})

export default notesApp;