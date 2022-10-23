import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Operations from '../redux/action';
import CanvasDraw from "react-canvas-draw";

import {useState , useRef , useEffect} from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
function DrawingBoard(props) {  
    
    
    console.log("props" , props)
    function handleChange(e)
    {
        changeSavedSketch(e)
        
    }
    const socketRef = useRef();
    console.log("sjs", window.location.host)
    const [ currentSketch,changeCurrentSketch] = useState(' ')
    const [session , changeSession] = useState(false)
    const [ sketchName,changeSketchName] = useState()
    const [websocket , changeSocket] = useState()
    const [ savedSketch ,changeSavedSketch] = useState(props.sketch)
    const userName = useSelector(state=>state.userName);
    function saveSketch()
    {
         console.log(currentSketch.getSaveData())
         var sketchData =  {
           "sketch" : currentSketch.getSaveData(),
         "userName" : userName,
         "operation" : "sketchSubmit",
         "sketchName" : sketchName

         }
         dispatch(Operations(sketchData));
    }
    const dispatch = useDispatch()
    console.log("props" , props)
    console.log(sketchName)
    
    useEffect(() => {
    
      socketRef.current = new WebSocket('ws://127.0.0.1:8000/'+ window.location.host)
 
      socketRef.current.onopen = e => {
        console.log('open', e)
        changeSession(true)
        changeSocket(socketRef.current)
      }
      socketRef.current.onmessage = e => {
        console.log(e.data)
        changeSocket(socketRef.current)
      }
      socketRef.current.onerror = e => {
        console.log('error', e)
        changeSocket(socketRef.current)
      }
    });
    function onDraw(canvasDraw)
    {
        changeCurrentSketch(canvasDraw)
        console.log("canvasDraw onchange")
      
      
    }
    return (
        <div class = "container sketch">
        <h2>SketchBoard</h2>
        
        <button
            onClick={() => saveSketch()}
          >
            Save
          </button>
          <input id="sketchName"  text="sketchName" onChange={(e)=>changeSketchName(e.target.value)} />
          <CanvasDraw
          brushColor = {props.colour}
          ref={canvasDraw => (changeCurrentSketch(canvasDraw))}
          saveData={props.sketch}
          onChange = { (canvasDraw)=> onDraw(canvasDraw)}
        />
        
        </div>
        
      );
    }
    DrawingBoard.defaultProps = {
        colour : "#444",
        sketch : ' '
      }
    
    
    
    //call the connect function at the start.
    
export default DrawingBoard;
