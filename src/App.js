import React, { useState, useEffect } from "react";
import axios from "../src/API/Api.js";
import PokemonCards from "../src/Components/PokemonCards";
import styled from "styled-components";

const FrontPage = styled.div`

background: #a2a2a2;

`


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
    <FrontPage>
      <PokemonCards pokemonData={pokemonData} />
    </FrontPage>
  );
}

export default App;
