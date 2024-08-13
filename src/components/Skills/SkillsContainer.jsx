import React from "react";
import { Slide } from "react-awesome-reveal";

const SkillsContainer = ({ data }) => {
  return (
    <Slide direction="right">
      <div className="shadow-lg skill-container justify-content-center p-5 text-center d-flex align-items-center">
        <div>
          <div className="d-flex justify-content-center ">
            <img src={data.image} alt="image" />
          </div>
          <h6>{data.skill}</h6>
        </div>
      </div>
    </Slide>
  );
};

export default SkillsContainer;
