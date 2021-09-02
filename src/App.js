import "./App.css";
import { CitiDivider } from "./components/dividers/citi-divider/citi-divider.component";
import { ImageGallery } from "./components/photography/image-gallery/image-gallery.component";
import { SinglePhoto } from "./components/photography/single-photo/single-photo.component";
import { HeaderPrimary } from "./components/typography/headers/primary-header/header-primary.component";
import { HeaderSecondary } from "./components/typography/headers/secondary-header/header-secondary.component";
import { SidewaysHeader } from "./components/typography/headers/sideways-header/sideways-header.component";
import { HeaderTertiary } from "./components/typography/headers/tertiary-header/header-tertiary.component";
import { Paragraph } from "./components/typography/paragraphs/paragraph/paragraph.component";

import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      <HeaderPrimary />
      <HeaderSecondary />
      <HeaderTertiary />
      <Paragraph columns="3" />
      <SidewaysHeader orientation="" />
      <ImageGallery
        galleryWidth="30"
        galleryStyle="vertical"
        images={[
          `images/stock-photo.png`,
          `images/stock-photo.png`,
          `images/stock-pdhoto.png`,
        ]}
      />
      <SinglePhoto width="30" />
      <CitiDivider />
    </div>
  );
}

export default App;
