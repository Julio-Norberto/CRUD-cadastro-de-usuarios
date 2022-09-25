import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function EditUser() {

    const { id } = useParams()

    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [occupation, setOccupation] = useState()

    useEffect(() => {
        async function getPost() {
            await axios.get(`http://localhost:3001/users/${id}`)
            .then((response) => {
                setName(response.data[0].name)
                setNumber(response.data[0].number)
                setOccupation(response.data[0].occupation)
            })
        }
        getPost()
    }, [id])


    function submitValues() {
        axios.post(`http://localhost:3001/users/edit/${id}`, {
        id: id,
        name: name,
        number: number,
        occupation: occupation,
        }).then((response) => console.log(response))

        window.location.href = "http://localhost:3000/users"
    }

    return (
        <div className='container'>
            <h1 className='title'>Editar usuário</h1>
            <div className="Form">
                <div>
                    <div className='form-control'>
                        <label htmlFor="name">Nome:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Digite seu nome...' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="number">Número:</label>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="tel" name='number' placeholder='Digite o seu número...' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="occupation">Profissão:</label>
                        <input value={occupation} onChange={(e) => setOccupation(e.target.value)} type="text" name='occupation' placeholder='Digite aqui sua profissão...' />
                    </div>
                    <div className='form-button'>
                        <input onClick={submitValues} className='button' type="submit" value="ATUALIZAR" />
                        <Link to="/users">Usuários</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}