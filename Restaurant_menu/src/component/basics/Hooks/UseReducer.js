import React, {  useReducer} from "react";
import "./style.css";

const reducer = (state, action) => {
  if(action.type === "INCR"){
    state = state + 1;
  }
  if( state > 0 && action.type === "DECR"){
    state = state - 1;
  }
  return state;
  
};

const UseReducer = () => {
   
  const [state, dispatch] = useReducer(reducer, 10);


  return (
    <>
      <div className="con">
        <p>{state}</p>
        <div className="container1">
          <div className="button" onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
          </div>

         
          <div className="button" onClick={() => dispatch({type:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
          </div>

        </div>
      </div>
      
    </>
  );
};

export default UseReducer;
