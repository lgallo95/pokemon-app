import React from "react";
import styled from "styled-components";

const DataContainer = styled.div`
  background: black;

  margin: auto;

  border: 5px solid whitesmoke;

  filter: drop-shadow(1px 1px 5px #000);
`;


export default function PokemonDataDetail(props) {
  const { pokemonData, displayData } = props;
  

  const addToFav = () => {
    localStorage.setItem(
      `Pokemon ID ${pokemonData.id}`,
      JSON.stringify(pokemonData)
    );

    window.alert(`Added to favorites... ${pokemonData.name} jumps with joy!`);
  };

  const removeFromFav = () => {
    localStorage.removeItem(`Pokemon ID ${pokemonData.id}`);

    window.alert(`Removed from favorites... ${pokemonData.name} is crying`);
  };

  return (
    <div>
      <DataContainer>
        <p className="ptag">
          {displayData === true
            ? `Pokedex Number: ${pokemonData.nationalPokedexNumbers}`
            : ""}
        </p>

        <p className="ptag">
          {displayData === true ? `Name: ${pokemonData.name}` : ""}
        </p>

        <p className="ptag">
          {displayData === true ? `Pokemon Type: ${pokemonData.types} ` : ""}
        </p>

        <p className="ptag">
          {displayData === true
            ? `Credited Artist: ${pokemonData.artist} `
            : ""}
        </p>

        <p className="ptag">
          {displayData === true ? `Level: ${pokemonData.level} ` : ""}
        </p>

        <p className="ptag">
          {displayData === true ? `HP: ${pokemonData.hp} ` : ""}
        </p>

        <p className="ptag">
          {displayData === true ? `Rarity: ${pokemonData.rarity} ` : ""}
        </p>

        <p className="ptag">
          {displayData === true && pokemonData.attacks[0].name
            ? `Main Ability: ${pokemonData.attacks[0].name}`
            : ""}
        </p>

        <p className="ptag">
          {displayData === true && pokemonData.weaknesses[0].type
            ? `Weakness: ${pokemonData.weaknesses[0].type}`
            : ""}
        </p>

        <p className="ptag">
          {displayData === false ? `${pokemonData.name} Stat Card` : ""}
        </p>
      </DataContainer>
      <p>{displayData === false ? "Click Card For More Info!" : ""}</p>
      <button onClick={addToFav}> Add to Favorites </button>
      <button onClick={removeFromFav}> Remove From Favorites </button>
    </div>
  );
}
