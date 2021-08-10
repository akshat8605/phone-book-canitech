import React, {useState} from 'react'
import './App.css';
var phone=[
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
]
function App() {
  const [data, setData]=useState(phone);
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
      <input onChange={(event)=>{onChange(event.target.value)}} placeholder="Search"/>
      {data.map(item=>(<div>{item.name}</div>))}
    </div>
  );
}

export default App;
