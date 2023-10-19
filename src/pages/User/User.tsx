import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import {Avatar, Results} from './User.styled'

const url = 'https://api.github.com/';

const User = () => {

    const {id} = useParams()
    const [userData, setUserData] = useState({
        followers: 0,
        following: 0,
        avatar_url: '',
        email: '',
        bio: '',
      })

    useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`)
            const dados = await resposta.json()
            console.log(dados)
            setUserData(dados)
        }
        
    getUsers()
    }, [id])

    const [userExists, setUserExists] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`);
            if (resposta.status === 404) {
                setUserExists(false);
            } else {
                const dados = await resposta.json();
                console.log(dados);
                setUserData(dados);
            }
        }
    
        getUsers();
    }, [id]);

    return (
        <Results>
            {userExists ? (
                <>
                    <Link to='/'>
                        Voltar
                    </Link>
                    <Avatar src={userData.avatar_url} />
                    <p>User: {id}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    {userData.email ? (
                    <p>E-mail: {userData.email}</p>
                    ) : (
                    <p>E-mail: Não encontrado</p>
                    )}
                    {userData.bio ? (
                    <p>Bio: {userData.bio}</p>
                    ) : (
                    <p>Bio: Não encontrado</p>
                    )}
    
                    <Link to={`/users/${id}/repos`}>
                        <p>Lista de Repositórios</p>
                    </Link>
                </>
            ) : (
                <div>
                    <p>O usuário não foi encontrado.</p>
                    <Link to='/'>
                        Voltar
                    </Link>
                </div>
            )}
        </Results>
    );
}


export default User;
