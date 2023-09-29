import React from "react"
import GlobalStyle from './config/GlobalStyle'
import { Container, SearchWrapper, SearchBar, SearchButton, ResultsList, Result } from './App.styled'
function App() {

    return (
        <Container>
            <SearchWrapper/>
                <SearchBar type="text" placeholder="Pesquisar"/>
                <SearchButton type="submit"/>
            <SearchWrapper/>

            <ResultsList>
                <Result>
                    hello world
                </Result>
            </ResultsList>
        </Container>
    )
}

export default App
