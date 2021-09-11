import "./App.css";
import { NavigationBar } from "./components/navigation/navigation.component";
import { ImageWithText } from "./components/sections/image-with-text/image-with-text.component";
import { ParagraphSection } from "./components/sections/paragraph-section/paragraph-section.component";
import { Quote } from "./components/typography/quote/quote.component";

import "./styles/style-variables.scss";

function App() {
  return (
    <div className="App">
      <ParagraphSection
        columns="2"
        wordLimit="100"
        paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of LoremContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of LoremContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
      />
      <ImageWithText
        divider
        image="https://media.bizj.us/view/img/11831651/tnsu-starboardport-portrait-006*1200xx1710-964-0-176.jpg"
        header="Making Healthcare More accessible"
        author="by Sarah Plybeah"
      >
        <Quote
          text="By dedicating its $200 million fund to making equity investments in
          minority and women-owned companies like MedHaul, which seek to deliver
          a positive impact on society in addition to economic success, Citi is
          working to make the startup world more inclusive and equitable."
        />
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
      </ImageWithText>
      <ParagraphSection
        columns="3"
        wordLimit="80"
        paragraph="There are many other patients, such as those with disabilities, who may have special transportation needs even if they do not have special medical needs. In the U.S., we’re continuing to see delays in diagnoses, medical procedures and treatment, leading to further health risks. On top of that, COVID-19’s disproportionate and severe impact on people of color and lower-income communities only further highlighted the need to address the tremendous gap in access that already existed. The notion that everyone deserves safe, reliable, and compassionate transportation, regardless of their unique needs, is why I started MedHaul. MedHaul connects healthcare providers with specialized medical transportation providers, providing patients with free, safe, and accountable transportation to and from their medical appointments. Our tech-enabled marketplace replaces outdated, idiosyncratic systems used by hospitals with a standardized platform that pairs patients with a ride that accommodates their specific transportation needs, such as a wheelchair, stretcher, or door-through-door transport. By enabling more people to keep their appointments and wellness visits, MedHaul is improving healthcare outcomes for vulnerable and underserved communities — while also reducing the amount of revenue lost by healthcare providers due to missed appointments. Specialized medical transportation providers also benefit from increased revenue, since we seek out and enlist vetted, high-quality providers to participate in MedHaul who might otherwise have gone overlooked. But launching a successful technology startup takes much more than just a good idea. Bringing MedHaul from a promising concept to an actual business required investment, networks and other resources that are not nearly as available to Black women founders — especially at the seed stage. According to Project Diane, the median seed round funding for a startup is $2.5 million, but that number falls to just $125,000 for Black women founders, who received just .06% of all venture capital investment raised from 2009 to 2018. Black founders don’t have the same kind of access to venture funding sources and networks as other founders, and many cannot rely on family to help raise capital. And then there’s what I call the “quadruple due diligence,” the many additional hoops a Black woman founder needs to jump through in order to meet a much tougher level of funder scrutiny. The obstacles to growth and scale are high, and they are deeply embedded in the structures that fuel the startup ecosystem. Investment through the Citi Impact Fund was a critical step toward shifting that dynamic for founders like me. By dedicating its $200 million fund to making equity investments in minority- and women-owned companies like MedHaul, which seek to deliver a positive impact on society in addition to economic success, Citi is working to make the startup world more inclusive and equitable. The early-stage investment MedHaul received from the Impact Fund has been pivotal for our growth — enabling us to build the next version of our online platform for booking and scheduling, develop a marketing campaign to recruit and onboard transportation companies, and scale our operations so we have the capacity to grow smoothly. For MedHaul’s users, this investment will increase access, support the medical transportation providers, and ultimately improve healthcare outcomes. And through efforts like the Citi Impact Fund, more companies like MedHaul can access the vital funding they need at an early stage, enabling them to provide vulnerable communities with the services they deserve. As of December 2020, only 93 Black women in the U.S. have raised over $1 million in funding for their companies. I am proud to be one of those women. But this startling statistic shows us that we still have so much more work to do — especially during a time where inequities have widened and we work to rebuild equitable communities for all. "
      />
      <ImageWithText
        divider
        image="https://investorplace.com/wp-content/uploads/2019/07/solar1600b.jpg"
      >
        <Quote
          text="By dedicating its $200 million fund to making equity investments in
          minority and women-owned companies like MedHaul, which seek to deliver
          a positive impact on society in addition to economic success, Citi is
          working to make the startup world more inclusive and equitable."
        />
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
      </ImageWithText>

      <NavigationBar
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1024px-Citi.svg.png"
        links={{
          home: "https://www.google.com/",
          about: "https://www.google.com/about",
          about2: "https://www.google.com/about",
        }}
      />
    </div>
  );
}

export default App;
