import brotherhood from "./images/brotherhood.avif";

export const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="py-4 text-4xl font-medium text-center font-grandstander">Beta Alpha</h2>
      <img src={brotherhood} className="mx-auto w-11/12 self-center rounded-[50px]" loading="lazy" />
      Pi <span>Kappa</span> Phi
      <p>
        Pi Kappa Phi was founded by exceptional men who chose to lead. For more than a century, we have stayed true to our roots, developing
        the next generation of servant leaders who put service before self and work to improve the world around them. Here at the{" "}
        <span>Beta Alpha chapter</span> we strive to uphold the values of being a Pi Kappa Phi. Recently, we have been awarded the Pi Kappa
        Phi Founders award for being the top 7 chapters nationally. We are proud to be a part of the Pi Kappa Phi family.
      </p>
      <br />
      Our Mission
      <p>
        To create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our
        communities.
      </p>
      <br />
      Our Vision
      <p>A future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him.</p>
    </section>
  );
};
