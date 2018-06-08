import React,{Component} from 'react';

const Note = ({note})=>{
    return (
        <div className="list-group-item">
            {note.title}
        </div>
    )
}
export default Note;