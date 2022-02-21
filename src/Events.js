import rushCalander from "./images/rushCalender.jpg";

export const Events = () => {
  return (
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
  );
};
