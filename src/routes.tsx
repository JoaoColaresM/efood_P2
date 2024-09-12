import { Routes, Route } from 'react-router-dom'
import Restaurantes from './paginas/PaginaRestaurantes'
import Cardapio from './paginas/PaginaCardapio'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Restaurantes />} />
        <Route path='/Cardapio/:id' element={<Cardapio />} />
    </Routes>
)

export default Rotas