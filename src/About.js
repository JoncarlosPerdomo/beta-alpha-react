import brotherhood from "./images/brotherhood.jpg";

export const About = () => {
  return (
    <div className="mx-4 font-montserrat" id="about">
      <h2 className="py-4 text-4xl font-medium text-center font-grandstander">Beta Alpha</h2>
      <img src={brotherhood} className="mx-auto  self-center rounded-[50px]" loading="lazy" />
      <div className="text-2xl font-semibold">
        Pi <span className="text-blue-700">Kappa</span> Phi
      </div>
      <p>
        Pi Kappa Phi was founded by exceptional men who chose to lead. For more than a century, we have stayed true to our roots, developing
        the next generation of servant leaders who put service before self and work to improve the world around them. Here at the{" "}
        <span>Beta Alpha chapter</span> we strive to uphold the values of being a Pi Kappa Phi. Recently, we have been awarded the Pi Kappa
        Phi Founders award for being the top 7 chapters nationally. We are proud to be a part of the Pi Kappa Phi family.
      </p>
      <div className="text-2xl font-semibold">Our Mission</div>
      <p>
        To create an uncommon and lifelong brotherhood that develops leaders and encourages service to others for the betterment of our
        communities.
      </p>
      <div className="text-2xl font-semibold">Our Vision</div>
      <p>A future where every Pi Kappa Phi embraces his role as a leader, puts service before self and improves the world around him.</p>
    </div>
  );
};
