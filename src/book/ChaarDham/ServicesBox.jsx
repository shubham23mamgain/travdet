import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

const ServicesData = [
  {
    name: "Badrinath",
    description: "Badrinath",
    img: "https://www.chardhamtour.in/wp-content/uploads/2022/03/badrinath-temple-gallery-5.jpg",
  },
  {
    name: "Kedarnath",
    description: "Kedarnath",
    img: "https://curlytales.com/wp-content/uploads/2022/07/Also-read-Aviation-Minister-Jyotiraditya-Scindia-To-2022-07-04T175416.870.jpg",
  },
  {
    name: "Gangotri",
    description: "Gangotri",
    img: "https://www.chardhampackage.com/img/travel/gangotri-temple.jpg",
  },
  {
    name: "Yamunotri",
    description: "Yamunotri",
    img: "https://uttarakhandtriptrek.com/wp-content/uploads/2019/01/yamunotri-temple-Promark-Travels.jpg",
  },
];
const ServicesBox = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {ServicesData.map((tour, index) => {
          return (
            <div
              key={index}
              className="text-white shadow-md rounded-lg overflow-hidden relative group mt-10 "
            >
              <img
                src={tour.img}
                alt=""
                className="w-full max-w-[300px] h-[200px] rounded-lg grid grid-cols-2"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{tour.name}</h1>
                    <Fade cascade damping={0.05}>
                      {tour.description}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        Images
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

export default ServicesBox;
