import React, { useState } from "react";
import PokemonData from "./PokemonData";
import styled from "styled-components";

const DataStyle = styled.div`
  position: fixed;
  top: 7%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60%;
  height: 80%;
  overflow: auto ;
  padding: 1%;
  border-radius: 15px;
  background-color: crimson;
  filter: drop-shadow(0px 1px 1px #000);
`;

const Cards = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Pokedex1 = styled.div`
  background: #dc0a2d;
`;






export default function Dataset(props) {
  const { pokemonData } = props;
  const [search, setSearch] = useState(true);
  const favArray = [];

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    favArray.push(JSON.parse(value));
  }

  const filterFav = () => {
    setSearch(false);
  };

  const unFilterFav = () => {
    setSearch(true);
  };

  const normalData = pokemonData.map((pokemon) => {
    return <PokemonData pokemonData={pokemon} key={pokemon.id} />;
  });

  const favData = favArray.map((pokemon) => {
    return <PokemonData pokemonData={pokemon} key={pokemon.id} />;
  });

  return (
    <>
      <DataStyle>
        <div>
          <button onClick={filterFav}> View My Favorites </button>
          <button onClick={unFilterFav}> Back </button>
          <Cards>{search === true ? normalData : favData}</Cards>
        </div>
      </DataStyle>
      <div>
      Add buttons here
      
    </div>
    </>
  );
}

// export default function Dataset(props) {
//   const { pokemonData } = props;
//   const [namefilter, setNameFilter] = useState([])
//   const [search, setSearch] = useState('')

// const onChange = event => {
//   setSearch(event.target.value)
//   const foundPokemon = pokemonData.filter((pokemon) => {
//     return pokemon.name.includes(search)
//   })
//   setNameFilter(foundPokemon)
// }

// const filterFav = () =>{
//   setSearch(false)
// }

// const unFilterFav = () =>{
//   setSearch('')
// }

// const filteredData = namefilter.map((pokemon) => {
//   return <PokemonData pokemonData={pokemon} key={pokemon.id} />;
// })

// const normalData = pokemonData.map((pokemon) => {
//   return <PokemonData pokemonData={pokemon} key={pokemon.id} />;
// })

//   return (
//     <MainPageStyle>
//       <DataStyle>
//       <button onClick={filterFav}> View My Favorites </button>
//       <button onClick={unFilterFav}> Back </button>
//       <InputSize type = 'text' placeholder="Search by Pokemon" onChange={onChange}/>
//       <Cards>
//         {
//           (search === "") ? normalData : filteredData
//         }
//       </Cards>
//       </DataStyle>
//     </MainPageStyle>
//   );
// }
