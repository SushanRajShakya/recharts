import React from "react";

const DonutLegend = (props) => {
  const { data, setSlice, slice } = props;

  return (
    <div className="donut-legend">
      {data.map((item, index) => (
        <div className="legend-block" key={index}>
          <div
            className="legend-symbol"
            style={{ background: item.color }}
            onClick={() => {
              if (slice && slice[0].id === item.id) {
                setSlice(null);
              } else {
                setSlice([item]);
              }
            }}
          />
          <span className="legend-text">{`${item.value} ${item.label}`}</span>
        </div>
      ))}
    </div>
  );
};

export default DonutLegend;
