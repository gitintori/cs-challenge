import { Container, SearchButton, SearchBar, SearchWrapper, ResultsList, Result } from './Home.styled'
import React from "react"

function Home() {

    const [users, setUsers] = React.useState(["Carol", "Leandro", "Giovanna"])
    const [searchTerm, setSearchTerm] = React.useState('')

    const filteredUsers = users.filter((user) => user.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <SearchWrapper>
        <SearchBar type="text" placeholder="Pesquisar" value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </SearchWrapper>
      <ResultsList>
            {
                filteredUsers.map((user, index) => (
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