import rushCalander from "./images/rushCalender.jpg";
import { FaGamepad, FaRunning } from "react-icons/fa";
import { GrBike } from "react-icons/gr";

export const Events = () => {
  return (
    <section className="text-center text-white bg-stone-900 font-montserrat" id="events">
      <h2 className="py-6 text-4xl font-semibold text-center font-grandstander">Upcoming Events</h2>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex-none p-5 m-10 rounded-lg h-96 w-96 bg-neutral-800">
          <a href="#" target="_blank">
            <GrBike className="w-20 h-20 mx-auto invert" />
            <div className="text-2xl ">48hr Bikethon</div>
            <p>February 26</p>
            <p>Brothers will ride a bike for 48hr for the Ability Experience</p>
          </a>
        </div>
        <div className="flex-none p-5 m-10 rounded-lg h-96 w-96 bg-neutral-800">
          <a href="#" target="_blank">
            <FaGamepad className="w-20 h-20 mx-auto" />
            <div className="text-2xl ">Video Game Night</div>
            <p>February 29</p>
            <p>Come hang and Play</p>
          </a>
        </div>
        <div className="flex-none p-5 m-10 rounded-lg h-96 w-96 bg-neutral-800">
          <a href="#" target="_blank">
            <FaRunning className="w-20 h-20 mx-auto" />
            <div className="text-2xl ">Friendship 5k</div>
            <p>March 1</p>
            <p>5k in central park to raise money for the Ability Experience</p>
          </a>
        </div>
      </div>
      <button className="p-5 m-10 rounded-lg outline outline-4">
        <a href={rushCalander} target="_blank" rel="noreferrer">
          More Events
        </a>
      </button>
    </section>
  );
};
