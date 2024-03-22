import React from "react";
import TourBox from "./TourBox.jsx";
import Heading from "../Heading.jsx";

const Tours = ({ tourData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading title="India" subtitle="Tours within India" />

      {/* Project section  */}
      <div>
        <TourBox tourData={tourData} />
      </div>
    </div>
  );
};

export default Tours;
