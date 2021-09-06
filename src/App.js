import "./App.css";
import { Container } from "./components/container/container.component";
import { CitiDivider } from "./components/dividers/citi-divider/citi-divider.component";
import { Icon } from "./components/icon/icon.component";
import { NavigationBar } from "./components/navigation/navigation.component";
import { ImageWithText } from "./components/story/image-with-text/image-with-text.component";
import { HeaderSecondary } from "./components/typography/headers/secondary-header/header-secondary.component";
import { ParagraphSplit } from "./components/typography/paragraphs/paragraph-split/paragraph-split.component";
import { Paragraph } from "./components/typography/paragraphs/paragraph/paragraph.component";
import { Quote } from "./components/typography/quote/quote.component";

import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      {/* <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",

          borderLeft: "10px solid var(--primary-color)",
          borderRight: "10px solid var(--primary-color)",
          zIndex: "1",
        }}
      ></div> */}
      <NavigationBar />
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
      <CitiDivider pos="top" />
      <ImageWithText
        image="./images/man-helps-woman.png"
        text="Nowadays, most hospitals and healthcare providers do offer free
or reduced-cost rides home, but those trips are often via taxis,
rideshare services or public transportation — not really viable
choices for new mothers, people undergoing cancer treatments
or someone with dementia, even before COVID-19. "
      />

      <Container orientation="full">
        <Quote
          person="Erica Plybeah"
          image="./images/erica@900x.png"
          quote="
          By dedicating its $200 million fund to making equity investments in
          minorityand women-owned companies like MedHaul, which seek to deliver
          a positive impact on society in addition to economic success, Citi is
          working to make the startup world more inclusive and equitable."
        />
        <ParagraphSplit>
          <Paragraph sideline>
            There are many other patients, such as those with disabilities, who
            may have special transportation needs even if they do not have
            special medical needs. In the U.S., we’re continuing to see delays
            in diagnoses, medical procedures and treatment, leading to further
            health risks. On top of that, COVID-19’s disproportionate and severe
            impact on people of color and lower-income communities only further
            highlighted the need to address the tremendous gap in access that
            already existed.
          </Paragraph>
          <img src="./images/black-community@900x.png" alt="img" />
          <Paragraph sideline>
            The notion that everyone deserves safe, reliable, and compassionate
            transportation, regardless of their unique needs, is why I started
            MedHaul. MedHaul connects healthcare providers with specialized
            medical transportation providers, providing patients with free,
            safe, and accountable transportation to and from their medical
            appointments. Our tech-enabled marketplace replaces outdated,
            idiosyncratic systems used by hospitals with a standardized platform
            that pairs patients with a ride that accommodates their specific
            transportation needs, such as a wheelchair, stretcher, or
            door-through-door transport. By enabling more people to keep their
            appointments and wellness visits, MedHaul is improving healthcare
            outcomes for vulnerable and underserved communities — while also
            reducing the amount of revenue lost by healthcare providers due to
            missed appointments. Specialized medical transportation providers
            also benefit from increased revenue, since we seek out and enlist
            vetted, high-quality providers to participate in MedHaul who might
            otherwise have gone overlooked.
          </Paragraph>
          <Paragraph>
            But launching a successful technology startup takes much more than
            just a good idea. Bringing MedHaul from a promising concept to an
            actual business required investment, networks and other resources
            that are not nearly as available to Black women founders —
            especially at the seed stage. According to Project Diane, the median
            seed round funding for a startup is $2.5 million, but that number
            falls to just $125,000 for Black women founders, who received just
            .06% of all venture capital investment raised from 2009 to 2018.
            Black founders don’t have the same kind of access to venture funding
            sources and networks as other founders, and many cannot rely on
            family to help raise capital. And then there’s what I call the
            “quadruple due diligence,” the many additional hoops a Black woman
            founder needs to jump through in order to meet a much tougher level
            of funder scrutiny. The obstacles to growth and scale are high, and
            they are deeply embedded in the structures that fuel the startup
            ecosystem.
          </Paragraph>
          <img
            className="icon"
            src="https://image.flaticon.com/icons/png/512/3208/3208264.png"
            alt="icon"
          />
          <Paragraph sideline>
            Investment through the Citi Impact Fund was a critical step toward
            shifting that dynamic for founders like me. By dedicating its $200
            million fund to making equity investments in minority- and
            women-owned companies like MedHaul, which seek to deliver a positive
            impact on society in addition to economic success, Citi is working
            to make the startup world more inclusive and equitable. The
            early-stage investment MedHaul received from the Impact Fund has
            been pivotal for our growth — enabling us to build the next version
            of our online platform for booking and scheduling, develop a
            marketing campaign to recruit and onboard transportation companies,
            and scale our operations so we have the capacity to grow smoothly.
          </Paragraph>
          <Paragraph>
            For MedHaul’s users, this investment will increase access, support
            the medical transportation providers, and ultimately improve
            healthcare outcomes. And through efforts like the Citi Impact Fund,
            more companies like MedHaul can access the vital funding they need
            at an early stage, enabling them to provide vulnerable communities
            with the services they deserve. As of December 2020, only 93 Black
            women in the U.S. have raised over $1 million in funding for their
            companies. I am proud to be one of those women. But this startling
            statistic shows us that we still have so much more work to do —
            especially during a time where inequities have widened and we work
            to rebuild equitable communities for all.
          </Paragraph>
        </ParagraphSplit>
      </Container>
    </div>
  );
}

export default App;
