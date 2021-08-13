import React from 'react'

const Profile =({data})=>{
    return(<div>
            <div>
                <img src={`https://robohash.org/${data.name}`} alt="image"/>
                <h1>{data.name}</h1>
                <h4>{data.number}</h4>
            </div>

        </div>)
}

export default Profile