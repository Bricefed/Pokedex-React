import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/50")
      .then((res) => setPokemons(res.data));
  }, []);

  return (
    <main className="home-container">
      <header>
        <h1>Pokedex</h1>
        <Search value={search} updateSearch={setSearch} />
      </header>
      <div className="cards-container">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
