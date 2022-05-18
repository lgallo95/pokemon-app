import React, { useState, useEffect } from "react";
import axios from "../API/Api.js";
import PokemonCards from "./PokemonCards";



function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get("cards")
      .then((res) => {
        console.log(res.data.data);
        setPokemonData(res.data.data);
        console.log(pokemonData);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);


  return (
    <div>
      <PokemonCards pokemonData={pokemonData} />
    </div>
  );
}

export default App;