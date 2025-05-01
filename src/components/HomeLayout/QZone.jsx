import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playGroundImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="">
        <img src={swimmingImage} alt="swimimg-image" srcset="" />
        <img src={classImage} alt="" srcset="" />
        <img src={playGroundImage} alt="" srcset="" />
      </div>
    </div>
  );
};

export default QZone;
