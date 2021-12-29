import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"NEW RELEASES"}
        category={"new_releases"}
        type={"knives"}
        isLargeRow
      />
    </div>
  );
}

export default App;