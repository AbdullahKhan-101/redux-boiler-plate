

const INITIAL_STATE = {
    users: [
        {
            name: "abbas",
            email: "ahmed@gmail.com"
        }
    ]
}
export default (state = INITIAL_STATE, action) => {
    console.log("action", action)
    switch(action.type){
        case "set_data": 
        return({
            ...state,
            users: [...state.users, action.users]
        })
    }
    return state;
}
