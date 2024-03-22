import React from "react";
import Photo1 from "../../assets/jaipur.jpg";
import Photo2 from "../../assets/heymondo.jpg";
import Photo3 from "../../assets/taj.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Nawargarh",
    desc: "Beautiful Fort of Jaipur",
  },
  {
    id: 2,
    img: Photo2,
    title: "Helmondo",
    desc: "Beach in Malaysia",
  },
  {
    id: 3,
    img: Photo3,
    title: "Taj Mahal",
    desc: "Taj Mahal in Agra",
  },
];
const AnimatedCard = () => {
  return (
    <div className="container mx-auto pt-10 pb-10 bg-white dark:bg-gray-950">
      <h1 className="text-center text-black dark:text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Top Rated
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;
