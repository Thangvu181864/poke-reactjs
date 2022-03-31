import React from "react";
import { Link } from "react-router-dom";
const Pokemon = (props) => {
  const { id, name, image, types } = props;
  return (
    <Link to={`/detail/${name}`}>
      <div
        className={`${types[0].type.name} flex flex-col items-center justify-center px-6 py-1 m-1 border rounded-sm min-w-[160px] text-center`}
      >
        <p>#{id}</p>
        <img className="w-[120px] h-[120px]" src={image} alt={name} />
        <div className="flex flex-col w-full">
          <h3>{name}</h3>
          <small>
            {types.map((type) => {
              return (
                <span
                  className="p-1"
                  key={type.slot}
                >{`${type.type.name}`}</span>
              );
            })}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
