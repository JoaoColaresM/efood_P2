import ListaDeRestaurantes from "../../componentes/ListaDeRestaurantes";
import Cabecalho from "../../componentes/Cabecalho";
import { RestaurantesAPI } from "../../modelos/Restaurantes";
import { useEffect, useState } from "react";

const PaginaRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<RestaurantesAPI[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then((res) => res.json())
            .then((res) => setRestaurantes(res))
    }, [])

    return (
        <>
            <Cabecalho inicial={true} />
            <ListaDeRestaurantes opcaoRestaurante={restaurantes} />
        </>
    )
}

export default PaginaRestaurantes