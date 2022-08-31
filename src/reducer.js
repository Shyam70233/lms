
import data from './data'
const initialState = {
    menu:data.menu,
    admin:data.admin,
    faculty:data.faculty,
    student:data.student,
    courses:data.courses,
    slots:data.slots,
    batch:data.batch,
    user:null,
    loggedin:true,
    role:"admin",
    msg:""
}
function reducer(state=initialState, action){
    console.log(action.payload)
    switch(action.type){
           case "login" : return {...state, ...action.payload,msg:"Loggedin Success"} 
           case "admin" : return {...state, admin:action.payload} 
           case "faculty" : return {...state, faculty:action.payload} 
           case "student" : return {...state, student:action.payload} 
           case "courses" : return {...state, courses:action.payload} 
           case "slots" : return {...state, slots:action.payload} 
           case "batch" : return {...state, batch:action.payload} 

        default: return state;
    }
}
export default reducer