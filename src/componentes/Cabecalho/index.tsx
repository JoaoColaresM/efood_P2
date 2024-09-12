import logo from '../../assets/imagens/logo.svg'
import { BarraCabecalhoInicio, Subtitulo, BarraCabecalhoPerfil, ImagemItaliano, Retangulo } from './styles'
import { Link } from 'react-router-dom'
import { RestaurantesAPI } from '../../modelos/Restaurantes'

type Cabeca = Omit<RestaurantesAPI, 'id' | 'avaliacao' | 'descricao'>

type Props = {
    inicial: boolean
    cabecaInfo?: Cabeca
}

const Cabecalho = ({ inicial, cabecaInfo }: Props) => (
    <>
        {
            inicial === true ?
                <BarraCabecalhoInicio>
                    <Link to='/'>
                        <img src={logo} alt="efood" />
                    </Link>
                    <Subtitulo>
                        Viva experiências gastronômicas<br /> no conforto da sua casa
                    </Subtitulo>
                </BarraCabecalhoInicio>
                :
                <>
                    <BarraCabecalhoPerfil>
                        <nav className='container'>
                            <Link to='/'>
                                <h3>Restaurantes</h3>
                            </Link>
                            <Link to='/'>
                                <img src={logo} alt="efood" />
                            </Link>
                            <p>0 produto(s) no carrinho</p>
                        </nav>
                    </BarraCabecalhoPerfil>
                    <ImagemItaliano style={{ backgroundImage: `url(${cabecaInfo?.capa})` }}>
                        <Retangulo>
                            <div className='container'>
                                <span>{cabecaInfo?.tipo}</span>
                                <h2>{cabecaInfo?.titulo}</h2>
                            </div>
                        </Retangulo>
                    </ImagemItaliano>
                </>
        }
    </>
)

export default Cabecalho