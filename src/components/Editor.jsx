// import React,{Component} from 'react';
// import './Editor.css';
// class Editor extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			value:this.props.note
// 		}
		
// 		this.titleChange = this.titleChange.bind(this);
// 		this.contentChange = this.contentChange.bind(this);
// 		this.update = this.update.bind(this);
// 		this.change = this.props.change;
// 		this.title = null;
// 		this.flag = true;
// 	}
// 	componentWillReceiveProps(){
// 		let {note} = this.props;
// 		// console.log(note);
// 		this.setState({
// 			value:note 
// 		});
// 		// console.log(this.state.value);
// 	}
// 	componentDidUpdate(){
// 		console.log(this.title);
// 		var id = this.state.value.id;
// 		if(this.flag){
// 			this.setState({
// 				value:{
// 					id:id,
// 					title: this.title
// 				}
// 			},function(){
// 				this.flag = false;
// 			})
// 		}
// 	}
// 	titleChange(e){
// 		var id = this.state.value.id;
// 		var value = e.target.value;
// 		this.setState({
// 			value:{
// 				id: id,
// 				title: e.target.value
// 			}
// 		})
// 		// console.log('这里更新了value');
// 	}
// 	contentChange(e){
// 		var value = e.target.value;
// 		this.setState({
// 			value:{
// 				content:e.target.value
// 			}
// 		})
// 	}
	
// 	update(){
// 		this.title = this.state.value.title;
// 		console.log(this.title);
// 		var title = this.title;
// 		// console.log(title);
// 		var id = this.state.value.id;
// 		// console.log(this.state.value);
// 		this.change(this.state.value);
// 		this.setState({
// 			value:{
// 				id:id,
// 				title:title
// 			}
// 		})
// 	}
// 	render(){
// 		let note = this.state.value;
// 		// console.log(note);
// 		// console.log(note.title);
// 		return (
// 			<div className="note-editor">
// 				<div className="form-group">
// 					<input type="text" 
// 					className="title form-control"
// 					value={note.title || ''}
// 					onChange={this.titleChange}
// 					placeholder="请输入标题"/>
// 					<textarea
// 					className="form-control" 
// 					row="3" placeholder="请输入正文" 
// 					value={note.content || ''}
// 					onChange={this.contentChange}
// 					>
// 					</textarea>
// 					<button onClick={this.update}>保存</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }



import React,{Component} from 'react';
import './Editor.css';
class Editor extends Component{
	constructor(props){
		super(props);
		this.state = {
			value:this.props.note
		}
	
		this.update = this.update.bind(this);
		this.change = this.props.change;
		this.title = null;
		this.flag = true;

		this.textTitle = null;
		this.textContent = null;
		this.id = null;
		this.favorite = null;
	}
	componentDidMount(){
		this.textTitle.value = this.props.note.title;
		this.textContent.value = this.props.note.content;
		this.id = this.props.note.id;
		this.favorite = this.props.favorite;
	}

	update(){
		this.change({
			id: this.id,
			title: this.textTitle.value,
			content: this.textContent.value,
			favorite: this.favorite
		})
	}
	render(){
		if(this.flag == false){
			console.log("!!")
			this.textTitle.value = this.props.note.title;
			this.textContent.value = this.props.note.content;
			this.id = this.props.note.id;
			this.favorite = this.props.favorite;
		}
		else{
			this.flag = false;
		}
		return (
			<div className="note-editor">
				<div className="form-group">
					<input type="text" 
					className="title form-control"
					ref={(input) => {this.textTitle = input}}
					
					placeholder="请输入标题"/>
					<textarea
					className="form-control" 
					row="3" placeholder="请输入正文" 
					ref={(input) => {this.textContent = input}}
				
					>
					</textarea>
					<button onClick={this.update}>保存</button>
				</div>
			</div>
		)
	}
}

export default Editor;

