import ecImages from "./images/ec";

import Glider from "react-glider";
import "glider-js/glider.min.css";

export const Ec = () => {
  return (
    <section className="w-full text-white bg-neutral-900 px-14" id="ec">
      <h2 className="py-6 text-4xl font-semibold text-center font-grandstande"> Executive Council</h2>

      <Glider
        slidesToShow={1}
        duration={2}
        hasArrows
        scrollLock
        hasDots
        responsive={[
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
      >
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Justin Andersen</div>
              <img
                src={ecImages.justin}
                alt="justin"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                President
                <br />
                Spring 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div className="bg-green-400">
            <a href="mailto:mbv9@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Matt Varghese</div>
              <img
                src={ecImages.matt}
                alt="matt"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Vice President
                <br />
                Fall 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:kp673@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Kush Patel</div>
              <img
                src={ecImages.kush}
                alt="kush"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Treasurer
                <br />
                Fall 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:td273@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Thomas Dolalas</div>
              <img
                src={ecImages.thomas}
                alt="thomas"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Secretary
                <br /> Fall 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:rc553@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Rob Camaano</div>
              <img
                src={ecImages.rob}
                alt="rob"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Warden
                <br /> Spring 2020
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:vs283@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Vishaal Anand</div>
              <img
                src={ecImages.vishaal}
                alt="Vishaal"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Historian
                <br /> Fall 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:sm2665@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Shawn Mageean</div>
              <img
                src={ecImages.shawn}
                alt="pic"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Chaplain
                <br /> Fall 2019
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:ds923@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">David Schiettino</div>
              <img
                src={ecImages.dave}
                alt="dave"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Philanthropy Chair
                <br /> Spring 2020
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:hhs2@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Haresh Shiwcharan</div>
              <img
                src={ecImages.haresh}
                alt="haresh"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Risk Management Chair
                <br /> Spring 2021
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="https://youtu.be/dF6SGPBFSnQ?t=27">
              <a href="mailto:jmb222@njit.edu" target="_blank" rel="noreferrer">
                <div className="py-4 text-2xl font-semibold">Josh Blatt</div>
                <img
                  src={ecImages.josh}
                  alt="josh"
                  loading="lazy"
                  className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
                />
                <p>
                  Social Chair
                  <br /> Spring 2021
                </p>
              </a>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:ccp25@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Chris Piezas</div>
              <img
                src={ecImages.chris}
                alt="chris"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                House Manager
                <br /> Spring 2020
              </p>
            </a>
          </div>
        </div>
        <div className="mx-2 text-center rounded-lg aspect-square bg-neutral-800 ">
          <div>
            <a href="mailto:jjd3@njit.edu" target="_blank" rel="noreferrer">
              <div className="py-4 text-2xl font-semibold">Jake Derzsak</div>
              <img
                src={ecImages.jake}
                alt="jake"
                loading="lazy"
                className="relative object-cover w-40 h-40 mx-auto border-4 border-yellow-600 rounded-full"
              />
              <p>
                Standards Borad President
                <br /> Fall 2020
              </p>
            </a>
          </div>
        </div>
      </Glider>
    </section>
  );
};
