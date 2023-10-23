import "./styles.css";
import ColorGuessingGame from './ColorGuessingGame';
export default function App() {
  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <h2>Guess which hex code is the right color of the square!</h2>
      <ColorGuessingGame />
    </div>
  );
}
