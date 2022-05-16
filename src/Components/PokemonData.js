import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PokemonDataDetail from "./PokemonDataDetail";
import image from "../../src/1125x2436-pastel-blue-solid-color-background.jpg"





const PokedexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  background: darkgray;
  display: grid;
  width: 50%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const CardImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  filter: drop-shadow(1px 3px 10px #000);
`;

const InfoPanel = styled.div`
background-image: url(${image});
background-repeat: no-repeat;
background-size: 75% 75%;
background-position: center;
justify-content: center;
text-align: center;
align-items: center;
width: 50%;
display: grid; 
filter: drop-shadow(1px 1px 5px #000);
`


export default function PokemonData(props) {
  const { pokemonData } = props;
  const [displayData, setdisplayData] = useState(false);

  const onClick = () => {
    if (displayData === false) {
      setdisplayData(true);
    } else {
      setdisplayData(false);
    }
  };

  return (
    <>
      <PokedexContainer>
        <CardContainer>
          <h1> {pokemonData.name} </h1>
          <CardImg
            alt="Pokemon"
            src={pokemonData.images.large}
            onClick={onClick}
          />
        </CardContainer>
        <InfoPanel>
        <PokemonDataDetail
          pokemonData={pokemonData}
          displayData={displayData}
        />
        </InfoPanel>
      </PokedexContainer>
    </>
  );
}

// return (
//   <div>
//     <PicAndInfoSplit>
//       <ProfilePic alt="User Pic" src={info.pic} />
//       <InfoSplit>
//       <H1Font>
//         {info.firstName.toUpperCase()} {info.lastName.toUpperCase()}
//       </H1Font>
//       <p className='ptag'>Email: {info.email} </p>
//       <p className='ptag'>Company: {info.company} </p>
//       <p className='ptag'>Skill: {info.skill} </p>
//       <Average infoGrades={infoGrades} />
//       </InfoSplit>
//     </PicAndInfoSplit>
//   </div>
// );
