import pie from "./images/pie.jpg";

export const Abex = () => {
  return (
    <section className="mx-4 font-montserrat" id="abex">
      <h2 className="py-4 text-4xl font-medium text-center font-grandstander"> The Ability Experience </h2>
      <div className="column right">
        <img src={pie} alt="abex" className="mx-auto w-11/12 self-center rounded-[50px]" loading="lazy" />
      </div>
      <div className="text-2xl font-semibold"> The Ability Experience </div>
      <p>
        The Ability Experience is an independent-nonprofit dedicated to aiding the 6.5 million citizens living with disabilities across the
        United States. The Ability Experience works to create a community where the abilities of all people are equally recognized and
        valued through inclusivity challenging society language and perception of individuals with disabilities.The Pi Kappa Phi fraternity
        is honored to be able to support an organization that is dedicated to raising awareness, fundraising, volunteering, and promoting
        the message that disability does not mean inability.
      </p>
      <p>
        Here at Beta Alpha NJIT, our brothers run numerous fundraising events to support The Ability Experience nationally, including
        Bike-a-thons, Pie-a-PiKapp, and others. Additionally, we look to contribute to any and all volunteer opportunities in the community
        to give back to Newark and the surrounding areas. Finally, Pi Kapp runs events nationally with The Ability Experience involving
        biking across Florida and the entire United States.
      </p>

      <div className="flex justify-center">
        <button className="py-3 text-xl font-medium text-white bg-blue-800 rounded-lg px-7">
          <a href="https://www.abilityexperience.org/" target="_blank" rel="noreferrer">
            Ability Experience
          </a>
        </button>
      </div>
    </section>
  );
};
