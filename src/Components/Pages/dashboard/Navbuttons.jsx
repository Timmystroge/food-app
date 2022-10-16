import React from "react";

const Navbuttons = ({ icon, linkTo, count }) => {
  return (
    <div>
      <li>
        <img src={icon} alt="" />
        <p>{linkTo}</p>
        <p>{count}</p>
      </li>
    </div>
  );
};

export default Navbuttons;
