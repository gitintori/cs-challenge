import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import {Avatar, Results, UserInfo, UserInfoContainer, LinkRepo, LinkVoltar, LinkWrapper, NotFoundText, UserNotFound} from './User.styled'

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
            <UserInfoContainer>
            {userExists ? (
                <>
                    
                    <Avatar src={userData.avatar_url} />
                    <UserInfo>
                        <p>Usuário: {id}</p>
                        <p>Seguidores: {userData.followers}</p>
                        <p>Seguindo: {userData.following}</p>
                        {userData.email ? (
                            <p>E-mail: {userData.email}</p>
                            ) : (
                                <NotFoundText>E-mail: Não encontrado </NotFoundText>
                            )}
                        {userData.bio ? (
                            <p>Bio: {userData.bio}</p>
                            ) : (
                                <NotFoundText>Bio: Não encontrado </NotFoundText>
                            )}
                        <LinkWrapper>
                            <LinkRepo>  
                                <Link to={`/users/${id}/repos`}>
                                    <p>Ver Repositórios</p>
                                </Link>
                            </LinkRepo>
                            <LinkVoltar>
                                <Link to='/'>
                                    Voltar
                                </Link>
                            </LinkVoltar>
                        </LinkWrapper>                    
                    </UserInfo>
                </>
            ) : (
                <UserNotFound>
                    <p>O usuário não foi encontrado.</p>
                    <LinkVoltar>
                    <Link to='/'>
                        Voltar
                    </Link>
                    </LinkVoltar>
                </UserNotFound>
            )}
            </UserInfoContainer>
        </Results>
    );
}


export default User;
