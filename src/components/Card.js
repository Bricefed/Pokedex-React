import React from "react";

const Card = ({ pokemon }) => {
  const type = pokemon.apiTypes[0].name;
  let cardBg;

  if (type === "Normal") cardBg = "#8f9aa2";
  if (type === "Combat") cardBg = "#ce406c";
  if (type === "Vol") cardBg = "#89acdf";
  if (type === "Poison") cardBg = "#a56dc7";
  if (type === "Sol") cardBg = "#db7946";
  if (type === "Roche") cardBg = "#cbb78b";
  if (type === "Insecte") cardBg = "#99bf33";
  if (type === "Spectre") cardBg = "#436baf";
  if (type === "Acier") cardBg = "#5291a2";
  if (type === "Feu") cardBg = "#fa9a53";
  if (type === "Eau") cardBg = "#2c95d5";
  if (type === "Plante") cardBg = "#6dba5f";
  if (type === "Électrik") cardBg = "#fbd03e";
  if (type === "Psy") cardBg = "#f9727a";
  if (type === "Glace") cardBg = "#72cdbe";
  if (type === "Dragon") cardBg = "#2270c5";
  if (type === "Ténèbre") cardBg = "#595464";
  if (type === "Fée") cardBg = "#e793e6";

  return (
    <div className="card" key={pokemon.id} style={{ background: cardBg }}>
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
      <h2>{pokemon.name}</h2>
      <div className="types-container">
        <img
          src={pokemon.apiTypes[0].image}
          alt={pokemon.apiTypes[0].name}
          title={pokemon.apiTypes[0].name}
        />
        {pokemon.apiTypes[1] && (
          <img
            src={pokemon.apiTypes[1].image}
            alt={pokemon.apiTypes[1].name}
            title={pokemon.apiTypes[1].name}
          />
        )}
      </div>
      <span className="pokemon-id">#{pokemon.pokedexId}</span>
    </div>
  );
};

export default Card;
