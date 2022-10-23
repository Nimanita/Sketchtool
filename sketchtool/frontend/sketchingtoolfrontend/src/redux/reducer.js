import Login  from '../component/Login';
import Home from '../component/Home';
import Signup  from '../component/Signup';

const rrr = require('react-router-redux');
const push = rrr.push()

const DISPLAYLOGINPAGE ='DISPLAYLOGINPAGE'
const DISPLAYSIGNUPPAGE ='DISPLAYSIGNUPPAGE'
const DISPLAYHOMEPAGE ='DISPLAYHOMEPAGE'
const LOGINSUCCESS ='LOGINSUCCESS'
const ALERTMESSAGE ='ALERTMESSAGE'
const initialState = {

    userName : 'username ',
    password : 'password',
    firstName : ' ',
    lastName : ' ',
    email : ' ',
    component : <Login/>,
    alertmessage : ' ',
    alerttype : ' ',
    alertshow : false

}
const appreducer = (state = initialState,action)=>{
switch(action.type){

  case DISPLAYSIGNUPPAGE :console.log("display signup page");return{
    ...state ,
    component : <Signup/>,
    alertmessage : ' ',
    alerttype : ' ',
    alertshow : false
  }
  
  case DISPLAYLOGINPAGE :console.log("request");return{
    ...state ,
    component : <Login/>,
    alertmessage : ' ',
    alerttype : ' ',
    alertshow : false
  }
  

  case DISPLAYHOMEPAGE :console.log("request");return{
    ...state ,
    component : <Home/>,
    alertmessage : ' ',
    alerttype : ' ',
    alertshow : false
  }
  case LOGINSUCCESS :console.log("request");return{
    ...state ,
    component : <Home/>,
    firstName : action.userData.firstName,
    lastName : action.userData.lastName,
    email : action.userData.email,
    userName : action.userData.userName,
    alertmessage : ' ',
    alerttype : ' ',
    alertshow : false
  }
  case ALERTMESSAGE :console.log("request" , action);return{
    ...state ,
    alertmessage : action.message,
    alerttype : ' ',
    alertshow : true
  }
  
  default : return state
}

}

export default appreducer