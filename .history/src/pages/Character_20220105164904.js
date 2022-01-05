import getHash from "../utils/getHash";
import getData from "../utils/getData";
const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = /*html*/ `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Character-card">
            <h3>Episodes:</h3>
            <h3>Status:</h3>
            <h3>Species:</h3>
            <h3>Gender:</h3>
            <h3>Origin:</h3>
            <h3>Last location:</h3>
        </article>
    </div>
    `;
  return view;
};
export default Character;
