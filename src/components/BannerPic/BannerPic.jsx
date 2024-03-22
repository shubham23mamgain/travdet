import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div className="bg-white dark:bg-black">
      <div
        data-aos="zoom-in"
        className="h-[400px] w-full "
        style={bgImage}
      ></div>
    </div>
  );
};

export default BannerPic;
