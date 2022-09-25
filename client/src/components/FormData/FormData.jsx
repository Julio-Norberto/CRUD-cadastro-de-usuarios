import React, { useEffect, useState } from "react";
import axios from 'axios'
import './FormData.css'
import Users from "../Users/Users";
import {Link} from 'react-router-dom'

export default function FormData(props) {

    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then((response) => setUsers(response.data)) // Recebendo os valores do banco de dados
    }, [])

    const [users, setUsers] = useState()

    return (
        <div className='container'>
            <h1 className='title'>Usuários</h1>
            <div className="FormData">
                { typeof users !== "undefined" && users.map((value) => {
                    return <Users key={value.id} id={value.id} name={value.name} number={value.number} occupation={value.occupation} />
                }) }
                <Link to="/register">Cadastrar usuário</Link>
            </div>
        </div>
    )
}