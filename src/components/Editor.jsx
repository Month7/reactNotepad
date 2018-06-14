import React,{Component} from 'react';
import './Editor.css';
class Editor extends Component{
	constructor(props){
		super(props);
		var {note} = this.props;
		this.state = {
			value:note
		}
		this.titleChange = this.titleChange.bind(this);
		this.contentChange = this.contentChange.bind(this);
		this.update = this.update.bind(this);
		this.change = this.props.change;
		
	}
	componentWillReceiveProps(nextProps){
		let {note} = nextProps;
		this.setState({
			value:note 
		});
	}
	titleChange(e){
		var id = this.state.value.id;
		var value = e.target.value;
		var content = this.state.value.content;
		this.setState({
			value:{
				id: id,
				title: value,
				content: content,
				favorite:this.state.value.favorite
			}
		})
	}
	contentChange(e){
		this.setState({
			value:{
				id: this.state.value.id,
				title: this.state.value.title,
				content:e.target.value,
				favorite:this.state.value.favorite
			}
		})
	}
	update(){
		var title = this.state.value.title;
		var id = this.state.value.id;
		this.change(this.state.value);
		this.setState({
			value:{
				id:id,
				title:title,
				content:this.state.value.content,
				favorite:this.state.value.favorite
			}
		})
	}
	render(){
		var note = this.state.value;
		return (
			<div className="note-editor">
				<div className="form-group">
					<input type="text" 
					className="title form-control"
					value={note.title || ''}
					onChange={this.titleChange}
					placeholder="请输入标题"/>
					<textarea
					className="form-control" 
					row="3" placeholder="请输入正文" 
					value={note.content || ''}
					onChange={this.contentChange}
					>
					</textarea>
					<button onClick={this.update}>保存</button>
				</div>
			</div>
		)
	}
}

export default Editor;

// import React,{Component} from 'react';
// import './Editor.css';
// class Editor extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			value:this.props.note
// 		}
	
// 		this.update = this.update.bind(this);
// 		this.change = this.props.change;
// 		this.title = null;
// 		this.flag = true;

// 		this.textTitle = null;
// 		this.textContent = null;
// 		this.id = null;
// 		this.favorite = null;
// 	}
// 	componentWillReceiveProps(nextProps){
// 		console.log(nextProps);
// 	}
// 	componentDidMount(){
// 		this.textTitle.value = this.props.note.title;
// 		this.textContent.value = this.props.note.content;
// 		this.id = this.props.note.id;
// 		this.favorite = this.props.favorite;
// 	}

// 	update(){
// 		this.change({
// 			id: this.id,
// 			title: this.textTitle.value,
// 			content: this.textContent.value,
// 			favorite: this.favorite
// 		})
// 	}
// 	render(){
// 		if(this.flag == false){
// 			this.textTitle.value = this.props.note.title;
// 			this.textContent.value = this.props.note.content;
// 			this.id = this.props.note.id;
// 			this.favorite = this.props.favorite;
// 		}
// 		else{
// 			this.flag = false;
// 		}
// 		return (
// 			<div className="note-editor">
// 				<div className="form-group">
// 					<input type="text" 
// 					className="title form-control"
// 					ref={(input) => {this.textTitle = input}}
					
// 					placeholder="请输入标题"/>
// 					<textarea
// 					className="form-control" 
// 					row="3" placeholder="请输入正文" 
// 					ref={(input) => {this.textContent = input}}
				
// 					>
// 					</textarea>
// 					<button onClick={this.update}>保存</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Editor;

