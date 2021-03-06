import "./App.css";
// import logoName from "./images/logoName.png";
import NavBar from "./NavBar";
import { About } from "./About";
import { Alumni } from "./Alumni";
import { Ec } from "./Ec";
import { Events } from "./Events";
import { Abex } from "./Abex";

function App() {
  return (
    <div>
      <NavBar />
      <div className="w-full pt-16" id="home">
        <img src={require("./images/blueBanner.jpg")} alt="BLUE-BANNER" />
      </div>
      {/* <section className="home parralax" id="home"></section> */}

      <About />

      <Events />

      <Abex />

      <Ec />

      <Alumni />

      <footer id="footer" className="text-white bg-neutral-900">
        <span>
          Created By <a href="#">Joncarlos Perdomo & Kush Patel</a> | <span className="far fa-copyright">2022 All rights reserved.</span>
        </span>
      </footer>
    </div>
  );
}

export default App;
