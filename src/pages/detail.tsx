import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Header from "../components/header";

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="bg-black min-h-screen text-white flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen p-5 flex flex-col items-center">
        {/* Navbar */}
        <Navbar />
        <Header />

        {pokemon && (
          <div className="bg-gray-900 border-2 border-white p-5 rounded-lg text-center w-full mt-16">
            {/* Gambar Pokémon */}
            <img
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto"
            />

            {/* Nama & Jenis Pokémon */}
            <h1 className="text-3xl font-bold mt-3">
              {pokemon.name.toUpperCase()}
            </h1>
            <p className="text-gray-300 text-sm mt-1">
              Type: {pokemon.types.map((t: any) => t.type.name).join(", ")}
            </p>

            {/* Stats Pokémon */}
            <div className="mt-4 text-left">
              {pokemon.stats.map((stat: any) => (
                <div key={stat.stat.name} className="flex justify-between">
                  <span className="text-gray-400">
                    {stat.stat.name.toUpperCase()}
                  </span>
                  <span className="font-bold">{stat.base_stat}</span>
                </div>
              ))}
            </div>

            {/* Moves Pokémon */}
            <h2 className="text-xl font-semibold mt-4">Moves:</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {pokemon.moves.slice(0, 4).map((move: any) => (
                <span
                  key={move.move.name}
                  className="bg-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  {move.move.name}
                </span>
              ))}
            </div>

            {/* Tombol Catch */}
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-4 rounded-lg font-semibold"
              onClick={() => navigate(`/catch/${id}`)}
            >
              Catch!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
