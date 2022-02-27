// import ecImages from "./images/ec";

import Glider from "react-glider";
import "glider-js/glider.min.css";

export const Ec = () => {
  return (
    <section className="text-white bg-neutral-800 px-14" id="ec">
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
        <div className="relative w-1/2 mx-4 text-center bg-green-400">1</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">2</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">3</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">4</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">5</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">6</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">7</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">8</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">9</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">10</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">11</div>
        <div className="relative w-1/2 mx-4 text-center bg-green-400">12</div>
      </Glider>
    </section>
  );
};
