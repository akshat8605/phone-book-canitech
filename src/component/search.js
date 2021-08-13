
import React from 'react'
import { Link } from 'react-router-dom'

const Search =({onChange, route, setValue, onAdd, setRoute, data, setSelected})=>{
    return( <div className="App">
      
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
    {data.map(item=>(<Link to="/profile"><div onClick={()=>setSelected(item)} className="card">{item.name}</div></Link>))}
  </div>
</div>)
}

export default Search;