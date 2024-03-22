import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative ">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
              Tours Details
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              We believe in full fledged touring in and outside India.
            </h1>
          </div>
        </div>
        {/* skills section */}
        <div className="space-y-10">
          <SkillsLevel skillName="India" percentage={"43%"} />
          <SkillsLevel skillName="Singapore" percentage="12%" />
          <SkillsLevel skillName="Dubai" percentage="23%" />
          <SkillsLevel skillName="Thailand" percentage="10%" />
          <SkillsLevel skillName="Istanbul" percentage="8%" />
          <SkillsLevel skillName="Amsterdam" percentage="7%" />
          <SkillsLevel skillName="Inodesia" percentage="6%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
