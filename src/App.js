import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import FilterBar from "./components/filterbar/filterbar";
import Collection from "./components/collection/collection";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FilterBar />
      <Collection />
      <Footer />
    </div>
  );
};

export default App;
