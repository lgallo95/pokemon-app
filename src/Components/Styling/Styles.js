import styled from "styled-components";
import image from "../Images/screenblue.jpg";

// @media (max-width: 2560px) {
//   border: 5px solid blue;
//  }

// ----------------------------------------------------------------PokemonCards-----------------------------------------------------------

export const MainContainer = styled.div `
 
margin: 3vh 0 0 20vw;

`

export const ButtonBackgroundStyle = styled.div`
  z-index: 1;
  position: relative;
  background: crimson;
  margin: 0 1vw 0 50vw ;
  text-align: right;
  border-radius: 15px;
  right: 16.4vw;
  top: 1vw;
  filter: drop-shadow(0px 1px 5px #000);
`;

export const DataStyle = styled.div`
  // top: 7%;
  // left: 0;
  // 
  // padding: 1%;
  
  
  position: fixed;
  background-color: crimson;
  overflow: auto;
  height: 80%;
  width: 60%;
  border: 25px solid crimson;
  border-radius: 15px;
  filter: drop-shadow(2px 5px 10px #000);
`;

export const LogoStyle = styled.img`
  width: 10vw;
`;

export const ButtonStyle = styled.img`
  width: 3vw;
`;
export const ButtonStyle2 = styled.img`
  width: 5vw;
`;

export const ButtonStyle3 = styled.img`
  width: 5vw;
  margin-bottom: 1.5%;
`;




// ---------------------------------------------------------------------------------------------------------------------------------------

// @media (max-width: 2560px) {
//   border: 5px solid blue;
//  }

// ----------------------------------------------------------------PokemonData-----------------------------------------------------------
export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.div`
  background: darkgray;
  display: grid;
  width: 50%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const CardImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 4vh;
  filter: drop-shadow(1px 3px 10px #000);
`;

export const InfoPanel = styled.div`
 background-image: url(${image});
 background-repeat: no-repeat;
 background-size: 70% 70%;
 background-position: center;
 justify-content: center;
 text-align: center;
 align-items: center;
 width: 75vh;
 display: grid;
 filter: drop-shadow(1px 1px 5px #000);
`;

export const NamePlate = styled.h1`

position: relative;

background: #FFCB05;

margin: 1vw 5vw;
border-radius: 15px;
filter: drop-shadow(1px 1px 5px #000);

`
// --------------------------------------------------------------------------------------------------------------------------------------------
// @media (max-width: 2560px) {
//   border: 5px solid blue;
//  }

// ----------------------------------------------------------------PokemonDataDetail-----------------------------------------------------------
export const DataContainer = styled.div`
  background: black;
  margin: auto;
  border: 5px solid whitesmoke;
  width: 10vw ;
  filter: drop-shadow(1px 1px 5px #000);
`;

export const DataCardInfo = styled.p`
  color: white;
`;

export const DataCardContainer = styled.div`
  width: 25vh;
`;
// ------------------------------------------------------------------------------------------------------------------------------------------

// @media (max-width: 2560px) {
//   border: 5px solid blue;
//  }
