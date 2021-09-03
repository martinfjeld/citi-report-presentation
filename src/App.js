import "./App.css";
import { Container } from "./components/container/container.component";
import { CitiDivider } from "./components/dividers/citi-divider/citi-divider.component";
import { Icon } from "./components/icon/icon.component";
import { ImageGallery } from "./components/photography/image-gallery/image-gallery.component";
import { SinglePhoto } from "./components/photography/single-photo/single-photo.component";
import { HeaderSecondary } from "./components/typography/headers/secondary-header/header-secondary.component";
import { SidewaysHeader } from "./components/typography/headers/sideways-header/sideways-header.component";
import { Paragraph } from "./components/typography/paragraphs/paragraph/paragraph.component";

import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      <Container orientation="centered">
        <Icon src="./images/icons/citi-logo.svg" />
      </Container>
      <Container orientation="centered">
        <HeaderSecondary
          centered
          text="Making Healthcare More Accessible."
          firstBreak={2}
        />
        <Paragraph columns="1" sideline icon="./images/icons/hospital.png">
          Among the many important determinants of health, transportation is
          often overlooked. Healthcare is only effective if it is accessible;
          but for millions of people, especially those with special needs or
          lower incomes, the lack of safe, affordable and reliable
          transportation options means missed doctor appointments, inconsistent
          treatments and other interruptions in care that can have
          life-threatening consequences. When I was a child, I saw this
          first-hand with my own grandmother; she had lost both legs to Type 2
          diabetes and relied on my mother to help her get to her many doctor
          appointments.
        </Paragraph>
      </Container>
      <CitiDivider />
    </div>
  );
}

export default App;
