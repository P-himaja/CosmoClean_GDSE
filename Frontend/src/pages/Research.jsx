import { useState } from 'react';
import Select from 'react-select';
import graphA from '../images/graph1.png';
import graphB from '../images/graph2.jpg';
import graphC from '../images/graph3.png';
import analytics from '../images/analysis.png';

const options = [
  
  { value: "option1", label: "Option 1" },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

function Selectmenu() {
  const [selectedOption, setSelectedOption] = useState();
  const [graph1, setGraph1] = useState(graphA);
  const [graph2, setGraph2] = useState(graphB);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    switch (selectedOption.value) {
      case 'option1':
        setGraph1(graphA);
        setGraph2(graphB);
        break;
      case 'option2':
        setGraph1(graphB);
        setGraph2(graphC);
        break;
      // Add cases for other options if needed
      default:
        setGraph1(graphA);
        setGraph2(graphB);
        break;
    }
  };

  return (
    <div style={{ display: 'flex', gap: "4rem", alignItems: 'top', background: `linear-gradient(to left,#010314 , #1e2038)`, padding: "0rem 3rem" }}>
      <div className="parent" style={{ padding: "1rem ", display: 'flex', flexDirection: "column", alignItems: "center", gap: "3rem" }}>
        <div style={{ margin: '2rem 1rem', width: "600px" }}>
          <p style={{ color: "white",fontSize:"2rem",fontWeight:"600" }}>Choose a country</p>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            defaultValue={options[0]}
            placeholder="Select an option"
            styles={{
              placeholder: (provided) => ({
                ...provided,
                color: "white"
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white"
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: "#171825",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                width: "100%",
                boxShadow: "0 0 0 1px grey",
                '&:hover': {
                  boxShadow: "0 0 0 1px grey"
                }
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: "#171825",
              }),
              container: (provided) => ({
                ...provided,
                backgroundColor: "#171825",
                borderRadius: "5px",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? "#2a2b3a" : "#171825",
                color: state.isSelected ? "grey" : "#fff",
                padding: "0.7em",
                borderRadius: "10px",
              }),
            }}
          />
        </div>
        <div style={{ width: "500px", border: "1px solid gray", borderRadius: "2rem", display: "flex", justifyContent: "space-around", padding: "2rem" }}>
          <div className="data-text" >
            <p style={{ color: "white", fontWeight: "500", fontSize: "26px" }}>Reliable Database</p>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1em" }}>These Graphs show  the space debris contribution of each country based on data collected by NASA, and other such reputed organization</p>
          </div>
          <img src={analytics} alt="asteroid" className="analysis-image" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: "2rem", flexDirection: "column" }}>
        <div className="pic1"><img src={graph1} alt="Graph 1" style={{ width: '450px', marginRight: '10px', marginTop: "30px", borderRadius: "10px", border: "1px solid grey" }} /></div>
        <div className="pic2"><img src={graph2} alt="Graph 2" style={{ width: '450px', marginRight: '10px', borderRadius: "10px", border: "1px solid grey" }} /></div>
      </div>
      <div></div>
    </div>
  );
}

export default Selectmenu;
