import { useState } from "react"; // Import the useState hook from React

const Dropdown = ({options, placeholder}) => {
    const [isOpen, setIsOpen] = useState(false); // State to manage if the dropdown is open or closed
    const [selectedOption, setSelectedOption] = useState(null); // State to manage the selected option
  
    const toggleDropdown = () => setIsOpen(!isOpen); // Function to toggle the dropdown open/closed state
  
    const handleOptionClick = (option) => {
      setSelectedOption(option); // Set the selected option
      setIsOpen(false); // Close the dropdown
    };

    return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : placeholder} {/* Display the selected option or the placeholder if no option is selected */}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span> {/* Display an arrow that rotates based on the dropdown state */}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div 
              key={index} 
              className="dropdown-item" 
              onClick={() => handleOptionClick(option)} // Handle option click
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; // Export the Dropdown component as the default export
