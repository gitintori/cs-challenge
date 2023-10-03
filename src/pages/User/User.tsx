import { useParams, Link } from "react-router-dom"
import React from 'react'

const User = () => {
    const url = 'https://api.github.com/';

    const getUsers = async () => {
        const resposta = await fetch(`${url}users/{username}`, {
        method: 'GET'
        });

    const dados = await resposta.json()

    React.useEffect(() => {

    })
}
    const {id} = useParams()
    return (
        <div>
            {id}
            <Link to='/'>
                home
            </Link>
        </div>
    )
}

export default User