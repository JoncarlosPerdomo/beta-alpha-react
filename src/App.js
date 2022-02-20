import "./App.css";
import logoName from "./images/logoName.png";
function App() {
  return (
    <div>
      {/* navbar section */}
      <nav className="fixed w-full px-0 py-10 bg-yellow-500">
        <div className="flex justify-between mx-20 center">
          <div className="mr-250">
            <a className="text-white" href="#">
              <img src={logoName} alt="logo" height={50} width={200} />
            </a>
          </div>
          <ul className="text-white ">
            <li className="inline-block list-none">
              <a href="#home" className="block ml-[25px]">
                Home
              </a>
            </li>
            <li className="inline-block list-none">
              <a href="#about" className="block ml-[25px]">
                About
              </a>
            </li>
            <li className="inline-block list-none">
              <a href="#events" className="block ml-[25px]">
                Events
              </a>
            </li>
            <li className="inline-block list-none">
              <a href="#abex" className="block ml-[25px]">
                Abex
              </a>
            </li>
            <li className="inline-block list-none">
              <a href="#ec" className="block ml-[25px]">
                Exec
              </a>
            </li>
            <li className="inline-block list-none">
              <a href="#alumni" className="block ml-[25px]">
                Alumni
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section>
        <div className="bg-fixed">
          <img src={require("./blueBanner.png")} alt="BLUE-BANNER" />
          <p>HERE</p>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div>
          <h2>Beta Alpha</h2>
          <div>
            <div>
              <img src="images/brotherhood.js" alt="star-shield" />
            </div>
            <div>
              <div>
                Pi <span>Kappa</span> Phi
              </div>
              <p>
                Pi Kappa Phi was founded by exceptional men who chose to lead. For more than a century, we have stayed true to our roots,
                developing the next generation of servant leaders who put service before self and work to improve the world around them.
                Here at the <span>Beta Alpha chapter</span> we strive to uphold the values of being a Pi Kappa Phi. Recently, we have been
                awarded the Pi Kappa Phi Founders award for being the top 7 chapters nationally. We are proud to be a part of the Pi Kappa
                Phi family.
              </p>
              <br />
              <div className="text">Our Mission</div>
              <p>
                To create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of
                our communities.
              </p>
              <br />
              <div className="text">Our Vision</div>
              <p>
                A future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section>
        <div>
          <h2>Upcoming Events</h2>
          <div>
            <div>
              <a href="#">
                <div>
                  <i></i>
                  <div>48hr Bikethon</div>
                  <p>February 26</p>
                  <p>Brothers will ride a bike for 48hr for the Ability Experience</p>
                </div>
              </a>

              <div>
                <a href="#">
                  <div>
                    <i></i>
                    <div>Video Game Night</div>
                    <p>February 29</p>
                    <p>Come, hang, and Play</p>
                  </div>
                </a>
              </div>

              <div>
                <a href="#">
                  <div>
                    <i></i>
                    <div>Friendship 5k</div>
                    <p>March 1</p>
                    <p>5k in central park to raise money for the Ability Experience</p>
                  </div>
                </a>
              </div>

              <div>
                <a href="images/rush-calender.jpg">More Events</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
