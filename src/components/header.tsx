import React from "react";
import pokemonLogo from "../assets/pokemonLogo.png";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-[430px] fixed top-0 bg-gray-900 flex justify-center py-3 z-50">
      <img src={pokemonLogo} alt="Pokémon Logo" className="w-32 h-auto" />
    </div>
  );
};

export default Header;
