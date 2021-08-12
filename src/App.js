import React, {useState} from 'react'
import './App.css';

function App() {
  const [phone, setPhone]=useState([
    {
      name:"Pavan"
    },
    {
      name:'akshat'
    },
    {
      name:'Bicky'
    },
    {
      name:"ved"
    }
  ])
  const [data, setData]=useState(phone);
  const [route, setRoute]=useState("search");
  const [addValue, setValue]=useState("");
  
  const onAdd=()=>{
    var obj={
      name:addValue
    }
    var tempPhone=[...phone];
    tempPhone.push(obj);
    setPhone(tempPhone);
    setData(tempPhone)
    
  }

  const onChange=(value)=>{
    var filterArray=phone.filter((item)=>{
      console.log(item, value)
      if(item.name.toUpperCase().includes(value.toUpperCase())){
        return true
      }
      return false
    })
    console.log(filterArray);
    setData(filterArray)
  }

  return (
    <div className="App">
      
        {route==='search'?<input onChange={(event)=>{onChange(event.target.value)}} placeholder="Search"/>
        :(<>
        <input 
          placeholder="New Name to add" 
          onChange={
            function(event){
                setValue(event.target.value)
            }
          }
            /><button onClick={onAdd}>Add</button></>)}
        <div>
            {route==="search"?
              <button onClick={()=>{setRoute("add")}}>Add New Contact</button>
              :
              <button onClick={()=>{setRoute("search")}}>Goto Search</button>
              }  
        </div>
      <div className="conatiner">
        {data.map(item=>(<div className="card">{item.name}</div>))}
      </div>
    </div>
  );
}

export default App;
