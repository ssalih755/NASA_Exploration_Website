import React, { useState } from "react";
import "./NeoItem.css";

export default function NeoItem({ data }) {
  // Track which dates are expanded
  const [expandedDates, setExpandedDates] = useState({});
  
  if (!data || !data.near_earth_objects) {
    return <p>No data available.</p>;
  }

  const neoData = data.near_earth_objects;

  const toggleDate = (date) => {
    setExpandedDates((prev) => ({
      ...prev,
      [date]: !prev[date], // toggle
    }));
  };

  return (
    <div className="neo-item-container">
      {Object.entries(neoData)
        .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
        .map(([date, neObjects]) => (
          <div key={date} className="neo-date-section">
            <h2
              className="neo-date"
              onClick={() => toggleDate(date)}
              style={{ cursor: "pointer" }}
            >
              Neo Approach Date: {date} {expandedDates[date] ? "▲" : "▼"}
            </h2>

            {expandedDates[date] && (
              <ul className="neo-list">
                {neObjects.map((neo) => {
                  const diameterMin =
                    neo.estimated_diameter.miles.estimated_diameter_min.toFixed(
                      3
                    );
                  const diameterMax =
                    neo.estimated_diameter.miles.estimated_diameter_max.toFixed(
                      3
                    );

                  return (
                    <li key={neo.id} className="neo-card">
                      <h3 className="neo-name">{neo.name}</h3>
                      <p className="neo-id">ID: {neo.id}</p>
                      <p>
                        <strong>Hazardous:</strong>{" "}
                        {neo.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                      </p>
                      <p>
                        <strong>Estimated Diameter (miles):</strong>{" "}
                        {diameterMin} - {diameterMax}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}
