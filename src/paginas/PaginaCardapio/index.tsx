import ListaMenu from '../../componentes/ListaCardapio'
import { CardapioAPI } from "../../modelos/Cardapio"
import { RestaurantesAPI } from '../../modelos/Restaurantes';
import Cabecalho from "../../componentes/Cabecalho"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Cardapio = () => {
    const { id } = useParams()

    const [cardapio, setCardapio] = useState<CardapioAPI[]>([])
    const [capa, setCapa] = useState<Omit<RestaurantesAPI, 'id' | 'avaliacao' | 'descricao'>>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setCardapio(res.cardapio))

        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setCapa(res))
    }, [id])

    return (
        <>
            <Cabecalho inicial={false} cabecaInfo={capa} />
            <ListaMenu opcaoMenu={cardapio} />
        </>
    )
}

export default Cardapio