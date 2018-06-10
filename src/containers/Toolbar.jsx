import React,{Component} from 'react';
import './Toolbar.css'
import { connect } from 'react-redux';
import { addNote,toggleFavorite,removeNote } from '../actions'

const mapStateToProps = state => {
    return {
        note:state.notes.activeNote
    }
}

let Toolbar = ({dispatch,note}) => {
    
    var favorite = note.favorite == true?'starred':'';
    return (
        <div className="toolbar">
            <i className="glyphicon glyphicon-plus" onClick={()=>{dispatch(addNote())}}></i>
            <i className={`glyphicon glyphicon-star ${favorite}`} onClick={()=>{dispatch(toggleFavorite())}}></i>
            <i className="glyphicon glyphicon-remove" onClick={()=>{dispatch(removeNote())}}></i>
        </div>
    )
}

Toolbar = connect(mapStateToProps)(Toolbar);

export default Toolbar;