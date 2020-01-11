import React from 'react'

export default function ListItem(props) {
    return (
        <div className="container">
            
            <li className="gamer-item">
                <p>{props.firstName}</p>
                <p>{props.lastName}</p>
                <p>{props.userName}</p>
               
            </li>

        </div>
    )
}
