import React from "react";
import Heading from "../Heading.jsx";
import ForeignTourbox from "./ForeignTourBox.jsx";

const ForeignTour = ({ foreigntourData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading title="India" subtitle="Tours within India" />

      {/* Project section  */}
      <div>
        <ForeignTourbox foreigntourData={foreigntourData} />
      </div>
    </div>
  );
};

export default ForeignTour;
