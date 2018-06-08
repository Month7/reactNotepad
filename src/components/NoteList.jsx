import React,{Component} from 'react';
import Note from './Note';
import './Note.css';
import NoteHeader from './NoteHeader';

class NoteList extends Component{
    constructor(){
        super();
        this.notes = [
            {
                id:0,
                title:'测试1',
                content:'测试1的内容'
            },
            {
                id:1,
                title:'测试2',
                content:'测试1的内容'
            },
            {
                id:2,
                title:'测试3',
                content:'测试1的内容'
            },
            {
                id:3,
                title:'测试4',
                content:'测试1的内容'
            },
            {
                id:4,
                title:'测试5',
                content:'测试1的内容'
            }
        ];
    }
    render(){
        let notes = this.notes;
        return (
            <div className="notes-list">
                <NoteHeader />
                <div className="container">
                    <div className="list-group">
                        {notes.map(note=>(
                            <Note key={note.id} note={note} onClick={()=>{this.onNoteClick(note.id)}}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

// const NoteList = ({notes,onNoteClick})=>{
//     return (
//         <div className="list-group">
//             {notes.map(note=>(
//                 <Note key={note.id} {...note} onClick={()=>{this.onNoteClick(note.id)}}/>
//             ))}
//         </div>
//     )
// }
// ...note 建立一系列以note的key为key,value为value的属性

export default NoteList