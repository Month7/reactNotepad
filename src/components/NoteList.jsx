import React,{Component} from 'react';
import Note from './Note';
import './Note.css';
import NoteHeader from './NoteHeader';


const NoteList = ({notes,onNoteClick,showType,activeNote,onSwitchShow})=>{
   
    return (
            <div className="notes-list">
                <NoteHeader show={showType} onToggleShow={onSwitchShow}/>
                <div className="container">
                    <div className="list-group">
                        {notes.map(note=>(
                            <Note key={note.id} activeNote={activeNote} note={note} onNoteClick={()=>{onNoteClick(note)}}/>
                        ))}
                    </div>
                </div>
            </div>
    )
}
// ...note 建立一系列以note的key为key,value为value的属性

export default NoteList