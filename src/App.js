import './App.css'; // Import the CSS file for styling
import Dropdown from './components/dropdown'; // Import the Dropdown component

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3']; // Define the options for the dropdown menu

  return (
    <div className="App">
      <h1>Dropdown Menu</h1> {/* Header for the dropdown menu */}
      <Dropdown options={options} placeholder="Select an option" /> {/* Dropdown component with options and placeholder */}
    </div>
  );
}

export default App; // Export the App component as the default export

