import Modal from '../Modal'
import { CardapioAPI } from '../../modelos/Cardapio'
import { BotaoMenu, Descricao, ImagemMenu, OpcaoMenu, Titulo } from './styles'
import { useState } from 'react'

type Props = {
    desCard: CardapioAPI
}

const Cardapio = ({ desCard }: Props) => {
    const descricaoMaxima = (texto: string) => {
        if (texto.length > 250) {
            return texto.slice(0, 247) + '...'
        } return texto
    }

    const [modal, setModal] = useState(true)

    const abrirModal = () => {
        setModal(modal => !modal)
    }

    return (
        <>
            <OpcaoMenu>
                <ImagemMenu style={{ backgroundImage: `url(${desCard.foto})` }} />
                <Titulo>{desCard.nome}</Titulo>
                <Descricao>{descricaoMaxima(desCard.descricao)}</Descricao>
                <BotaoMenu onClick={() => { abrirModal() }}>Adicionar ao carrinho</BotaoMenu>
            </OpcaoMenu>
            <Modal visivel={modal} info={desCard} />
        </>
    )
}

export default Cardapio