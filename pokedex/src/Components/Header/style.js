import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
position: fixed ;
top:0;
font-family: 'Pokemon Solid', sans-serif;
color: #FFCB05;
align-items: center;
justify-content: space-between;
height: 120px;
width: 100%;
z-index: 1;

div {
  display: flex;
  align-items: center ;
  justify-content: space-around;

}

div input {
  display: flex;	
  background: #2B6EB6;
  height: 30px;
  padding: 20px;
  border-radius: 10px ;
  align-items: center ;
  border: 1px solid #FFF;
  color: #FFF;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  width: 50% ;
  cursor: text;
  
  

  }

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
  margin-left: 70px ;
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
  margin-left: 40px ;

}

`
