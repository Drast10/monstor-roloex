import React from 'react'
import "./Search-box.style.css";

export const SearchBox = ({placeholder, handleChange})=>(
  <input className='search'
    type='search'
    placeholder={placeholder} 
    onChange={handleChange}
  />
);

 // onChange={(e=>{
  //   this.setState({searchField:e.target.value}, ()=> console.log(this.state))
   //after immidetaily show log value put console as second argument of setstate
  // })} 