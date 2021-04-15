import React from "react";

const DonutDetails = (props) => {
  const { label, description } = props;

  return (
    <div className="donut-details">
      <div className="wrapper">
        <span>{label}</span>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default DonutDetails;
