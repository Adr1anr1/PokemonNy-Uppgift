import React from 'react';


function Pokemon(props) {
  return (
    <div className="pokemon">
      <h2 className="pokemon-name">{props.data.name}</h2>
      <img className="pokemon-image" src={props.data.sprites.front_default} alt={props.data.name} />
      <p>Height: {props.data.height}</p>
      <p>Weight: {props.data.weight}</p>
    </div>
  );
}

export default Pokemon;
