import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import pokemonBg from "../../assets/pokemonBattleBg.jpg";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const CatchPokemon: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<any>(null);
  const [isCatching, setIsCatching] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleCatch = () => {
    setIsCatching(true);
    setTimeout(() => {
      const success = Math.random() < 0.5;
      setIsSuccess(success);
      setIsCatching(false);
    }, 2000);
  };

  const handleSave = () => {
    if (nickname.trim()) {
      let myPokemons = JSON.parse(localStorage.getItem("myPokemons") || "[]");
      myPokemons.push({
        id,
        name: pokemon.name,
        nickname,
      });
      localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
      navigate("/mypokemon");
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="relative w-full max-w-[430px] h-screen overflow-hidden flex flex-col">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${pokemonBg})`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10 text-center flex flex-col items-center p-5 h-full">
          <Navbar />
          <Header />

          {pokemon && (
            <>
              <h1 className="text-xl font-bold mt-3">
                A wild {pokemon.name.toUpperCase()} appears!
              </h1>
              <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="w-28 h-28 mx-auto mt-5"
              />

              {isSuccess === null ? (
                <button
                  onClick={handleCatch}
                  className="mt-auto mb-45 mx-auto w-fit bg-white text-red-600 font-bold px-6 py-2 rounded-lg border border-red-600"
                  disabled={isCatching}
                >
                  {isCatching ? "Throwing Pokéball..." : "Catch!"}
                </button>
              ) : isSuccess ? (
                <div className="mt-5">
                  <h2 className="text-lg font-bold text-green-400">
                    You caught {pokemon.name}!
                  </h2>
                  <input
                    type="text"
                    className="text-white font-bold p-2 rounded-lg mt-3 w-full"
                    placeholder="Enter nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <button
                    onClick={handleSave}
                    className="text-white bg-green-500 px-4 py-2 mt-2 rounded-lg w-full font-bold"
                  >
                    Save Pokémon
                  </button>
                </div>
              ) : (
                <div className="mt-85">
                  <h2 className="text-lg font-bold text-red-600">
                    The Pokémon escaped!
                  </h2>
                  <button
                    onClick={() => navigate(`/detail/${id}`)}
                    className="bg-white px-4 py-2 mt-2 bg-white text-red-600 font-bold px-6 py-2 rounded-lg border border-red-600"
                  >
                    Go Back
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatchPokemon;
