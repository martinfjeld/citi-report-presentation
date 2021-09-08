import "./App.css";
import { ImageWithText } from "./components/sections/image-with-text/image-with-text.component";
import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      <ImageWithText>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </ImageWithText>
    </div>
  );
}

export default App;
