import {HeaderContainer} from './style'
import poke from './poke.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../routes/cordinator'

export function Header(){

  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <button>Ver Minha Pokedex </button>
      <h1>PoKeDex</h1>
      <img src={poke} alt="imagem"/>
    </HeaderContainer>
  )
}
