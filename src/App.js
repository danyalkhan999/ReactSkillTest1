import './App.css';
import Dropdown from './components/dropdown';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <h1>Dropdown Menu</h1>
      <Dropdown options={options} placeholder="Select an option" />
    </div>
  );
}

export default App;
