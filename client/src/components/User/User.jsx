import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function User() {

    const { id } = useParams()

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
        .then((response) => setUser(response.data))
    }, [id])

    function deleteUser() {
        axios.get(`http://localhost:3001/users/delete/${id}`)
        .then((response) => console.log(response))

        window.location.href = "http://localhost:3000/users"
    }

    function redirect() {
        window.location.href = `http://localhost:3000/users/edit/${id}`
    }

    return (
        <div className='container'>
            <h1 className='title'>Usuários</h1>
            <div className="FormData">
                { typeof user !== "undefined" && user.map((value) => {
                    return (
                        <div className="data">
                            
                            {value.id}- {value.name} | Fone: {value.number} | {value.occupation}
                            
                            <button className="delete" onClick={deleteUser}>X</button> <button onClick={redirect} className="edit">Edit</button>
                            
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}