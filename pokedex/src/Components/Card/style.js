import styled from 'styled-components'


export const Container = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  position: relative;
  text-align: center;
  padding: 15px;
  margin: 25px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
  border-radius: 15px; 
  align-items: center ;
  transition: ease-in-out .2s;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  &:hover{
    transform: scale(1.02);
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  p {
    margin: 0 0 3px 0;
    text-transform: capitalize;
    background-color: rgba(255,255,255, 0.3);
    border-radius: 20px;
    padding: 3px 10px;
    font-weight: bold;
  }

  img{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 120px;
    right: -50px;
  }

  button{
    position: relative;
    top: 40px;
    right: 80px;
    margin: 5px;
    justify-content: space-around;
    width: 100px;
    height: 50px;
    border-radius: 5px;
    padding: 4px 15px;
    border: none;
    cursor: pointer;
  }

`