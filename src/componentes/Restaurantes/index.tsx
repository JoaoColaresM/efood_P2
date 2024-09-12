import { Cartao, Imagem, Descricao, Tags, Botao, TituloNota, Estrela } from './styles'
import Tag from '../Tag'
import estrela from '../../assets/imagens/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    titulo: string
    tipo: string
    avaliacao: number
    capa: string
    descricao: string
}

const Restaurantes = ({ id, descricao, capa, avaliacao, tipo, titulo }: Props) => (
    <Cartao>
        <Imagem style={{ backgroundImage: `url(${capa})` }} />
        <Tags>
            <Tag id={id} children={tipo} />
        </Tags>
        <TituloNota>
            <div>{titulo}</div>
            <Estrela>
                <div>{avaliacao}</div>
                <img src={estrela} alt='estrela' title='estrela' />
            </Estrela>
        </TituloNota>
        <Descricao>{descricao}</Descricao>
        <Link to={`/Cardapio/${id}`}>
            <Botao>saiba mais</Botao>
        </Link>
    </Cartao>
)

export default Restaurantes