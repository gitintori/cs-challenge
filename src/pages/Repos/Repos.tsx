import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const url = 'https://api.github.com/';

const Repos = () => {
  const { id } = useParams();

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const resposta = await fetch(`${url}users/${id}/repos`);
      console.log(resposta)
      const dados = await resposta.json();
      setRepos(dados);
      console.log(dados)
    }

    getRepos();
  }, [id]);

  return (
    <div>
        <Link to={`/users/${id}`}>
                Voltar
            </Link>
        <ul>
            {repos.map((repo: any) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
        </ul>
    </div>
  );
};

export default Repos;