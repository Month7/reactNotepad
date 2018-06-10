import { connect } from 'react-redux'
import { toggleNote,switchShow } from '../actions'
import NoteList from '../components/NoteList';
import Editor from '../components/Editor';

const filterNote = (notes,filter) =>{
    switch(filter){
        case 'SHOW_ALL':
            return notes;
        case 'SHOW_FAVOURITE':
            return notes.filter(note => note.favorite);
        default:
            throw new Error('错误的filter:'+filter);
    }    
}

const mapStateToProps = state => {
    return {
        notes: filterNote(state.notes.notes,state.showNotes),
        showType: state.showNotes,
        activeNote: state.notes.activeNote
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNoteClick:(note)=>{
            dispatch(toggleNote(note))
        },
        onSwitchShow:(filter)=> {
            dispatch(switchShow(filter))
            
        }
    }
}

const visbleNoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList)

export default visbleNoteList;