import { Container, SearchWrapper, SearchField, SearchButton } from './Home.styled'
import React from "react"

const Home = (): JSX.Element => {
    
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && searchTerm.trim() !== '') {
        navigateToUserPage();
      }
    };
  
    const navigateToUserPage = () => {
      if (searchTerm.trim() !== '') {
        window.location.href = `/users/${searchTerm}`;
      }
    };

  return (
    <Container>
      
      <SearchWrapper>
        <p>Pesquisar usuário do Github:</p>
        <SearchField 
          type="text" 
          placeholder="Nome de usuário" 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          autoFocus
          onKeyDown={handleEnterKeyPress}
        />
        <SearchButton 
          to={`/users/${searchTerm}`}
          onClick={navigateToUserPage}>
            Pesquisar
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
