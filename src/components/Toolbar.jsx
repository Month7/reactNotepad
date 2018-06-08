import React,{Component} from 'react';
import './Toolbar.css'

class Toolbar extends Component{
    constructor(){
        super();
    }
    addNote(){
        
    }
    render(){
        return (
            <div className="toolbar">
                <i className="glyphicon glyphicon-plus"onClick={this.addNote}></i>
                <i className="glyphicon glyphicon-star"></i>
                <i className="glyphicon glyphicon-remove"></i>
            </div>
        )
    }
}
export default Toolbar