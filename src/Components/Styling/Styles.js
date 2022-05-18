import styled from "styled-components";
import image from "../Images/screenblue.jpg";

// @media (max-width: 2560px) {
//   border: 5px solid blue;
//  }

// ----------------------------------------------------------------PokemonCards-----------------------------------------------------------
export const DataStyle = styled.div`
  position: fixed;
  top: 7%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60%;
  height: 80%;
  overflow: auto;
  padding: 1%;
  border-radius: 15px;
  background-color: crimson;
  border: 25px solid crimson;
  filter: drop-shadow(0px 1px 5px #000);
`;

export const LogoStyle = styled.img`
  width: 25%;
  margin-right: 20%;
`;

export const ButtonStyle = styled.img`
  width: 10%;
`;
export const ButtonStyle2 = styled.img`
  width: 15%;
`;

export const ButtonStyle3 = styled.img`
  width: 16%;
  margin-bottom: 1%;
`;

export const ButtonBackgroundStyle = styled.div`
  background: crimson;
  width: 60vh;
  position: absolute;
  margin-left: 96.8vh;
  margin-top: 1%;
  text-align: right;
  border-radius: 15px;
  filter: drop-shadow(0px 1px 5px #000);

  @media (max-width: 1920px ) {
    margin-top: 1%;
    margin-left: 102vh;
  }
  
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
  background-size: 75% 75%;
  background-position: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 75vh;
  display: grid;
  filter: drop-shadow(1px 1px 5px #000);
`;
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
