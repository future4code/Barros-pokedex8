import styled from 'styled-components'


export const Container = styled.div `
width: 100%;
`

export const CardContainer = styled.div`
  width: 200px;
  background-color: #2B6EB6 ;
  text-align: center;
  padding: 10px;
  margin: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
  border-radius: 15px; 
  border: 3px solid #FFCB05;
  align-items: center ;
  background: linear-gradient(to bottom right, #f3ff47 60%, #0489dc 65%);
  transition: ease-in-out .2s;
  &:hover{
    transform: scale(1.1);
  }

  h2 {
    padding: 5px;
  }

  img{
    max-width: 200px;
  }

  button{
    margin: 5px;
    justify-content: space-around;
    width: 100px;
    border-radius: 5px;
    padding: 4px 15px;
    border: none;
    cursor: pointer;
  }

`