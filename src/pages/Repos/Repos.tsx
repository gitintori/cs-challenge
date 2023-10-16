import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const url = 'https://api.github.com/';

type Repository = {
  id: number;
  name: string;
  stargazers_count: number;
};

const Repos = () => {
  const { id } = useParams();

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

        setRepos(reposOrdenados);
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
    <div>
        <Link to={`/users/${id}`}>
                Voltar
        </Link>
      <div>
        <button onClick={() => handleOrdernar('asc')}>Ordem Crescente</button>
        <button onClick={() => handleOrdernar('desc')}>Ordem Decrescente</button>
      </div>
      <ul>
          {repos.map((repo: any) => (
                  <li key={repo.id}>{repo.name} - Estrelas: {repo.stargazers_count}</li>
              ))}
      </ul>
    </div>
  );
};

export default Repos;