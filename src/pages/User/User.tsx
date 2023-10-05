import { useParams, Link } from "react-router-dom"
import React from 'react'
import { any } from "cypress/types/bluebird";

const url = 'https://api.github.com/';

const User = () => {

    const {id} = useParams()
    const [userData, setUserData] = React.useState({
        followers: 0,
        following: 0,
        avatar_url: '',
        email: '',
        bio: '',
      })

    React.useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`)
            const dados = await resposta.json()
            console.log(dados)
            setUserData(dados)
        }

    getUsers()
    }, [id])

    return (
        <div>
            <img src={userData.avatar_url} alt="Avatar" />
            <p>Usuário: {id}</p>
            <p>Seguidores: {userData.followers}</p>
            <p>Seguindo: {userData.following}</p>
            <p>Email: {userData.email}</p>
            <p>Bio: {userData.bio}</p>
            <Link to='/'>
                home
            </Link>
            <p></p>
        </div>
        
    )
}

export default User
