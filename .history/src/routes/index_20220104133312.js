import Header from "../template/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/error404";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};
const router = (async = () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
});
