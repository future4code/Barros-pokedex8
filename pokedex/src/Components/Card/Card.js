import React from "react";
import {CardContainer, Container} from "./style";
export function Card({img, name}){
  
  return( 
    <Container>
    <CardContainer>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <button>Adicionar</button>
        <button>Detalhes</button>
    </CardContainer>
    </Container>
  )
}