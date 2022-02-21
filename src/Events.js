import rushCalander from "./images/rushCalender.jpg";
import { FaGamepad, FaRunning } from "react-icons/fa";
import { GrBike } from "react-icons/gr";

export const Events = () => {
  return (
    <section className="text-white bg-neutral-800" id="events">
      <h2>Upcoming Events</h2>
      <div>
        <div className="card">
          <a href="#" target="_blank">
            <GrBike className="invert" />
            <div>48hr Bikethon</div>
            <p>February 26</p>
            <p>Brothers will ride a bike for 48hr for the Ability Experience</p>
          </a>
        </div>
        <div className="card">
          <a href="#" target="_blank">
            <FaGamepad />
            <div>Video Game Night</div>
            <p>February 29</p>
            <p>Come hang and Play</p>
          </a>
        </div>
        <div className="card">
          <a href="#" target="_blank">
            <FaRunning />
            <div>Friendship 5k</div>
            <p>March 1</p>
            <p>5k in central park to raise money for the Ability Experience</p>
          </a>
        </div>
        <div className="more">
          <a href={rushCalander} target="_blank" rel="noreferrer">
            More Events
          </a>
        </div>
      </div>
    </section>
  );
};
