import React, {useState} from "react";
import {DataContainer, DataCardInfo, DataCardContainer} from './Styling/Styles'


export default function PokemonDataDetail(props) {
  const { pokemonData, displayPokemonData, setFavArray, removeVal, isFav } = props;
  const [buttonPressed, setButtonPressed] = useState(true)

  const addToFav = () => {
    setFavArray(pokemonData)
    window.alert(`Added to favorites... ${pokemonData.name} jumps with joy!`);
    setButtonPressed(false)
  };

  const removeFromFav = () => {
    removeVal(pokemonData)
    window.alert(`Removed from favorites... ${pokemonData.name} is crying`);
    setButtonPressed(true)
  };

  return (
    <div>
      <DataCardContainer>
        <DataContainer>
            {displayPokemonData && <DataCardInfo> {`Name: ${pokemonData.name}`} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`Pokedex Number: ${pokemonData.nationalPokedexNumbers}`} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`Pokemon Type: ${pokemonData.types} `} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`Credited Artist: ${pokemonData.artist} `} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`Level: ${pokemonData.level} `} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`HP: ${pokemonData.hp} `} </DataCardInfo> }
            {displayPokemonData && <DataCardInfo> {`Rarity: ${pokemonData.rarity} `} </DataCardInfo> }
            {displayPokemonData && pokemonData.attacks[0].name && <DataCardInfo> {`Main Ability: ${pokemonData.attacks[0].name}`} </DataCardInfo> }
            {!displayPokemonData && <DataCardInfo> {`${pokemonData.name} Stat Card`} </DataCardInfo> }
      </DataContainer>
        <p className="test">{displayPokemonData === false ? "Click Card For More Info!" : ""}</p>
        {!isFav && buttonPressed ? <button onClick={addToFav}> Add to Favorites &#11088; </button> : <p> {pokemonData.name} &#9989;</p>}
        {isFav && <button onClick={removeFromFav}> Remove From Favorites &#128683; </button>}
      </DataCardContainer>
    </div>
  );
}


