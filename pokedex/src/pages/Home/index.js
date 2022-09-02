import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/BASE_URL'
import { Card } from '../../Components/Card/Card'
import { HomeContainer } from './style'
import axios from 'axios'


export default function Home() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    let allPokemons = []
    for ( let i = 1; i < 21; i ++){
      allPokemons.push(`${BASE_URL}${i}`)
    }
    const response = axios.all(allPokemons.map((allPokemon)=> axios.get(allPokemon))).then((res)=> setPokemon(res))
    return response
  }

  const pokeMap = pokemon&&pokemon.map ((poke, index) =>{
    return <Card key={index} name={poke.data.name} img={poke.data.sprites.front_default} types={poke.data.types}></Card>
  })



  return (
    <>
      <HomeContainer>
        <Header />
        <main>
          {pokeMap}
        </main>
     
      </HomeContainer>

      

    </>
  )
}
