import { useState } from "react";
import "./NearEarthObjectsView.css";
import NeoService from "../../services/NeoService";
import NeoItem from "../../components/NearEarthObjects/NeoItem";

export default function NearEarthObjectsView() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [NEOs, setNEOs] = useState([]);

  function getNEOs() {
    NeoService.getNearEarthObjects(startDate, endDate)
      .then((response) => {
        setNEOs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching NEO data:", error);
      });
  }

  return (
    <div className="container neo-container">
      <h1>Near Earth Objects</h1>
      <p>
        Start and end dates are optional — today is used if no start date is entered, and the end date defaults to 7 days later
      </p>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={getNEOs}>Get NEOs</button>

      <div className="neo-results">
        {NEOs && NEOs.near_earth_objects && <NeoItem data={NEOs} />}
      </div>
    </div>
  );
}
