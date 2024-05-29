import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, RepoWrapper, LinkWrapper, LinkGithub, LinkVoltar } from "./RepoDetails.styled";

const url = 'https://api.github.com/';

const RepoDetails = () => {
  const { id, repoId } = useParams();
  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    stargazers_count: 0,
    html_url: '',
    language: ''
  });

  useEffect(() => {
    const fetchRepoDetails = async () => {
        const response = await fetch(`${url}repos/${id}/${repoId}`);
        const data = await response.json();
        setRepoDetails(data);
    };

    fetchRepoDetails();
  }, [id, repoId]);

  return (
    <Container>
      <p>Repository Details</p>
      <RepoWrapper>
        <p><strong>Name:</strong> {repoDetails.name}</p>
        {repoDetails.description ? (
              <p><strong>Description:</strong> {repoDetails.description}</p>
              ) : (
                <p><strong>Description:</strong> No description</p>
                )}
        {repoDetails.language ? (
              <p><strong>Language:</strong> {repoDetails.language}</p>
              ) : (
                <p><strong>Language:</strong> Not specified</p>
                )}
        <p>&#9733;: {repoDetails.stargazers_count}</p>
      </RepoWrapper>
      <LinkWrapper>
        <LinkGithub>
          <a href={repoDetails.html_url}> Open on Github</a>
        </LinkGithub>
        <LinkVoltar>
          <Link to={`/users/${id}/repos`}>
            Back
          </Link>
        </LinkVoltar>
      </LinkWrapper>
    </Container>
  );
};

export default RepoDetails;
