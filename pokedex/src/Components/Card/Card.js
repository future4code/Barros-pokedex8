import React from "react";
import {CardContainer, Container} from "./style";


export function Card({img, name, types}){
  
  


  return( 
    <Container>
    <CardContainer className={types[0].type.name}> 
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{types[0].type.name}</p>
        <button>Adicionar</button>
        <button>Detalhes</button>
    </CardContainer>
    </Container>
  )
}