import ecImages from "./images/ec";

export const Ec = () => {
  return (
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
  );
};
