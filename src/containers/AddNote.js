import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import Toolbar from '../components/Toolbar'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addNote(){
            dispatch(addNote())
        }
    }
}

const AddNoteButton = connect(
    mapDispatchToProps
)(Toolbar)

export default AddNoteButton;