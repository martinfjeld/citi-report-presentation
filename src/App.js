import "./App.css";
import { HeaderPrimary } from "./components/typography/headers/primary-header/header-primary.component";
import { HeaderSecondary } from "./components/typography/headers/secondary-header/header-secondary.component";
import { HeaderTertiary } from "./components/typography/headers/tertiary-header/header-tertiary.component";
import { Paragraph } from "./components/typography/paragraphs/paragraph/paragraph.component";

import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      <HeaderPrimary />
      <HeaderSecondary />
      <HeaderTertiary />
      <Paragraph />
    </div>
  );
}

export default App;
