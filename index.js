import React from 'react';
import ReactDOM from 'react-dom/client';
const Heade = () => {
  return(
    <div className="hel">
      <div className="logo">
        <img  className="im"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAg4BPczO4Wd-3NapeWZcG0nOulFckv0oE4Ld4MBfQ&s" alt="im"/>
      </div>
      <div className="ho">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
}
const restourants= [{
  "id": "33859",
  "name": "McDonald's",
  
  "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
  
  "locality": "Mumbai- Pune Road",
  
  "areaName": "Chinchwad",
  
  "costForTwo": "₹400 for two",
  
  "cuisines":[
  
  "Burgers",
  
  "Beverages",
  
  "Cafe",
  
  "Desserts"
  
  ],
  
  "avgRating": 4.2,
  
},
{
  "id": "33859",
  "name": "dominos",
  
  "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
  
  "locality": "Mumbai- Pune Road",
  
  "areaName": "Chinchwad",
  
  "costForTwo": "₹400 for two",
  
  "cuisines":[
  
  "Burgers",
  
  "Beverages",
  
  "Cafe",
  
  "Desserts"
  
  ],
  
  "avgRating": 4.2,
  },
{
  "id": "33859",
  "name": "swiggy",
  
  "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
  
  "locality": "Mumbai- Pune Road",
  
  "areaName": "Chinchwad",
  
  "costForTwo": "₹400 for two",
  
  "cuisines":[
  
  "Burgers",
  
  "Beverages",
  
  "Cafe",
  
  "Desserts"
  
  ],
  
  "avgRating": 4.2,
  },
]

const Restour = (props) => {
 const {name,id} = props.resdetails
  return (
    <div className="rest">
      <div className="rest1">
        <img className='rest-card' src="https://static.toiimg.com/thumb/53943291.cms?width=1200&height=900" alt="im"/>
        <div className='hu'>
          <div>
            <h1>{name}</h1>
            <h1>{id}</h1>
            
          </div>
          <div>
            <h2>Rs.100</h2>
            <h2>Restouran</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return(
    <>
    <div className='bod'>
      <div className="searc">
        search
      </div>
      <div className='description'>
        {restourants.map((res)=><Restour resdetails={res}/>
        )}
      </div>
    </div>
    </>
  )
}    
const Applayout = () => { 
  return (
    <>
    <div className="so">
      <Heade/>
    </div>
    <Body/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Applayout></Applayout>
);
// eslint-disable-next-line


