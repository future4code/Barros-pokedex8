import React from 'react'
import {HeaderContainer} from './style'
import poke from './poke.png'

  export default function Home() {
    return (
      <div>
        <HeaderContainer>
          <button>Ver Minha Pokedex </button>
          <h1>PoKeDex</h1>
          <img src={poke} alt="imagem"/>
        </HeaderContainer>

     

    </div>
  )
}
