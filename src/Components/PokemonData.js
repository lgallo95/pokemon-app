import React, { useState } from "react";
import PokemonDataDetail from "./PokemonDataDetail";
import {PokedexContainer, CardContainer, CardImg, InfoPanel, NamePlate} from "./Styling/Styles"


export default function PokemonData(props) {
  const { pokemonData, setFavArray, removeVal, isFav } = props;
  const [displayPokemonData, setDisplayPokemonData] = useState(false);

  const onClick = () => {
    if (displayPokemonData === false) {
      setDisplayPokemonData(true);
    } 
    else 
    {
      setDisplayPokemonData(false);
    }
  };

  return (
    <>
      <PokedexContainer>
        <CardContainer>
          <NamePlate> {pokemonData.name} </NamePlate>
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
          displayPokemonData={displayPokemonData}
          removeVal = {removeVal}
          isFav = {isFav}
        />
        </InfoPanel>
      </PokedexContainer>
    </>
  );
}
