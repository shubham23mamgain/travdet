import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      <Heading title="Holy Places" subtitle="Tour of Religious Places" />
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
