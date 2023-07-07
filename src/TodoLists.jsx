  import React from "react";

  const  TodoLists =(props) =>{
  
    return (
     <>
        <div className="todo_style">
        {/* cross sign laye h font awesome se taki ispe click krte hi usk corresponding item 
        list se chla jaye */}
        <i className="fa fa-times" aria-hidden="true"
        // use callback function
        // isse ye pta chl skega ki kis wale index k element pe click kr rhe h
        // aur phr use del krne me asani hga phr
         onClick={() =>{
          props.onSelect(props.id);
         }}
        ></i>
            <li> {props.text}</li>
        </div>
     </>
    ) 
  }
  export default TodoLists;