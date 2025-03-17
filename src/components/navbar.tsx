import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png";
import pokeballIcon from "../assets/pokemoniconball.png";

const Navbar: React.FC = () => {
  return (
    <div className="w-full max-w-[430px] fixed bottom-0 bg-gray-900 flex justify-around items-center py-3">
      <Link to="/" className="flex flex-col items-center">
        <img src={homeIcon} alt="Home" className="w-6 h-6" />
        <span className="text-white text-xs mt-1">HOME</span>
      </Link>

      <Link to="/mypokemon" className="flex flex-col items-center">
        <img src={pokeballIcon} alt="My Pokémon" className="w-6 h-6" />
        <span className="text-white text-xs mt-1">MY POKEMON</span>
      </Link>
    </div>
  );
};

export default Navbar;
