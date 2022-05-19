import React, { useState, useEffect } from "react";
import axios from "../API/Api.js";
import PokemonCards from "./PokemonCards";

import {  MainContainer} from "../Components/Styling/Styles";

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
    <MainContainer>
      <PokemonCards pokemonData={pokemonData} />
    </MainContainer>
    </div>
  );
}

export default App;
