import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Results, UserInfoContainer, Avatar,  UserInfo, NotFoundText, LinkWrapper, LinkRepo, DefaultLink, UserNotFound } from './User.styled'

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

    const [userExists, setUserExists] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}users/${id}`);
            if (resposta.status === 404) {
                setUserExists(false);
                } else {
                    const dados = await resposta.json();
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
                            <LinkRepo to={`/users/${id}/repos`}>
                                  Ver Repositórios
                            </LinkRepo>
                             
                            <DefaultLink to='/'>
                                    Voltar
                            </DefaultLink>
                        </LinkWrapper>
                    </UserInfo>
                </>
            ) : (
                <UserNotFound>
                    O usuário não foi encontrado.
                    <DefaultLink to='/'>
                        Voltar
                    </DefaultLink>
                </UserNotFound>
            )}
            </UserInfoContainer>
        </Results>
    );
}


export default User;
