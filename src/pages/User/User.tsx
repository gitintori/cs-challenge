import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import {Avatar, Results} from './User.styled'

const url = 'https://api.github.com/';

type Repository = {
    id: number;
    name: string;
    stargazers_count: number;
  };

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
    
    const [repos, setRepos] = useState<Repository[]>([]);
    const [ordenacao, setOrdenacao] = useState('desc');
    
    useEffect(() => {
        const getRepos = async () => {
        try {
            const resposta = await fetch(`${url}users/${id}/repos`);
            if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
            }
            const dados: Repository[] = await resposta.json();
            
            const reposOrdenados = [...dados];
            if (ordenacao === 'asc') {
                reposOrdenados.sort((a, b) => a.stargazers_count - b.stargazers_count);
            } else {
                reposOrdenados.sort((a, b) => b.stargazers_count - a.stargazers_count);
            }

            console.log('Repos ordenados:', reposOrdenados);
    
            setRepos(reposOrdenados);
            console.log('Estado repos:', reposOrdenados);
            
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
        };
    
        getRepos();
    }, [id, ordenacao]);
    
    const handleOrdernar = (ordem: 'asc' | 'desc') => {
        setOrdenacao(ordem);
    };


    return (
        <Results>
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
            <p>Repositórios:</p>
            <button onClick={() => handleOrdernar('asc')}>Ordem Crescente de Estrelas</button>
            <button onClick={() => handleOrdernar('desc')}>Ordem Decrescente de Estrelas</button>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                    <Link to={`/users/${id}/repos/${repo.name}`}>{repo.name} - Estrelas: {repo.stargazers_count}</Link>
                    </li>
                ))}
            </ul>
           
        </Results>
        
    )
}


export default User;
