import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PokeDetails from "../pages/PokeDetails";
import Pokedex from "../pages/Pokedex";


export function Router () {
    return (
        <BrowserRouter>

        <Routes>

        <Route index element={<Home />}/>
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/pokemon/:idDoPokemon" element={<PokeDetails/>}/>


        </Routes>

        
        </BrowserRouter>
    )
}