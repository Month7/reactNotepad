import React,{Component} from 'react';
var test = function(){
    console.log('wtf');
}

const NoteHeader = ({show,onToggleShow}) =>{
   
    const showAll = show === 'SHOW_ALL'?'active':'';
    const showFavorite = show === 'SHOW_FAVORITE'?'active':'';
    return (
        <div className="btn-group btn-group-justified">
            <div className="btn-group">
                <button type="button" className={`${showAll} btn btn-default`}
                onClick={()=>{onToggleShow('SHOW_ALL')}}>
                    所有笔记
                </button>
            </div>
            <div className="btn-group">
                <button type="button" className={`${showFavorite} btn btn-default`}
                onClick={()=>{onToggleShow('SHOW_FAVOURITE')}}>
                    收藏的笔记
                </button>
            </div>
        </div>
    )
}
export default NoteHeader;