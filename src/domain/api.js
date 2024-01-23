import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export const callAPI = async (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {}
) => {
  const options = {
    url: baseUrl + endpoint,
    method,
    headers,
    params,
    data,
  };

  return axios(options).then((response) => {
    const responseAPI = response?.data;
    return responseAPI;
  });
};

export const fetchPokemon = () => callAPI("ditto", "GET");
