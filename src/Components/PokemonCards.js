import React, { useState } from "react";
import PokemonData from "./PokemonData";
import styled from "styled-components";
import favorite from "../favorite.png"
import back from "../back.png"
import blue from "../blue.png"
import red from "../red.png"
import logo from "../logo.png"

const DataStyle = styled.div`
  position: fixed;
  top: 7%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60%;
  height: 80%;
  overflow: auto;
  padding: 1%;
  border-radius: 15px;
  background-color: crimson;
  border: 25px solid crimson;
  filter: drop-shadow(0px 1px 1px #000);
`;

const LogoStyle = styled.img`
width:25%;
margin-right: 20% ;
`

const ButtonStyle = styled.img`
width:10%;
`
const ButtonStyle2 = styled.img`
width:15%;
`

const ButtonStyle3 = styled.img`
width:16%;
margin-bottom: 1%;
`


const ButtonBackgroundStyle = styled.div`
background: crimson;
width: 50%;
position: absolute;
margin-left: 32%;
margin-top: 1%;
text-align: right;
border-radius: 15px;
`

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
          <div>{search === true ? normalData : favData}</div>
        </div>
      </DataStyle>
      <ButtonBackgroundStyle>
        <LogoStyle src={logo} alt="Pokedex" />
        <ButtonStyle src={favorite} alt="Favorite Button" onClick={filterFav}/>
        <ButtonStyle src = {back} alt="Back Button" onClick={unFilterFav}/>
        <ButtonStyle2 src = {blue} alt="Blue Icon"/>
        <ButtonStyle3 src = {red} alt="Red Icon"/>
      </ButtonBackgroundStyle>
    </>
  );
}
