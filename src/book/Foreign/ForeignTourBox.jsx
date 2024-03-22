import React from "react";

const ForeignTourbox = ({ foreigntourData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {foreigntourData.map((tour, index) => {
          return (
            <div key={index} className="h-[160px] rounded-xl">
              <img
                src={tour.image}
                alt="Foreign Tour"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* details section */}
              <div className="pt-3">
                <h1 className="text-2xl font-semibold">{tour.name}</h1>
                <p className="line-clamp-2 text-gray-500">{tour.description}</p>
                <a href="" target="_blank" className="primary-btn mt-3">
                  View Images
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForeignTourbox;
