import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import MyPokemon from "../pages/mypokemon";
import CatchPokemon from "../pages/battle/catch";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/catch/:id" element={<CatchPokemon />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
