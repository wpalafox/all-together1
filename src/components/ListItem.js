import React from 'react'

export default function ListItem(props) {
    return (
        <div className="container">
            
            <li className="gamer-item">
                <p>{props.firstName} {props.lastName} || {props.userName}</p>
             
           
               
            </li>

        </div>
    )
}
