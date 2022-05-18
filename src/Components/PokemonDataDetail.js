import React from "react";
import {DataContainer, DataCardInfo, DataCardContainer} from './Styling/Styles'


export default function PokemonDataDetail(props) {
  const { pokemonData, displayData, setFavArray, removeVal, isFav } = props;

  const addToFav = () => {
    setFavArray(pokemonData)
    window.alert(`Added to favorites... ${pokemonData.name} jumps with joy!`);
  };

  const removeFromFav = () => {
    removeVal(pokemonData)
    window.alert(`Removed from favorites... ${pokemonData.name} is crying`);
  };

  return (
    <div>
      <DataCardContainer>
      <DataContainer>
        <DataCardInfo> {displayData === true ? `Pokedex Number: ${pokemonData.nationalPokedexNumbers}`: ""}</DataCardInfo>
        <DataCardInfo> {displayData === true ? `Name: ${pokemonData.name}` : ""} </DataCardInfo>
        <DataCardInfo> {displayData === true ? `Pokemon Type: ${pokemonData.types} ` : ""} </DataCardInfo>
        <DataCardInfo> {displayData === true ? `Credited Artist: ${pokemonData.artist} `: ""} </DataCardInfo>
        <DataCardInfo> {displayData === true ? `Level: ${pokemonData.level} ` : ""} </DataCardInfo>
        <DataCardInfo> {displayData === true ? `HP: ${pokemonData.hp} ` : ""} </DataCardInfo>
        <DataCardInfo> {displayData === true ? `Rarity: ${pokemonData.rarity} ` : ""} </DataCardInfo>
        <DataCardInfo> {displayData === true && pokemonData.attacks[0].name ? `Main Ability: ${pokemonData.attacks[0].name}`: ""} </DataCardInfo>
        <DataCardInfo> {displayData === false ? `${pokemonData.name} Stat Card` : ""} </DataCardInfo>
      </DataContainer>
      <p className="test">{displayData === false ? "Click Card For More Info!" : ""}</p>
      {!isFav && <button onClick={addToFav}> Add to Favorites </button>}
      {isFav && <button onClick={removeFromFav}> Remove From Favorites </button>}
      </DataCardContainer>
    </div>
  );
}
