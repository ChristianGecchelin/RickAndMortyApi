const API = "https://rickandmortyapi.com/api/character/";
const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
};
export default getData;
