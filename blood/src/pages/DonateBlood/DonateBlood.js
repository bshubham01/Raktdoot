import { useState } from "react";
import Select from "react-select";
import { states, Districts } from "../Data/Data";
import './Camp.css';

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
var day = currentDate.getDate().toString().padStart(2, "0");

var formattedDate = `${year}-${month}-${day}`;

export default function DonateBlood() {
  const [state, setState] = useState("");
  const [District, setDistrict] = useState("");
  const [Date, setDate] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [campsData, setCampsData] = useState([]);
  const [isData, setIsData] = useState(false);

  const url = `https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYCAMPS&stateCode=${state.value}&districtCode=${state.value && Districts[state.value][0]?.value-1}&campDate=${Date}&_=1707901087796`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    console.log(state.value, " ", Districts[state.value][0]?.value, " ", Date);
    console.log(url);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status code: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.data && data.data.length > 0) {
        setIsData(false);

        // Process the data and update the state
        const formattedData = data.data.map((camp) => ({
          campID: camp[0],
          date: camp[1],
          location: camp[2],
          district: camp[5],
          contact: camp[6],
          organizer: camp[7],
          coordinator: camp[8],
          registrationLink: camp[9],
          time: camp[10],
        }));

        setCampsData(formattedData);
      } else {
        setIsData(true);
      }
    } catch (error) {
      console.error(error);
    }

    setIsPending(false);
  };

  const customNoOptionsMessage = ({ inputValue }) => {
    return inputValue ? `No options` : "Select a state";
  };

  return (
    <>
      <form className="donate-blood" onSubmit={handleSubmit}>
        <h3>Find a donor centre near you</h3>

        <label>
          <span>State:</span>
          <Select
            onChange={(option) => {
              setState(option);
            }}
            options={states}
            placeholder="Select State"
            required
          />
        </label>

        <label>
          <span>District:</span>
          <Select
            onChange={(option) => setDistrict(option)}
            options={Districts[state?.value] || []}
            placeholder="Select District"
            noOptionsMessage={customNoOptionsMessage}
            required
          />
        </label>

        <label>
          <span>Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={Date}
            // min={formattedDate}
            required
          />
        </label>

        {!isPending && <button>Search</button>}
        {isPending && <button disabled>Searching</button>}
      </form>

      <div className="camp-table">
        {isData ? (
          <div className="no-data">
            <h3>There is no camp today! Try for another day</h3>
            <span>Stay Healthy, Stay Happy</span>
          </div>
        ) : (
          campsData.length > 0 && (
            <div>
              <h3 className="camp-heading">Camp Schedule</h3>
              <table className="camp-data-table">
                <thead>
                  <tr className="camp-title-row">
                    <th>Date</th>
                    <th>Location</th>
                    <th>District</th>
                    <th>Contact</th>
                    <th>Organizer</th>
                    <th>Coordinator</th>
                    <th>Registration Link</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {campsData.map((camp) => (
                    <tr key={camp.campID} className="camp-rows">
                      <td>{camp.date.substring(1, 11)}</td>
                      <td>{camp.location}</td>
                      <td>{camp.district}</td>
                      <td>{camp.contact}</td>
                      <td>{camp.organizer}</td>
                      <td>{camp.coordinator}</td>
                      <td>
                        <a
                          href={camp.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register as Voluntary Donor
                        </a>
                      </td>
                      <td>Time: {camp.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </>
  );
}
