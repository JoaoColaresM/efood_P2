import { Aviso, BarraRodaPe, RedesSociais } from './styles'
import logo from '../../assets/imagens/logo.svg'
import instagram from '../../assets/imagens/instagram-round-svgrepo-com (1) 1.svg'
import facebook from '../../assets/imagens/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/imagens/twitter-2-svgrepo-com 1.svg'

const RodaPe = () => (
    <BarraRodaPe>
        <img src={logo} alt="Logo" title="Logo" />
        <RedesSociais>
            <img src={instagram} alt="instagram" title="instagram" />
            <img src={facebook} alt="facebook" title="facebook" />
            <img src={twitter} alt="twitter" title="twitter" />
        </RedesSociais>
        <Aviso>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </Aviso>
    </BarraRodaPe>
)

export default RodaPe