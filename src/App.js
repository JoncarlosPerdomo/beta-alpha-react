import "./App.css";
import ecImages from "./images/ec";
import brotherhood from "./images/brotherhood.jpg";
import rushCalander from "./images/rushCalander.jpg";
import pie from "./images/pie.jpg";
// import logoName from "./images/logoName.png";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="bg-fixed">
          <img src={require("./images/blueBanner.png")} alt="BLUE-BANNER" />
        </div>
      </section>
      {/* <section className="home parralax" id="home"></section> */}

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">Beta Alpha</h2>
          <div className="about-content">
            <div className="column left">
              <img src={brotherhood} alt="star-shield" />
            </div>
            <div className="cloumn right">
              <div className="text">
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

      <section className="events" id="events">
        <div className="max-width">
          <h2 className="title">Upcoming Events</h2>
          <div className="proj-content">
            <div className="card">
              <a href="#" target="_blank">
                <div className="box">
                  <i className="bi bi-bicycle"></i>
                  <div className="text">48hr Bikethon</div>
                  <p>February 26</p>
                  <p>Brothers will ride a bike for 48hr for the Ability Experience</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#" target="_blank">
                <div className="box">
                  <i className="fa-solid fa-gamepad"></i>
                  <div className="text">Video Game Night</div>
                  <p>February 29</p>
                  <p>Come, hang, and Play</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#" target="_blank">
                <div className="box">
                  <i className="fa-solid fa-person-running"></i>
                  <div className="text">Friendship 5k</div>
                  <p>March 1</p>
                  <p>5k in central park to raise money for the Ability Experience</p>
                </div>
              </a>
            </div>
            <div className="more">
              <a href={rushCalander} target="_blank" rel="noreferrer">
                More Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="abex" id="abex">
        <div className="max-width">
          <h2 className="title"> The Ability Experience </h2>
          <div className="abex-content">
            <div className="column left">
              <div className="text"> The Ability Experience </div>
              <p>
                The Ability Experience is an independent-nonprofit dedicated to aiding the 6.5 million citizens living with disabilities
                across the United States. The Ability Experience works to create a community where the abilities of all people are equally
                recognized and valued through inclusivity challenging society language and perception of individuals with disabilities.The
                Pi Kappa Phi fraternity is honored to be able to support an organization that is dedicated to raising awareness,
                fundraising, volunteering, and promoting the message that disability does not mean inability.
              </p>
              <p>
                Here at Beta Alpha NJIT, our brothers run numerous fundraising events to support The Ability Experience nationally,
                including Bike-a-thons, Pie-a-PiKapp, and others. Additionally, we look to contribute to any and all volunteer opportunities
                in the community to give back to Newark and the surrounding areas. Finally, Pi Kapp runs events nationally with The Ability
                Experience involving biking across Florida and the entire United States.
              </p>
              <a href="https://www.abilityexperience.org/" target="_blank" rel="noreferrer">
                Ability Experience
              </a>
            </div>
            <div className="column right">
              <img src={pie} alt="abex" />
            </div>
          </div>
        </div>
      </section>

      <section className="ec" id="ec">
        <div className="max-width">
          <h2 className="title"> Executive Council</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Justin Andersen</div>
                  <img src={ecImages.justin} alt="justin" />
                  <p>
                    President
                    <br />
                    Spring 2019
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Matt Varghese</div>
                  <img src={ecImages.matt} alt="matt" />
                  <p>
                    Vice President
                    <br />
                    Fall 2019
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <div className="box">
                <a href="mailto:kp673@njit.edu" target="_blank" rel="noreferrer">
                  <div className="text">Kush Patel</div>
                  <img src={ecImages.kush} alt="kush" />
                  <p>
                    Treasurer
                    <br />
                    Fall 2019
                  </p>
                </a>
              </div>
            </div>
            <div className="card">
              <a href="mailto:td273@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Thomas Dolalas</div>
                  <img src={ecImages.thomas} alt="thomas" />
                  <p>
                    Secretary
                    <br /> Fall 2019
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:rc553@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Rob Camaano</div>
                  <img src={ecImages.rob} alt="rob" />
                  <p>
                    Warden
                    <br /> Spring 2020
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:vs283@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Vishaal Anand</div>
                  <img src={ecImages.vishaal} alt="Vishaal" />
                  <p>
                    Historian
                    <br /> Fall 2019
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:sm2665@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Shawn Mageean</div>
                  <img src={ecImages.shawn} alt="pic" />
                  <p>
                    Chaplain
                    <br /> Fall 2019
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:ds923@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">David Schiettino</div>
                  <img src={ecImages.dave} alt="dave" />
                  <p>
                    Philanthropy Chair
                    <br /> Spring 2020
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:hhs2@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Haresh Shiwcharan</div>
                  <img src={ecImages.haresh} alt="haresh" />
                  <p>
                    Risk Management Chair
                    <br /> Spring 2021
                  </p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://youtu.be/dF6SGPBFSnQ?t=27">
                <a href="mailto:jmb222@njit.edu" target="_blank" rel="noreferrer">
                  <div className="box">
                    <div className="text">Josh Blatt</div>
                    <img src={ecImages.josh} alt="josh" />
                    <p>
                      Social Chair
                      <br /> Spring 2021
                    </p>
                  </div>
                </a>
              </a>
            </div>

            <div className="card">
              <a href="mailto:ccp25@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Chris Piezas</div>
                  <img src={ecImages.chris} alt="chris" />
                  <p>
                    House Manager
                    <br /> Spring 2020
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="mailto:jjd3@njit.edu" target="_blank" rel="noreferrer">
                <div className="box">
                  <div className="text">Jake Derzsak</div>
                  <img src={ecImages.jake} alt="jake" />
                  <p>
                    Standards Borad President
                    <br /> Fall 2020
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="almni" id="alumni">
        <div className="max-width">
          <h2 className="title">Alumni</h2>
          <div className="alumni-content">
            <div className="text">Founders Day Tickets ($150)</div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <span>
          Created By <a href="#">Kush Patel</a> | <span className="far fa-copyright">2022 All rights reserved.</span>
        </span>
        <script src="jquery.min.js"></script>
        <script src="owlcarousel/owl.carousel.min.js"></script>
      </footer>
    </div>
  );
}

export default App;
