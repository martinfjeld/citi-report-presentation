import "./App.css";
import { Card } from "./components/elements/card/card.component";
import { NavigationBar } from "./components/navigation/navigation.component";
import { ImageStrip } from "./components/sections/image-strip/image-strip.component";
import { ImageWithText } from "./components/sections/image-with-text/image-with-text.component";
import { Overview } from "./components/sections/overview/overview.component";
import { ParagraphSection } from "./components/sections/paragraph-section/paragraph-section.component";

import { GiantHeader } from "./components/typography/headers/giant-header/giant-header.component";
import { Header } from "./components/typography/headers/header/header.component";
import { Quote } from "./components/typography/quote/quote.component";

import "./styles/style-variables.scss";

// Lag en funksjon som tar inn et object med følgende struktur:
// const obj = {
//   first: {
//     image: "https://www.image.com/thisphoto1.png",
//     paragraph: "This is the paragrah for photo 1",
//   },
//   second: {
//     image: "https://www.image.com/thisphoto2.png",
//     paragraph: "This is the paragrah for photo 2",
//   },
//   third: {
//     image: "https://www.image.com/thisphoto3.png",
//     paragraph: "This is the paragrah for photo 3",
//   },
//   fourth: {
//     image: "https://www.image.com/thisphoto4.png",
//     paragraph: "This is the paragrah for photo 4",
//   },
//   fifth: {
//     image: "https://www.image.com/thisphoto5.png",
//     paragraph: "This is the paragrah for photo 5",
//   },
// };

// Funksjonen skal deretter loope gjennom objektet og gi en unik id til hvert element.

