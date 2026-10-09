import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Your Student Number]</p>
        <p>Klas: 25A</p>

        <GameCard title="Minecraft" platform="PC" />
        <GameCard title="Mario Kart" platform="Nintendo Switch" />
        <GameCard title="Rocket League" platform="PlayStation 5" />
      </div>

      <Footer />
    </div>
  );
}

export default App;