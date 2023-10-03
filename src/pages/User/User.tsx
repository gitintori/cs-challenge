import { useParams, Link } from "react-router-dom"
import React from 'react'

const url = 'https://api.github.com/';

const User = () => {

    const {id} = useParams()

    React.useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`)
            const dados = await resposta.json()
            console.log(dados)
        }

    getUsers()
    }, [])

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
