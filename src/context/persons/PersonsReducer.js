export default (state, action) => {
    switch(action.type){
        case 'get_persons':
            console.log(state)

            return {
                ...state,
                persons: action.payload,
                //set null vi muon xoa data trong person sau khi update
            }
        case 'delete_person':
            return {
                ...state,
                persons: state.persons.filter(person => person._id !== action.payload)
            }
        case 'add_person':
            console.log("add")
            return {
                ...state,
                persons: [action.payload, ...state.persons]
            }
        case 'edit_person':
            return {
                ...state,
                person: action.payload
            }
        case 'update_person':
            const {name} = action.payload
            console.log(action.payload)
            return {
                ...state,
                persons: state.persons.map(person => {
                    return person._id === action.payload._id ? action.payload : person 
                })
            }
        default:
            return state
    }
}