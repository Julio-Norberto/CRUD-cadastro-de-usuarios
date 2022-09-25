import React from "react";
import './Users.css'
import {Link} from 'react-router-dom'

export default function Users(props) {
    return (
        <div className="Users">  
            <div className="user-data">
                {props.id}- <Link to={`/users/${props.id}`}>{props.name}</Link> | Fone: {props.number} | {props.occupation}
            </div>
        </div>
    )
}