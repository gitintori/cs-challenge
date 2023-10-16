import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import RepoDetails from '../pages/RepoDetails/RepoDetails'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/"
                element={<Home/>}
            />

            <Route
                path="/users/:id"
                element={<User/>}
            />

            <Route
                path="*"
                element={<p>Não foi possível concluir sua busca, tente novamente</p>}
            />

        <Route
            path="/users/:id/repos/:repoId"
            element={<RepoDetails />}
        />

        </Routes>
    </BrowserRouter>
)

export default Router
