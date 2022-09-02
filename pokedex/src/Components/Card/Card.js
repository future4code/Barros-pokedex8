import React from "react";
import {CardContainer} from "./style";
export function Card({img, nome}){
  
  return( 
    <>
    <CardContainer>
        <img src={img} alt={nome}/>
        <h2>{nome}</h2>
        <button>Adicionar</button>
        <button>Detalhes</button>
    </CardContainer>
    </>
  )
}