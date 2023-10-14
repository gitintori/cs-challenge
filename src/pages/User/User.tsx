import { useParams, Link } from "react-router-dom"
import React from 'react'
import {Avatar, Results} from './User.styled'

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
        <Results>
            <Link to='/'>
                Voltar
            </Link>
            <Avatar src={userData.avatar_url} />
            <p>User: {id}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>E-mail: {userData.email}</p>
            <p>Bio: {userData.bio}</p>
            <Link to={`/users/${id}/repos`}>
                <p>Lista de Repositórios</p>
            </Link>
        </Results>
        
    )
}

export default User
