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
                        <p>User: {id}</p>
                        <p>Followers: {userData.followers}</p>
                        <p>Following: {userData.following}</p>
                        {userData.email ? (
                            <p>E-mail: {userData.email}</p>
                            ) : (
                                <NotFoundText>E-mail: not found </NotFoundText>
                            )}
                        {userData.bio ? (
                            <p>Bio: {userData.bio}</p>
                            ) : (
                                <NotFoundText>Bio: not found </NotFoundText>
                            )}
                        <LinkWrapper>
                            <LinkRepo to={`/users/${id}/repos`}>
                                  See repositories
                            </LinkRepo>
                             
                            <DefaultLink to='/'>
                                    Back
                            </DefaultLink>
                        </LinkWrapper>
                    </UserInfo>
                </>
            ) : (
                <UserNotFound>
                    User not found.
                    <DefaultLink to='/'>
                        Back
                    </DefaultLink>
                </UserNotFound>
            )}
            </UserInfoContainer>
        </Results>
    );
}


export default User;
