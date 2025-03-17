import React from "react";

interface PokemonCardProps {
  name: string;
  id: number;
  nickname?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, id, nickname }) => {
  return (
    <div className="bg-gray-800 text-white border-2 border-white rounded-md p-3 flex flex-col items-center shadow-md hover:scale-105 transition">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="w-20 h-20 sm:w-24 sm:h-24"
      />
      <div className="text-center">
        {nickname && (
          <h2 className="text-lg font-bold">{nickname.toUpperCase()}</h2>
        )}
        <p className="text-sm text-gray-300">({name.toUpperCase()})</p>
      </div>
    </div>
  );
};

export default PokemonCard;
