import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonCard from "../components/pokemonCard";
import Navbar from "../components/navbar";
import Header from "../components/header";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen p-5 flex flex-col items-center">
        <Header />

        {/* Pokémon Grid */}
        <div className="grid grid-cols-2 gap-3 mt-16 w-full">
          {pokemons.map((pokemon, index) => (
            <Link to={`/detail/${index + 1}`} key={index}>
              <PokemonCard name={pokemon.name} id={index + 1} />
            </Link>
          ))}
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Home;
