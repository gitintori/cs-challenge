import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Container, ButtonWrapper, StarButton, LinkRepo, LinkVoltar } from "./Repos.styled";

const url = 'https://api.github.com/';

type Repository = {
    id: number;
    name: string;
    stargazers_count: number;
  };

const Repos = () => {
const {id} = useParams()
const [repos, setRepos] = useState<Repository[]>([]);
const [ordenacao, setOrdenacao] = useState('desc');

    useEffect(() => {
        const getRepos = async () => {

            const resposta = await fetch(`${url}users/${id}/repos`);

            const dados: Repository[] = await resposta.json();

            const reposOrdenados = [...dados];
            if (ordenacao === 'asc') {
                reposOrdenados.sort((a, b) => a.stargazers_count - b.stargazers_count);
                } else {
                    reposOrdenados.sort((a, b) => b.stargazers_count - a.stargazers_count);
                }

            console.log(reposOrdenados);

            setRepos(reposOrdenados);
            console.log(reposOrdenados);
        };

        getRepos();
    }, [id, ordenacao]);

    const handleOrdernar = (ordem: 'asc' | 'desc') => {
        setOrdenacao(ordem);
    };

    return (

            <Container>
                <p>Repositórios:</p>
                <ButtonWrapper>
                    <p>Ordenar por estrelas:</p>
                    <StarButton>
                        <button onClick={() => handleOrdernar('asc')}>
                            &#9650; &#9733;
                        </button>
                        <button onClick={() => handleOrdernar('desc')}>
                            &#9660; &#9733;
                        </button>
                    </StarButton>
                </ButtonWrapper>
                <LinkRepo>
                    {repos.map((repo) => (
                        <li key={repo.id}>
                            <Link to={`/users/${id}/repos/${repo.name}`}>
                              <strong>{repo.name}</strong> - &#9733; {repo.stargazers_count} (<u>Ver detalhes</u>)
                            </Link>
                        </li>
                    ))}
                </LinkRepo>
                <LinkVoltar>
                    <Link to={`/users/${id}`}>
                        <p>Voltar</p>
                    </Link>
                </LinkVoltar>
            </Container>

    )
}

export default Repos;
