
const notes = (state = {
    notes:[
        {
            id:0,
            title: '测试标题',
            content: '测试内容',
            favorite: false
        }
    ],
    activeNote: {
        id:0,
        title: '测试标题',
        content: '测试内容',
        favorite: false
    }
},action) =>{
    switch(action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                activeNote:{
                    id:action.id,
                    title:'新',
                    content:'新',
                    favorite:false
                },
                notes:[
                    ...state.notes,
                    {
                        id:action.id,
                        title:'新',
                        content:'新',
                        favorite:false
                    }
                ]
            };
        case 'UPDATE_NOTE':
            return {
                ...state,
                activeNote:{
                    id: action.note.id,
                    title: action.note.title,
                    content: action.note.content,
                    favorite: action.note.favorite
                },
                notes:state.notes.map(note => (note.id == state.activeNote.id?{
                    id: action.note.id,
                    title: action.note.title,
                    content: action.note.content,
                    favorite: action.note.favorite
                }:note))
            }
        case 'TOGGLE_NOTE':
            return {
                ...state,
                activeNote:action.note
            };
        case 'TOGGLE_fAVORITE':
            return {
                ...state,
                activeNote:{
                    ...state.activeNote,
                    favorite:!state.activeNote.favorite
                },
                notes:state.notes.map(note => (note.id == state.activeNote.id?{
                    id: state.activeNote.id,
                    title: state.activeNote.title,
                    content: state.activeNote.content,
                    favorite: !state.activeNote.favorite
                }:note))
            }
        case 'REMOVE_NOTE':
            var id = state.activeNote.id
            var index = state.notes.indexOf(state.activeNote);
            var temp = state.notes.slice(0);
            var newActive = state.notes.filter(note => note.id == id-1)[0];
            temp.splice(index,1);
            return {
                ...state,
                notes:temp,
                activeNote:newActive
            }
        default:
            return state;
    }
}

export default notes;