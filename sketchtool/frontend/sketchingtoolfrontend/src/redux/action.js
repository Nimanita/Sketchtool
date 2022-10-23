import axios from 'axios'
const DISPLAYLOGINPAGE ='DISPLAYLOGINPAGE'
const DISPLAYSIGNUPPAGE ='DISPLAYSIGNUPPAGE'
const DISPLAYHOMEPAGE ='DISPLAYHOMEPAGE'
const LOGINSUCCESS ='LOGINSUCCESS'
const ALERTMESSAGE ='ALERTMESSAGE'
const SAVINGSKETCH = 'SAVINGSKETCH'

function displayLoginPage()
{
    return{
        type : DISPLAYLOGINPAGE
    }
}
function loginSuccess(response)
{   console.log("loginsuccess" , response)
    return{
        type : LOGINSUCCESS ,
        userData : response

    }
}
function alertMessage(message)
{   console.log("loginsuccess" , message)
    return{
        type : ALERTMESSAGE ,
        message : message

    }
}
function displaySignUpPage()
{
    return{
        type : DISPLAYSIGNUPPAGE
    }
}
function displayHomePage()
{
    return{
        type : DISPLAYHOMEPAGE
    }
}

const Operations = (data) =>{
     console.log("inside operations" , data)
     switch(data.operation){
        case "login" : return LoginPage()
        case "signup" : return SignUpPage()
        case "home" : return HomePage()
        case "loginSubmit" : return loginSubmit(data)
        case "signupSubmit" : return signupSubmit(data)
        case "sketchSubmit" : return sketchSubmit(data)
     }
}

const SignUpPage = () =>{
   
    console.log("inside signup")
   return function(dispatch){
       dispatch(displaySignUpPage())

   }
}

const LoginPage = () =>{ 
   
    return function(dispatch){
        dispatch(displayLoginPage())
 
    }
 }
const AlertMessage = (message) =>{ 
   
    return function(dispatch){
        dispatch(alertMessage(message))
 
    }
}
const LoginSuccess = () =>{
   
    return function(dispatch){
        dispatch(displayLoginPage())
 
    }
 }
const HomePage = () =>{
   
    return function(dispatch){
        dispatch(displayHomePage())
 
    }
 }

const loginSubmit = (logindata) =>{
    /* console.log(logindata);*/
    console.log("inside loginsubmit" , logindata)
    var data = { 
       email:logindata.email, 
       password:logindata.password
   }
    var config = {
   method: 'post',
   url: 'http://127.0.0.1:8000/ce/user/login',
   data : data,
   
    headers: { 
        'Content-Type':'application/json'
       
       
    }
  
  
};
       
   return function(dispatch){
 
   
        axios(config)
        .then(function (response) {
        
        console.log(response.data);
        dispatch(loginSuccess(response.data))
        })
        .catch(function (error) {
        console.log("error" , error.response.data["message"]);
        dispatch(AlertMessage(error.response.data["message"]))
        console.log("error" , error);
        });
   }
}
const signupSubmit = (signupdata) =>{
    /* console.log(logindata);*/
    console.log("inside loginsubmit" , signupdata)
    var data = { 
       email:signupdata.email, 
       password:signupdata.password,
       firstName : signupdata.firstName,
       lastName : signupdata.lastName,
       userName : signupdata.userName
   }
    var config = {
   method: 'post',
   url: 'http://127.0.0.1:8000/ce/user',
   data : data,
   
    headers: { 
        'Content-Type':'application/json'
       
       
    }
  
  
};
       
   return function(dispatch){
 
   
        axios(config)
        .then(function (response) {
        
        console.log(response.data);
        dispatch(AlertMessage(response.data["message"]))
        dispatch(LoginPage())
        })
        .catch(function (error) {
        console.log("error" , error.response.data["message"]);
        dispatch(AlertMessage(error.response.data["message"]))
        console.log("error" , error);
        });
   }
}
const sketchSubmit = (sketchData) =>{
    /* console.log(logindata);*/
    console.log("inside sketchsubmit" , sketchData)

    var data = sketchData
    var config = {
   method: 'post',
   url: 'http://127.0.0.1:8000/ce/sketch/operation',
   data : data,
   
    headers: { 
        'Content-Type':'application/json'
       
       
    }
  
  
};
       
   return function(dispatch){
 
   
        axios(config)
        .then(function (response) {
        
        console.log(response.data);
        dispatch(AlertMessage(response.data["message"]))
       
        })
        .catch(function (error) {
        console.log("error" , error.response.data["message"]);
        dispatch(AlertMessage(error.response.data["message"]))
        
        });
   }
}

export default Operations;

