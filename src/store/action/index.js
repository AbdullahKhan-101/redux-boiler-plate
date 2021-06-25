
const set_User = () =>{
    return(dispatch)=>{
        console.log('running...')
        dispatch({
        type: "set_data",
        users: {name: "ahmed", email: "umair@gmail.com"}})
    }
}

export {set_User}