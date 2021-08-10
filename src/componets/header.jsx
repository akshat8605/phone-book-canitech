import React, { Component } from 'react'
import './header.css';

export class Header extends Component {

    render() {
        return (
            <div>
                <div className="serachBar">
                    <div className="header-txt">
                        <h1>Contact</h1>
                        <button>+ Add New</button>
                    </div>
                    <input type="text" onChange={(e)=>{this.props.OnSerach(e.target.value)}} placeholder="Search by name or phone number" />
                    {/* <button>click</button> */}
                </div>
            </div>
        )
    }
}

export default Header
