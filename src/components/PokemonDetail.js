import React, { useState, useEffect } from "react";
import axios from "axios";
const PokemonDetail = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const { name } = props;
  const getPokemonDetail = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemonDetail(res.data);
  };
  useEffect(() => {
    getPokemonDetail();
  }, []);
  return (
    <div className="w-80 h-[440px] shadow-md flex flex-col items-center relative">
      <div className="absolute top-0 -translate-y-1/2 w-32 h-32">
        <img
          className="w-full h-full object-cover"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
            pokemonDetail.id < 10
              ? `00${pokemonDetail.id}`
              : pokemonDetail.id < 100
              ? `0${pokemonDetail.id}`
              : pokemonDetail.id
          }.png`}
        />
      </div>
      <div className="mt-14 text-center">
        <h3 className=" font-extrabold text-3xl">{pokemonDetail.name}</h3>
        <div>
          {pokemonDetail.types?.map((type) => {
            return (
              <small key={type.slot} className="p-1">
                {type.type.name}
              </small>
            );
          })}
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <span>HEIGHT</span>
            <span>{pokemonDetail.height}</span>
          </div>
          <div className="flex flex-col">
            <span>WEIGTH</span>
            <span>{pokemonDetail.weight}</span>
          </div>
        </div>
        <div className="mt-2">
          <h1>ABILITIES</h1>

          <h4>
            {pokemonDetail.abilities?.map((ability) => {
              return (
                <span className="pl-1" key={ability.slot}>
                  {ability.ability.name}
                </span>
              );
            })}
          </h4>
        </div>
        <div className="flex flex-wrap justify-center">
          {pokemonDetail.stats?.map((stat) => {
            return (
              <div className="flex flex-row p-3 justify-center m-2 shadow-xl">
                <h1 className="pr-1">{`${stat.stat.name.toUpperCase()}:`}</h1>
                <span>{stat.base_stat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
