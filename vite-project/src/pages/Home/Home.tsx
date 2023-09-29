import { Container, SearchButton, SearchBar, SearchWrapper, ResultsList, Result } from './Home.styled'
import React from "react"

function Home() {

    const [users, setUsers] = React.useState(["Carol", "Lele", "Gi"])
  

  return (
    <Container>
      <SearchWrapper>
        <SearchBar type="text" placeholder="Pesquisar"/>
        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </SearchWrapper>
      <ResultsList>
            {
                users.map((user, index) => (
                    <Result key={index}>
                    {user}
                    </Result>
                ))
            }
      </ResultsList>
    </Container>
  )
}

export default Home