function App() {
  return (
    <div className="App">
      <GiantHeader
        text="ESG at Citi"
        color="var(--primary-color)"
        undertext="2020 Executive Summary"
        specialDot
      />

      <NavigationBar
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1024px-Citi.svg.png"
        links={{
          home: "https://www.google.com/",
          about: "https://www.google.com/about",
          about2: "https://www.google.com/about",
        }}
      />
      <Header text="About this summary" size="medium" align="center" />
      <ParagraphSection
        heading="About this summary"
        columns="1"
        paragraph="This is an Executive Summary of our 2020 Environmental, Social and Governance Report, which covers our ESG activities and performance for the calendar year 2020. This summary and the full report highlight how we bring our mission and value proposition to life through our business. All reporting and performance data are limited to information for the owned and operated facilities of Citigroup Inc. and its subsidiaries unless stated otherwise. Additional information about Citi can be found on our website at citigroup.com."
      />
      <ImageStrip />
      <Overview>
        <Card
          toptext="Citi Impact Fund"
          maintext="Making healthcare more accessible"
          bottomtext="by Erica Plybeah"
        />
        <Card
          toptext="Citi Impact Fund"
          maintext="Sustainability Issues to Watch in 2021 and Beyond"
          bottomtext="by Erica Plybeah"
        />
        <Card
          toptext="Citi Impact Fund"
          maintext="Making healthcare more accessible"
          bottomtext="by Erica Plybeah"
        />
        <Card
          toptext="Citi Impact Fund"
          maintext="Making healthcare more accessible"
          bottomtext="by Erica Plybeah"
        />
      </Overview>

      <ImageWithText
        image="https://static01.nyt.com/images/2020/09/11/business/10CITI-print/10CITI-main-mediumSquareAt3X.jpg"
        header="Letter from Our CEO, Jane Frauser"
        headerBreak={4}
      >
        <Quote
          text="One year into the pandemic, the impacts of this global crisis are a reminder that Citi’s mission of
enabling growth and economic progress isn’t just a bunch of words on our website. It’s something
we take very seriously and bring to life through our day-to-day work in all parts of our business.
I joined Citi more than 16 years ago, and my proudest moments at the firm have been when we
have used our talent, experience and capabilities as a global bank to help solve some of society’s
toughest problems."
        />

        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
        <p>
          Nowadays, most hospitals and healthcare providers do offer free or
          reduced-cost rides home, but those trips are often via taxis,
          rideshare services or public transportation — not really viable
          choices for new mothers, people undergoing cancer treatments or
          someone with dementia, even before COVID-19.
        </p>
      </ImageWithText>

      <ParagraphSection
        columns="2"
        wordLimit="100"
        paragraph="While I was the CEO of Citi’s Latin America region, for example, we worked with Mexico’s central bank to develop a new platform that allows anyone to make and receive cashless payments for free. In a country where a little more than a third of adults have a bank account but many more have a mobile phone, Cobro Digital has since paved the way for millions of Mexicans to access affordable financial services. It has also reinforced our belief that by living our core values we generate business value. This is the kind of solution that banks like ours can forge to build a better world — and there is an increasing expectation from all our stakeholders that we do so. Our environmental, social and governance (ESG) agenda cannot just be a separate layer that sits above what we do day to day. It is embedded in what we do and creates concrete examples of the empathy I see in our firm every day as we work to serve our clients, customers and communities. With trust in public institutions at record lows, there is greater opportunity for those of us in the private sector to step up and lead. One of the most urgent issues we can help to address Letter from Our CEO, Jane Fraser is confronting climate change. We are pleased to see the U.S. rejoin the Paris Agreement, and we are committed to doing our part. In 2020, in the midst of the pandemic, we announced our 2025 Sustainable Progress Strategy. At its heart is a five-year commitment to finance and facilitate $250 billion in environmental activities. In conjunction with this ambitious climate finance goal, we’re working with our clients to evaluate their climate risks and vulnerabilities while continuing to minimize our own company’s direct impacts on the planet. Earlier this year, on my first day as CEO, we committed Citi to net zero emissions by 2050. For us, the transition to more sustainable business practices mitigates risk and can be another competitive advantage. Building on these goals, we recently took another step and committed $1 trillion to sustainable finance by 2030, aligning with the agenda of the United Nations’ Sustainable Development Goals. This "
      />
      <ImageWithText
        image="https://bettertennessee.com/wp-content/uploads/2018/09/BCBST-Erica-2-1.jpg"
        header="Making Healthcare More accessible"
        headerBreak={2}
        undertext="by Erica Plybeah"
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
        columns="2"
        wordLimit="80"
        paragraph="There are many other patients, such as those with disabilities, who may have special transportation needs even if they do not have special medical needs. In the U.S., we’re continuing to see delays in diagnoses, medical procedures and treatment, leading to further health risks. On top of that, COVID-19’s disproportionate and severe impact on people of color and lower-income communities only further highlighted the need to address the tremendous gap in access that already existed. The notion that everyone deserves safe, reliable, and compassionate transportation, regardless of their unique needs, is why I started MedHaul. MedHaul connects healthcare providers with specialized medical transportation providers, providing patients with free, safe, and accountable transportation to and from their medical appointments. Our tech-enabled marketplace replaces outdated, idiosyncratic systems used by hospitals with a standardized platform that pairs patients with a ride that accommodates their specific transportation needs, such as a wheelchair, stretcher, or door-through-door transport. By enabling more people to keep their appointments and wellness visits, MedHaul is improving healthcare outcomes for vulnerable and underserved communities — while also reducing the amount of revenue lost by healthcare providers due to missed appointments. Specialized medical transportation providers also benefit from increased revenue, since we seek out and enlist vetted, high-quality providers to participate in MedHaul who might otherwise have gone overlooked. But launching a successful technology startup takes much more than just a good idea. Bringing MedHaul from a promising concept to an actual business required investment, networks and other resources that are not nearly as available to Black women founders — especially at the seed stage. According to Project Diane, the median seed round funding for a startup is $2.5 million, but that number falls to just $125,000 for Black women founders, who received just .06% of all venture capital investment raised from 2009 to 2018. Black founders don’t have the same kind of access to venture funding sources and networks as other founders, and many cannot rely on family to help raise capital. And then there’s what I call the “quadruple due diligence,” the many additional hoops a Black woman founder needs to jump through in order to meet a much tougher level of funder scrutiny. The obstacles to growth and scale are high, and they are deeply embedded in the structures that fuel the startup ecosystem. Investment through the Citi Impact Fund was a critical step toward shifting that dynamic for founders like me. By dedicating its $200 million fund to making equity investments in minority- and women-owned companies like MedHaul, which seek to deliver a positive impact on society in addition to economic success, Citi is working to make the startup world more inclusive and equitable. The early-stage investment MedHaul received from the Impact Fund has been pivotal for our growth — enabling us to build the next version of our online platform for booking and scheduling, develop a marketing campaign to recruit and onboard transportation companies, and scale our operations so we have the capacity to grow smoothly. For MedHaul’s users, this investment will increase access, support the medical transportation providers, and ultimately improve healthcare outcomes. And through efforts like the Citi Impact Fund, more companies like MedHaul can access the vital funding they need at an early stage, enabling them to provide vulnerable communities with the services they deserve. As of December 2020, only 93 Black women in the U.S. have raised over $1 million in funding for their companies. I am proud to be one of those women. But this startling statistic shows us that we still have so much more work to do — especially during a time where inequities have widened and we work to rebuild equitable communities for all. "
      />
      <ImageWithText
        header="Sustainability Issues to Watch in 2021 and Beyond"
        headerBreak={2}
        secHeaderBreak={6}
        undertext="by Val Smith"
        image="https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F43739ead-0fc0-44cc-83a1-a3975c26c014_3000x2000.jpeg"
      >
        <Quote text="2021 will be a pivotal and consequential year for sustainability initiatives and climate change. Around the world, a broad set of stakeholders are focusing their attention on the breadth of climate-related risks and opportunities." />
      </ImageWithText>
      <ParagraphSection
        columns="3"
        wordLimit="80"
        paragraph="In the U.S., following the release of the Biden Administration’s longterm plan for greenhouse gas (GHG) reductions on Earth Day, we expect to see changes through executive and congressional action, a welcome contribution as we seek to re-join governments around the world in driving climate leadership in support of the Paris Agreement. Industries across every sector of the global economy — including banking and financial services — are working to meet their own GHG commitments and those that policy makers are setting out. This effort will require no small amount of collaboration, innovation, big thinking, and largescale partnerships between the public and private sector. In the past, I have used this space to highlight efforts that Citi has undertaken on our path to incorporate sustainability into how we do business. We are proud of the work we have done; from 2014 to 2019, we financed and facilitated $164 billion in low-carbon solutions, and last year we committed to an additional $250 billion in environmental finance by 2025. We also reached our goal of purchasing 100% renewable electricity for our facilities around the world. Earlier this year, we took another important step in our journey and committed to net zero GHG emissions by 2050. With so much focus on the broader trends and innovative approaches to sustainability, I’d like to highlight the related issues we are tracking externally. These range from specific to broad, from short term to long, but within each, there is a pivotal role that Citi can and will play in building a more sustainable future."
      />
      <ImageWithText
        image="https://d3vet8rt8i9dn0.cloudfront.net/uploads/news/2017/12/7f1ae6bd033ea02_t_w_1280_h_1024.JPG"
        header="Setting a New Standard for Affordable Housing Development"
        headerBreak={4}
        undertext="by Richard Gerwitz"
      >
        <Quote
          text="Research shows that access to
affordable housing is the most effective
way to address inter-generational
poverty, secure financial stability, and
increase economic mobility in the
United States. "
        />
      </ImageWithText>
    </div>
  );
}

export default App;
