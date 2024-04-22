import React, { useState } from "react";
import Select from "react-select";
import { states, Districts, bloodGroup, bloodComponent } from "../Data/Data";
import "../DonateBlood/Camp.css";

export default function Availability() {
  const [state, setState] = useState("");
  const [District, setDistrict] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [BloodComponent, setBloodComponent] = useState("");
  const [bloodAvailability, setBloodAvailability] = useState([]);
  const [isData, setIsData] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const extractAddress = (name) => {
    const addressPart = name.split("<br/>")[1] || "";
    return addressPart.trim();
  };

  const extractContactInfo = (contactInfo, type) => {
    if (!contactInfo) return "";

    const typeIndex = contactInfo.indexOf(type);
    if (typeIndex !== -1) {
      const value = contactInfo.slice(typeIndex + type.length).trim();
      return value !== "" ? value : "Not Available";
    } else {
      return "Not Available";
    }
  };

  const extractAvailability = (availability) => {
    const match = availability ? availability.match(/A\+Ve:(\d+)/) : null;
    return match ? parseInt(match[1], 10) || 0 : 0;
  };

  const extractData = (camp) => ({
    bloodBankID: camp[0],
    name: camp[1] || "",
    category: camp[2] || "",
    address: extractAddress(camp[1]),
    phone: extractContactInfo(camp[5], "Phone:"),
    fax: extractContactInfo(camp[5], "Fax:"),
    email: extractContactInfo(camp[6], "Email:"),
    componentAvailability: {
      "A+Ve": extractAvailability(camp[8]),
    },
    lastUpdate: camp[9] || "Not Available",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const url = `https://www.eraktkosh.in//BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=${state.value}&districtCode=${District?.value - 1}&bloodGroup=${BloodGroup.value}&bloodComponent=${BloodComponent.value}&lang=lang`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status code: ${response.status}`
        );
      }

      const data = await response.json();
      console.log(data);

      if (data && data.data) {
        setIsData(false);
        const formattedData = data.data.map(extractData);
        setBloodAvailability(formattedData);
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
        <h3>Blood Stock Availability</h3>

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
          <span>Blood Group:</span>
          <Select
            onChange={(option) => setBloodGroup(option)}
            options={bloodGroup}
            placeholder="Select Blood Group"
            required
          />
        </label>

        <label>
          <span>Blood Component:</span>
          <Select
            onChange={(option) => setBloodComponent(option)}
            options={bloodComponent}
            placeholder="Select Blood Component"
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
          bloodAvailability.length > 0 && (
            <div>
              <h3 className="camp-heading">Camp Schedule</h3>
              <table className="camp-data-table">
                <thead>
                  <tr className="camp-title-row">
                    <th>Sr.No.</th>
                    <th>Blood Bank</th>
                    <th>Category</th>
                    <th>Address</th>
                    <th>Availability (A+Ve)</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  {bloodAvailability.map((camp, index) => (
                    <tr key={camp.bloodBankID} className="camp-rows">
                      <td>{index + 1}</td>
                      <td>{camp.name}</td>
                      <td>{camp.category}</td>
                      <td>{camp.address}</td>
                      <td>{camp.componentAvailability["A+Ve"]}</td>
                      <td>{camp.lastUpdate}</td>
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
