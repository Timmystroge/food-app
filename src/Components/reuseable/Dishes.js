import React from "react";

const Dishes = ({img, dishname, dishdeatils}) => {
  return (
    <div className="dish">
      <div className="dishes-img-wrapper">
        <img src={img} alt="" className="dish-img" />
      </div>
      <div className="details">
        <h4>{dishname}</h4>
        <p>{dishdeatils}</p>
      </div>
    </div>
  );
};

export default Dishes;
