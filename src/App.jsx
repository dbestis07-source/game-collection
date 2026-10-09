import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Your Student Number]</p>
        <p>Klas: 25A</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;