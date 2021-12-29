import logo from './logo.svg';
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
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
}

export default App;
