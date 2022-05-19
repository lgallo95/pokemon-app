import React, { useState } from "react";
import PokemonData from "./PokemonData";
import favorite from "../Components/Images/favorite.png";
import back from "../Components/Images/back.png";
import blue from "../Components/Images/blue.png";
import red from "../Components/Images/red.png";
import logo from "../Components/Images/logo.png";
import useLocalStorage from "./Hooks/useLocalStorage";
import {
  DataStyle,
  LogoStyle,
  ButtonStyle,
  ButtonStyle2,
  ButtonStyle3,
  ButtonBackgroundStyle,
} from "../Components/Styling/Styles";

export default function Dataset(props) {
  const { pokemonData } = props;
  const [pokemonList, setPokemonList] = useState(true);
  const [favArray, setFavArray, removeVal] = useLocalStorage("favArray", []);

  const filterFav = () => {
    setPokemonList(false);
  };

  const unFilterFav = () => {
    setPokemonList(true);
  };

  const normalData = pokemonData.map((pokemon) => {
    return (
      <PokemonData
        pokemonData={pokemon}
        key={pokemon.id}
        setFavArray={setFavArray}
      />
    );
  });

  const favData = favArray.map((pokemon) => {
    return (
      <PokemonData
        pokemonData={pokemon}
        key={pokemon.id}
        setFavArray={setFavArray}
        removeVal={removeVal}
        isFav={true}
      />
    );
  });

  return (
    <div>
      <ButtonBackgroundStyle>
        <LogoStyle src={logo} alt="Pokedex" />
        <ButtonStyle src={favorite} alt="Favorite Button" onClick={filterFav} />
        <ButtonStyle src={back} alt="Back Button" onClick={unFilterFav} />
        <ButtonStyle2 src={blue} alt="Blue Icon" />
        <ButtonStyle3 src={red} alt="Red Icon" />
      </ButtonBackgroundStyle>
      <DataStyle>
        <div>
          <div>{pokemonList === true ? normalData : favData}</div>
        </div>
      </DataStyle>
    </div>
  );
}
