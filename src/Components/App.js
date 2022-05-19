import React, { useState, useEffect } from "react";
import PokemonCards from "./PokemonCards";


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const url = "https://api.pokemontcg.io/v2/cards";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "x-api-key": "af08500c-f6d1-491a-aa2a-75c980bb1e54",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(function(res) {
        setPokemonData(res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <PokemonCards pokemonData={pokemonData} />
    </div>
  );
}

export default App;
