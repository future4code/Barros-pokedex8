import {HeaderContainer} from './style'
import poke from './poke.png'

export function Header(){
  return(
    <HeaderContainer>
      <button>Ver Minha Pokedex </button>
      <h1>PoKeDex</h1>
      <img src={poke} alt="imagem"/>
    </HeaderContainer>
  )
}
