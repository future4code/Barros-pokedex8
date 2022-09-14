import {HeaderContainer} from './style'
import poke from './poke.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../routes/cordinator'

export function Header({pokemonFilter}){

  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <button>Ver Minha Pokédex </button>
      <h1>PoKéDex</h1>
      <div>
        <input 
          type='search' 
          placeholder='buscar pokemon...'
          onChange={(e)=>pokemonFilter(e.target.value)}/>
        <img src={poke} alt="imagem"/>
      </div>
    </HeaderContainer>
  )
}
