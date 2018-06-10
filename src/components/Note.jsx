import React,{Component} from 'react';

const Note = ({note,onNoteClick,activeNote})=>{
    
    var active = note.id == activeNote.id?'active':'';
    return (
        <div className={`list-group-item ${active}`} onClick={onNoteClick}>
            {note.title}
        </div>
    )
}
export default Note;