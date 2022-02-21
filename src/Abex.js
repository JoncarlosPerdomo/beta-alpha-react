import pie from "./images/pie.avif";

export const Abex = () => {
  return (
    <section className="abex" id="abex">
      <div className="max-width">
        <h2 className="title"> The Ability Experience </h2>
        <div className="abex-content">
          <div className="column left">
            <div className="text"> The Ability Experience </div>
            <p>
              The Ability Experience is an independent-nonprofit dedicated to aiding the 6.5 million citizens living with disabilities
              across the United States. The Ability Experience works to create a community where the abilities of all people are equally
              recognized and valued through inclusivity challenging society language and perception of individuals with disabilities.The Pi
              Kappa Phi fraternity is honored to be able to support an organization that is dedicated to raising awareness, fundraising,
              volunteering, and promoting the message that disability does not mean inability.
            </p>
            <p>
              Here at Beta Alpha NJIT, our brothers run numerous fundraising events to support The Ability Experience nationally, including
              Bike-a-thons, Pie-a-PiKapp, and others. Additionally, we look to contribute to any and all volunteer opportunities in the
              community to give back to Newark and the surrounding areas. Finally, Pi Kapp runs events nationally with The Ability
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
  );
};
