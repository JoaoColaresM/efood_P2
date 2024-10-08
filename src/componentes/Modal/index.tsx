import { useState } from 'react'
import { CardapioAPI } from '../../modelos/Cardapio'
import { ImgModal, InfosModal, ModalDiv, CartaoModal, BotaoModal, XFechar } from './styles'
import Xfechar from '../../assets/imagens/fechar.svg'

type Props = {
    info: CardapioAPI
    visivel: boolean
}

const Modal = ({ info, visivel }: Props) => {
    const [fechar, setFechar] = useState(true)
    const fecharModal = () => {
        setFechar(fechar => !fechar)
    }

    return (
        <ModalDiv className={visivel === fechar ? '' : 'visivel'}>
            <CartaoModal className='container'>
                <ImgModal>
                    <img src={info.foto} alt={info.nome} />
                </ImgModal>
                <InfosModal>
                    <h2>{info.nome}</h2>
                    <p>{info.descricao}</p>
                    <span>Serve: de {info.porcao}</span>
                    <BotaoModal>Adicionar ao carrinho - R${info.preco}</BotaoModal>
                </InfosModal>
                <XFechar onClick={() => fecharModal()}>
                    <img src={Xfechar} alt="fechar" />
                </XFechar>
            </CartaoModal>
            <div className="overlay" onClick={() => fecharModal()}></div>
        </ModalDiv>
    )
}

export default Modal