import getData from "../utils/getData";
const Home = async () => {
  const characters = await getData();
  const view =
    /*html*/
    `
    <div class="Characters">
      ${characters.results.map(
        (character) => `
      <article class="Character-item">
        <a href="#/1/">
          <img src="image" alt="name">
          <h2>Name</h2>
        </a>
      </article>`
      )}

      
    </div>
    `;
  return view;
};
export default Home;
