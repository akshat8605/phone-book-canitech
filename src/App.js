
import React, { Component } from 'react'
import Header from './componets/header'
import SearchRsult from './componets/searchRsult';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    // this.state.saveData = 
    //  [ {
    //     name: "jack",
    //     number: "98641641",
    //   },
    //   {
    //     name: "Ram",
    //     number: "98641641",
    //   },
    //   {
    //     name: "Ravi",
    //     number: "98641641",
    //   },
    //   {
    //     name: "Biki",
    //     number: "98641641",
    //   }]

      this.state={
        result:"",
      };
  } 
 OnSerach=(val)=>{
    this.setState({result:val})
    console.log(this.state.result)
  }
  render() {
    return (
      <>
        <div className="container">
          <Header OnSerach={this.OnSerach}/>
          {  <SearchRsult />}
        </div>
      </>
    )
  }
}

export default App

