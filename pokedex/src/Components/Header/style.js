import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
font-family: 'Pokemon Solid', sans-serif;
color: #FFCB05;
align-items: center;
justify-content: space-around;
height: 120px;


background: #2B6EB6;
text-shadow: 10px 0px 0 #2B6EB6, 2px -2px 0 #2B6EB6, -2px 8px 0 #2B6EB6, -2px -2px 0 #2B6EB6, 2px 0px 0 #2B6EB6, 0px 2px 0 #2B6EB6, -2px 15px 0 #2B6EB6, 0px -2px 0 #2B6EB6;
color: #FFCB05;
background: #043375;   

button{
  display: flex;	
  background: #2B6EB6;
  height: 40px;
  padding: 20px;
  border-radius: 10px ;
  align-items: center ;
  border: 1px solid #FFF;
  color: #FFF;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  cursor: pointer;
  transition: filter 0.2s;

  :hover{
    filter: brightness(0.9);
    
  }
  
}

h1{
  display: flex;
  font-size: 3.8em;
  margin-bottom: 30px;
  
}

img{
  width: 150px;
}

`
