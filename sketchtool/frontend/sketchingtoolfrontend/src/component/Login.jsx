
import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Operations from '../redux/action';
import SignUpPage from '../redux/action'
import {useState } from 'react';
import Alert from 'react-popup-alert'
import "./Login.css";
function Login() {
  const [ logindata,changedata] = useState({
      email : ' ',
      password : ' ',
      operation : 'signup'

  })
  function submitclick()
  {
      console.log(logindata.email);
    changedata({
      ...logindata ,
        operation : 'loginSubmit'
    })
    var userData = {
      'email' : logindata.email,
      'password' : logindata.password,
      'operation' : 'loginSubmit'
    }
    dispatch(Operations(userData));
    
  }
  function signupPageClick()
  {
    changedata({
      ...logindata ,
        operation : 'signup'
    })
    var userData = {
      'email' : logindata.email,
      'password' : logindata.password,
      'operation' : 'signup'
    }
    dispatch(Operations(userData));
    
  }
  function handleChange(e)
  {
      console.log(e.target.value);
      console.log(logindata);
      if(e.target.id ==='x1')
      {
         changedata(
             {
            ...logindata ,
            email : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id === 'x2')
      {
        changedata(
            {
           ...logindata ,
           password : e.target.value
            }
        ) ;
      }
  }
  const email = useSelector(state=>state.email);
  const password = useSelector(state=>state.password);
  const component = useSelector(state=>state.component);

 
  console.log(email,password , component);
  const dispatch = useDispatch()
  console.log("final" , email,password);
  return (
   
    <div className="container App">
        <div class = "loginbox">
       <h1>LOGIN</h1>
       <div class = "loginbox2">
       <div class = "row">
        <div class="col-lg-3">
          
            <input id="x1"  text="Email" type="text" class="form-control logininputbox" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"  onChange={handleChange} ></input>
        </div>   
        
       </div>
       <div class = "row">
        <div class="col-lg-3">
        
            <input id="x2" text="Email" type="text" class="form-control logininputbox" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
        </div>   
        </div>
       
     
       <button type="button" class="btn btn-primary submitbtn" onClick={()=>submitclick()}>SUBMIT</button>
       <button type="button" class="btn btn-light submitbtn " onClick={()=>signupPageClick()}>SIGNUP</button></div>
       </div>
    </div>
   
  );
}

export default Login;
