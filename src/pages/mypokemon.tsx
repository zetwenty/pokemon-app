import React, { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";
import Navbar from "../components/navbar";
import Header from "../components/header";

const MyPokemon: React.FC = () => {
  const [myPokemons, setMyPokemons] = useState<any[]>([]);

  useEffect(() => {
    const storedPokemons = JSON.parse(
      localStorage.getItem("myPokemons") || "[]"
    );
    setMyPokemons(storedPokemons);
  }, []);

  const handleRelease = (index: number) => {
    const updatedPokemons = [...myPokemons];
    updatedPokemons.splice(index, 1);
    setMyPokemons(updatedPokemons);
    localStorage.setItem("myPokemons", JSON.stringify(updatedPokemons));
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h1 className="text-white text-2xl font-bold mb-5 mt-14">My Pokémon</h1>
      <Header />

      <div className="grid grid-cols-2 gap-4 mt-5">
        {myPokemons.length > 0 ? (
          myPokemons.map((pokemon, index) => (
            <div key={index} className="relative">
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                nickname={pokemon.nickname}
              />

              <button
                onClick={() => handleRelease(index)}
                className="absolute top-2 right-2 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
              >
                ✖
              </button>
            </div>
          ))
        ) : (
          <p className="text-white text-lg">No Pokémon caught yet.</p>
        )}
      </div>

      <Navbar />
    </div>
  );
};

export default MyPokemon;
