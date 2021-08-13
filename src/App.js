import React, {useState} from 'react'
import './App.css';
import Profile from './component/profile'
import Search from './component/search'

import {
 
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [phone, setPhone]=useState([
    {
      name:"Pavan",
      number:9823522
    },
    {
      name:'akshat',
      number:8600
    },
    {
      name:'Bicky',
      number:8595
    },
    {
      name:"ved",
      number:5884848
    }
  ])
  const [data, setData]=useState(phone);
  const [route, setRoute]=useState("search");
  const [addValue, setValue]=useState("");
  const [selectedData, setSelected]=useState({})
  
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

  onDelete=(i)=>{

  }

  return (
   <div style={{textAlign:"center"}}>
     <Switch>
        <Route path="/profile">
          <Profile data={selectedData}/>
        </Route>
          <Route path="/">
            <Search onChange={onChange} setSelected={setSelected} route={route} setValue={setValue} onAdd={onAdd} setRoute={setRoute} data={data}/>
          </Route>
      </Switch>
   </div>
  );
}

export default App;
