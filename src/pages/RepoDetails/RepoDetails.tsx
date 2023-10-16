import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RepoDetails = () => {
  const { id, repoId } = useParams();
  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    stargazers_count: 0,
    html_url: '',
    language: ''
  });
  // console.log(repoDetails)

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${id}/${repoId}`);
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        setRepoDetails(data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchRepoDetails();
  }, [id, repoId]);


  return (
    <div>
      <Link to={`/users/${id}`}>Voltar</Link>
      <h2>Detalhes do Repositório</h2>
      <p>Nome: {repoDetails.name}</p>
      {repoDetails.description ? (
            <p>Descrição: {repoDetails.description}</p>
            ) : (
            <p>Descrição: Não encontrado</p>
            )}
      <p>Estrelas: {repoDetails.stargazers_count}</p>
      {repoDetails.language ? (
            <p>Linguagem: {repoDetails.language}</p>
            ) : (
            <p>Linguagem: Não especificado</p>
            )}
      <a href={repoDetails.html_url}> Abrir no Github</a>
    </div>
  );
};

export default RepoDetails;