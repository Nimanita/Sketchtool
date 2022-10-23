
import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Operations from '../redux/action';

import {useState } from 'react';
function Signup() {
  const [ Signupdata,changedata] = useState({
      firstName : ' ',
      lastName : ' ',
      email : ' ',
      password : ' ',
      userName : ' ',
      operation : 'signup'
  })
  function submitclick()
  {
    changedata(
        {
        ...Signupdata ,
       operation : 'signupSubmit'
        }
    ) ;
    var signupdata =   {
        'userName' : Signupdata.userName,
        'password' : Signupdata.password,
        'lastName' : Signupdata.lastName,
        'firstName' : Signupdata.firstName,
        'email' : Signupdata.email,
        'operation' : 'signupSubmit'
      }
    
    dispatch(Operations(signupdata));
    
  }
  function handleChange(e)
  {
      console.log(e.target.value);
      console.log(Signupdata);
      if(e.target.id ==='firstName')
      {
         changedata(
             {
            ...Signupdata ,
            firstName : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id ==='lastName')
      {
         changedata(
             {
            ...Signupdata ,
            lastName : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id ==='userName')
      {
         changedata(
             {
            ...Signupdata ,
            userName : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id ==='email')
      {
         changedata(
             {
            ...Signupdata ,
            email : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id ==='password')
      {
         changedata(
             {
            ...Signupdata ,
            password : e.target.value
             }
         ) ;
          

      }
  }
  const username = useSelector(state=>state.username);
  const password = useSelector(state=>state.password);
  console.log(username,password);
  const dispatch = useDispatch()
  console.log("final" , username,password);
  return (
   
    <div className="container App">
       <h1>ENTER THE Signup DETAILS</h1>
       
       <div class = "row">
        <div class="col-lg-3">
           <h2>First Name</h2>
            <input id="firstName"  text="USERNAME" onChange={handleChange} />
        </div>   
        
       </div>
       <div class = "row">
        <div class="col-lg-3">
           <h2>Last Name</h2>
            <input id="lastName"  text="USERNAME" onChange={handleChange} />
        </div>   
        
       </div>
       <div class = "row">
        <div class="col-lg-3">
           <h2>User Name</h2>
            <input id="userName"  text="USERNAME" onChange={handleChange} />
        </div>   
        
       </div>
       <div class = "row">
        <div class="col-lg-3">
           <h2>email</h2>
            <input id="email"  text="USERNAME" onChange={handleChange} />
        </div>   
        
       </div>
       <div class = "row">
        <div class="col-lg-3">
        <h2>password</h2>
            <input id="password" onChange={handleChange} />
        </div>   
        
       </div>
       <button onClick={()=>submitclick()}>SUBMIT</button>
    </div>
    
  );
}

export default Signup;
