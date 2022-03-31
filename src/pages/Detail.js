import React from "react";
import { useLocation } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";

const Detail = () => {
  const location = useLocation();
  const name = location.pathname.match(/\w+$/gm)[0];
  return (
    <div className=" translate-y-1/2 ">
      <PokemonDetail name={name} />
    </div>
  );
};

export default Detail;
