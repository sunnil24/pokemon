import { API_ENDPOINT_POKEMON_LIST, API_POKEMON_IMAGE } from "../constants/api";

export const loadPokemons = async () => {
  const data = await fetch(API_ENDPOINT_POKEMON_LIST);
  const pokemons = await data.json();

  return pokemons;
};

export const loadPokemonDetails = async (params) => {
  const data = await fetch(
    API_ENDPOINT_POKEMON_LIST.replace(/index/i, `pokemon/${params.id}`)
  );
  const pokemon = await data.json();

  return pokemon;
};

export const imageLoader = ({ src }) => {
  return `${API_POKEMON_IMAGE}/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
};
