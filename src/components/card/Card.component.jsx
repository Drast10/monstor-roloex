import React from 'react'
import "./Card.style.css";
export const Card = (props)=>{
    return (<div className='card-container'>
        <img className='monster-img'src={`https://robohash.org/${props.monster.id}?set=set2`} alt='monster'/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        <p>{props.monster.address.city}</p>
        <a href={props.monster.website}>{props.monster.company.name}</a>
        </div>)
}