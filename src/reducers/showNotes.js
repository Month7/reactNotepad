const showNotes = (state='SHOW_ALL',action) =>{
    switch(action.type){
        case 'SWITCH_SHOW':
            return action.filter;
        default:
            return state;
    }
}

export default showNotes;