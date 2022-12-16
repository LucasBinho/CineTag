import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/cabecalho"
import Container from "../../components/container"
import Rodape from "../../components/rodape"
import FavoritosProvider from "../../contextos/Favoritos"

function PaginaBase() {
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>      
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase