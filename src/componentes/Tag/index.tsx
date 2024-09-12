import { BarraDaTag } from './styles'
import { Link } from 'react-router-dom'

export type Props = {
    id: number
    children: string
}

const Tag = ({ children, id }: Props) => (
    <BarraDaTag>
        <Link to={`/Cardapio/${id}`}>
            {children}
        </Link>
    </BarraDaTag>
)

export default Tag