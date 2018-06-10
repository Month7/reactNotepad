import React from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../actions'
import Editor from '../components/Editor'

const mapStateToProps = state => {
    return {
        note:state.notes.activeNote
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change:(e) => {
            dispatch(updateNote(e))
        }
    }
}

const NoteEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)

export default NoteEditor;