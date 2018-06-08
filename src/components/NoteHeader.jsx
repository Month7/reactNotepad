import React,{Component} from 'react';

const NoteHeader = () =>{
    return (
        <div className="btn-group btn-group-justified">
            <div className="btn-group">
                <button type="button" className="btn btn-default">
                    所有笔记
                </button>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-default">
                    收藏的笔记
                </button>
            </div>
        </div>
    )
}
export default NoteHeader;