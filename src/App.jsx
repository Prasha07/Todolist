import React, { useState } from "react";
import TodoLists from "./TodoLists";
const App = () =>{
// useState is a hook(func) that allows to have state var
// in functional Component.you pass the initial val 
// to a fun and it returns a var with current state val.
// (not necessarily initial state)and another func to update the
// val.  
const[inputlist,setinputlist]=useState("");

// array bnayenge jo state change krega yani add hte rhnge usme items
// array k liye [] ka use krte hai usestate me
const [Items,setItems]=useState([]);

const itemevent =(event) =>{
  // ab jo bhi user likhega wo et kr k set kr dnge inputlist ka value
  setinputlist(event.target.value);
};

const listofitems =()=>{
  // user jo bhi likhe input field me use array me store kr k
  // print kra do use niche + pe click hote hi
  // apple add kiye array me phr + dabane pe array print hga aur apple dikhega usk bad agr mango add kre 
  // pe apple,mango dono ho gye array me to ab + dabane pe array print hga aur apple mango dono 
  // dikhega

  setItems((olditems) => {
    // olditems me sare array me jo current val hai wo rhega 
    // usme jo abhi likha hai inputlist me add kr do
    return [...olditems,inputlist];
  });
  // ab inputlist ko wapas se "" krnge taki add items dikhe placeholder me phr se add krne k liye
  setinputlist("");
};
const deleteItems =(id) =>{
//bs jispe user click kiya hai use del krnge aur baki elements array me apna waise hi rhenge
// filter(callback fun :(value,index,array))
// olditem ek array hai
setItems((olditems) =>{
  // specify current element of arrays data (arrelem) to be clicked for deletion and its index no.
   return olditems.filter((arrelem,index)=>{
    //  ab us array me jo index no se match kre is element ka index no use simply del kr do
    return index!==id;
    // iska mtlb agr index aur id match kr gya to del kro aur bche element return kr do array k warna return krado pura array phr se
  })
   })
};

  return(
  <div className='main_div'>
     <div className='center_div'>
     <br />
      <h1>ToDo List</h1>
      <br/>
        {/* agr koi change ya type ho input field me to 
       itemevent call ho  jayega  */}
      <input  type="text" placeholder="Add Items"
      value={inputlist} 
      onChange={itemevent}/>
      <button onClick={listofitems}> +</button>
      <br />

      <ol>
        {/* <li> {inputlist}</li> */}
        {/* array print krane k liye bari bari ek ek element print hga */}
        {
          Items.map((itemval,index) =>{
            {/* ek ek element print krega array ka */}
            {/* todolist wahi print kr rha ek ek kr k aur cross sign ko har ek element k sth manage kr rha  */}
           {/* key aur id index value store krega taki delete krne me asani ho */}
            
           return <TodoLists key={index} 
           id={index}
           text={itemval}
          // jo data delete ho rha hai usk bare me sb pta chl ske aur uski functionalities ka pta chl ske 
          // pta chl jayega ki kispe click kiye hain
           onSelect={deleteItems}
           />
          })
        }
      </ol>
     </div>
  </div>
  )
}
export default App;