import React,{Component} from 'react';
import './Editor.css';

const Editor = () =>{
    return (
        <div className="note-editor">
            <div className="form-group">
                <input type="text" 
                className="title form-control"
                placeholder="请输入标题"/>
                <textarea
                className="form-control" 
                row="3" placeholder="请输入正文" >
                </textarea>
            </div>
        </div>
    )
}

export default Editor;