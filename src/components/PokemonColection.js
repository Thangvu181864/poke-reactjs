import React from "react";
import Pokemon from "./Pokemon";

const PokemonColection = (props) => {
  const { pokemons } = props;

  return (
    <div className="flex my-8 font-semibold justify-center items-center flex-wrap">
      {pokemons
        .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
        .map((pokemon) => {
          return (
            <div className="cursor-pointer" key={pokemon.id}>
              <Pokemon
                id={pokemon.id}
                image={pokemon.sprites.other.dream_world.front_default}
                name={pokemon.name}
                types={pokemon.types}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PokemonColection;
