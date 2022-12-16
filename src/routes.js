import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from "./pages/favoritos";
import Inicio from "./pages/inicio";
import Player from "./pages/player";
import NaoEncontrada from "./pages/naoEncontrada";
import PaginaBase from "./pages/paginaBase";


function AppRoutes() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase/>}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path="favoritos" element={<Favoritos/>}></Route>
                        <Route path=":id" element={<Player/>}></Route>
                        <Route path="*" element={<NaoEncontrada/>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;