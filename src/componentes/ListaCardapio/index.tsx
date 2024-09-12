import { CardapioAPI } from "../../modelos/Cardapio"
import Cardapio from "../Cardapio"
import { ListaCardapio } from './styles'

type Props = {
    opcaoMenu: CardapioAPI[]
}

const ListaMenu = ({ opcaoMenu }: Props) => (
    <div className="container">
        <ListaCardapio>
            {opcaoMenu.map((menu) => (
                <Cardapio
                    key={menu.id}
                    desCard={menu}
                />
            ))}
        </ListaCardapio>
    </div>
)

export default ListaMenu