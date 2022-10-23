import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import DrawingBoard from './DrawingBoard';
import {useState , useEffect , useRef} from 'react';
import axios from 'axios'
import CanvasDraw from "react-canvas-draw";
function Home(props) {  
    
    function handleChange(e)
    {
        changeSavedSketch(e)
       
    }
    const userName = useSelector(state=>state.userName);
    function fetchdata() {
    
      
      var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/ce/sketch/operation?userName=gb',
      params: { userName : userName },
      headers: { 
            'Content-Type':'application/json'
          
        
      }};
      console.log(config)
      axios.get("http://127.0.0.1:8000/ce/sketch/operation" , config).then((res) => {
        console.log(res)
        changeSavedSketch(res.data);
       
      });
   }
    
    const socketRef = useRef();
    const [ currentSketch,changeCurrentSketch] = useState(' ')
    const [ savedSketch ,changeSavedSketch] = useState()
    const [openSketch , changeOpenSketch] = useState()
    
    useEffect(() => {
      async function fetchdata() {
    
        console.log("inside fetch data")
        var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/ce/sketch/operation?userName=gb',
        params: { userName : userName },
        headers: { 
              'Content-Type':'application/json'
             
          
        }};
        console.log(config)
        await axios.get("http://127.0.0.1:8000/ce/sketch/operation" , config).then((res) => {
          console.log(res)
          changeSavedSketch(res.data);
         
        });
     };
   
     
  
     
    });

    return (
        <div class = "container">
        <nav class="navbar bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">Naya</a>
              <form class="d-flex" role="search">
                  <button class="btn btn-outline-success" type="submit">{userName}</button>
                
              </form>
            </div>
          </nav>
          
        <div class = "row container">
         <div class = "col-9">
          <DrawingBoard sketch={openSketch}/>
          </div>
          <div class = "col-3">
          <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick = {()=>fetchdata()}>
    sketches
  </button>
  <ul class="dropdown-menu">
  {savedSketch &&
    savedSketch.map((item) => (
            <li><a class="dropdown-item" href="#" onClick={()=>changeOpenSketch(item.sketch)}>{item.sketchName} </a></li>
          ))}
      </ul>
</div>
          </div>
        </div>
       
                
        </div>
        
      );
    }
   
export default Home;
