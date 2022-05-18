import React, { useState } from "react";
import PokemonDataDetail from "./PokemonDataDetail";
import {PokedexContainer, CardContainer, CardImg, InfoPanel} from "./Styling/Styles"


export default function PokemonData(props) {
  const { pokemonData, setFavArray, removeVal, isFav } = props;
  const [displayData, setdisplayData] = useState(false);

  const onClick = () => {
    if (displayData === false) {
      setdisplayData(true);
    } 
    else 
    {
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
          setFavArray = {setFavArray}
          pokemonData={pokemonData}
          displayData={displayData}
          removeVal = {removeVal}
          isFav = {isFav}
        />
        </InfoPanel>
      </PokedexContainer>
    </>
  );
}
