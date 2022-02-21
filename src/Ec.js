import ecImages from "./images/ec";

import Glider from "react-glider";
import "glider-js/glider.min.css";

export const Ec = () => {
  return (
    <section className="text-white bg-neutral-800" id="ec">
      <h2 className="title"> Executive Council</h2>

      <Glider draggable hasArrows hasDots slidesToShow={2} slidesToScroll={1}>
        <div>
          <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
            <div>Justin Andersen</div>
            <img src={ecImages.justin} alt="justin" loading="lazy" />
            <p>
              President
              <br />
              Spring 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
            <div>Matt Varghese</div>
            <img src={ecImages.matt} alt="matt" loading="lazy" />
            <p>
              Vice President
              <br />
              Fall 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:kp673@njit.edu" target="_blank" rel="noreferrer">
            <div>Kush Patel</div>
            <img src={ecImages.kush} alt="kush" loading="lazy" />
            <p>
              Treasurer
              <br />
              Fall 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:td273@njit.edu" target="_blank" rel="noreferrer">
            <div>Thomas Dolalas</div>
            <img src={ecImages.thomas} alt="thomas" loading="lazy" />
            <p>
              Secretary
              <br /> Fall 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:rc553@njit.edu" target="_blank" rel="noreferrer">
            <div>Rob Camaano</div>
            <img src={ecImages.rob} alt="rob" loading="lazy" />
            <p>
              Warden
              <br /> Spring 2020
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:vs283@njit.edu" target="_blank" rel="noreferrer">
            <div>Vishaal Anand</div>
            <img src={ecImages.vishaal} alt="Vishaal" loading="lazy" />
            <p>
              Historian
              <br /> Fall 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:sm2665@njit.edu" target="_blank" rel="noreferrer">
            <div>Shawn Mageean</div>
            <img src={ecImages.shawn} alt="pic" loading="lazy" />
            <p>
              Chaplain
              <br /> Fall 2019
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:ds923@njit.edu" target="_blank" rel="noreferrer">
            <div>David Schiettino</div>
            <img src={ecImages.dave} alt="dave" loading="lazy" />
            <p>
              Philanthropy Chair
              <br /> Spring 2020
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:hhs2@njit.edu" target="_blank" rel="noreferrer">
            <div>Haresh Shiwcharan</div>
            <img src={ecImages.haresh} alt="haresh" loading="lazy" />
            <p>
              Risk Management Chair
              <br /> Spring 2021
            </p>
          </a>
        </div>

        <div>
          <a href="https://youtu.be/dF6SGPBFSnQ?t=27">
            <a href="mailto:jmb222@njit.edu" target="_blank" rel="noreferrer">
              <div>Josh Blatt</div>
              <img src={ecImages.josh} alt="josh" loading="lazy" />
              <p>
                Social Chair
                <br /> Spring 2021
              </p>
            </a>
          </a>
        </div>

        <div>
          <a href="mailto:ccp25@njit.edu" target="_blank" rel="noreferrer">
            <div>Chris Piezas</div>
            <img src={ecImages.chris} alt="chris" loading="lazy" />
            <p>
              House Manager
              <br /> Spring 2020
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:jjd3@njit.edu" target="_blank" rel="noreferrer">
            <div>Jake Derzsak</div>
            <img src={ecImages.jake} alt="jake" loading="lazy" />
            <p>
              Standards Borad President
              <br /> Fall 2020
            </p>
          </a>
        </div>
      </Glider>
    </section>
  );
};
