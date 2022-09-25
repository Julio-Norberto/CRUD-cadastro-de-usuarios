import React, { useState } from "react";
import axios from "axios";
import './Form.css'
import { Link } from "react-router-dom";

export default function Form() {

    const [values, setValues] = useState()

    function handleChangeInput(e) {
        setValues((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
        }))
    }

    function submitValues() {
        axios.post("http://localhost:3001/register", {
        name: values.name,
        number: values.number,
        occupation: values.occupation,
        }).then((response) => console.log(response))
    }

    return (
        <div className='container'>
            <h1 className='title'>Bem vindo!</h1>
            <div className="Form">
                <form action="/users">  
                    <div className='form-control'>
                        <label htmlFor="name">Nome:</label>
                        <input onChange={(e) => handleChangeInput(e)} type="text" name='name' placeholder='Digite o seu nome...' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="number">Número:</label>
                        <input onChange={(e) => handleChangeInput(e)} type="tel" name='number' placeholder='Digite o seu número...' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="occupation">Profissão:</label>
                        <input onChange={(e) => handleChangeInput(e)} type="text" name='occupation' placeholder='Digite aqui sua profissão...' />
                    </div>
                    <div className='form-button'>
                        <input onClick={submitValues} className='button' type="submit" value="CADASTRAR" />
                        <Link to="/users">Usuários</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}