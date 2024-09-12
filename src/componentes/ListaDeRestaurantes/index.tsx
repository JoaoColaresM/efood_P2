import Restaurantes from "../Restaurantes";
import { RestaurantesAPI } from "../../modelos/Restaurantes";
import { ListaRestaurantes } from './styles'

type Props = {
    opcaoRestaurante: RestaurantesAPI[]
}

const ListaDeRestaurantes = ({ opcaoRestaurante }: Props) => (
    <div className="container">
        <ListaRestaurantes>
            {opcaoRestaurante.map((rest) => (
                <Restaurantes
                    key={rest.id}
                    id={rest.id}
                    titulo={rest.titulo}
                    descricao={rest.descricao}
                    capa={rest.capa}
                    avaliacao={rest.avaliacao}
                    tipo={rest.tipo}
                />
            ))}
        </ListaRestaurantes>
    </div>
)

export default ListaDeRestaurantes