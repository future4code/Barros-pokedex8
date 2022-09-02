import React from 'react'
import { Header } from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/BASE_URL'
import { useRequestData } from '../../Hooks/useRequestData'
import { Card } from '../../Components/Card/Card'
import { HomeContainer } from './style'

export default function Home() {
    
    const [data, loading, error] = useRequestData(BASE_URL)
     
    const pokemons = data&&data.results.map((poke) => {
      return <li>{poke.name}</li>})
   
    return (
      <>
        <HomeContainer>
          <Header/>
              <main>
                <Card 
                  img={"http://midia.gruposinos.com.br/_midias/jpg/2016/07/13/pikachu-1590127.jpg"}
                  nome={"pokemon"}
                  />

                  <Card 
                  img={"http://midia.gruposinos.com.br/_midias/jpg/2016/07/13/pikachu-1590127.jpg"}
                  nome={"pokemon"}
                  />
               
              </main>
        </HomeContainer>
        
        {loading && <p>...Carregando...</p>}
        {!loading && data && pokemons}
        {!loading && !data && error}
      
    </>
  )
}
