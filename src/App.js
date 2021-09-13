import "./App.css";
import { NavigationBar } from "./components/navigation/navigation.component";
import { GiantHeader } from "./components/typography/headers/giant-header/giant-header.component";
import { ParagraphSection } from "./components/sections/paragraph-section/paragraph-section.component";

import { Story } from "./components/sections/story/story.component";
import { Quote } from "./components/typography/quote/quote.component";
import { Header } from "./components/typography/headers/header/header.component";
import { ImageWithText } from "./components/sections/image-with-text/image-with-text.component";
import "./styles/style-variables.scss";
import { Arena } from "./components/sections/arena/arena.component";
import { FiftyFifty } from "./components/sections/fifty-fifty/fifty-fifty.component";
import { Achivement } from "./components/elements/achivement/achivement.component";
import { CitiDivider } from "./components/dividers/citi-divider/citi-divider.component";

function App() {
  return (
    <div className="App">
      <NavigationBar
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/2560px-Citi.svg.png"
        links={{
          home: "https://www.google.com/",
          about: "https://www.google.com/about",
          about2: "https://www.google.com/about",
        }}
      />

      <GiantHeader
        color="white"
        background="primary"
        specialDot
        text="ESG at Citi"
        undertext="2020 Excutive Summary"
      />

      <FiftyFifty>
        <Arena width="70" align="">
          <Header size="large" text="About this summary" />
          <p>
            This is an Executive Summary of our 2020 Environmental, Social and
            Governance Report, which covers our ESG activities and performance
            for the calendar year 2020. This summary and the full report
            highlight how we bring our mission and value proposition to life
            through our business. All reporting and performance data are limited
            to information for the owned and operated facilities of Citigroup
            Inc. and its subsidiaries unless stated otherwise. Additional
            information about Citi can be found on our website.
          </p>
        </Arena>

        <img
          src="https://cdn9.dissolve.com/p/D145_230_797/D145_230_797_1200.jpg"
          alt=""
        />
      </FiftyFifty>
      <ImageWithText
        header="Letter from our CEO"
        undertext="written by Jane Fraser"
        image="https://static01.nyt.com/images/2020/09/11/business/10CITI-print/10CITI-main-mediumSquareAt3X.jpg"
      >
        <Quote
          text="One year into the pandemic, the impacts of this global crisis are a reminder that Citi’s mission of
enabling growth and economic progress isn’t just a bunch of words on our website. It’s something
we take very seriously and bring to life through our day-to-day work in all parts of our business.
I joined Citi more than 16 years ago, and my proudest moments at the firm have been when we
have used our talent, experience and capabilities as a global bank to help solve some of society’s
toughest problems."
        />
      </ImageWithText>
      <FiftyFifty>
        <img
          src="https://image.flaticon.com/icons/png/512/3616/3616595.png"
          className="icon"
          alt=""
        />
        <Arena width="70" align="">
          <p>
            While I was the CEO of Citi’s Latin America region, for example, we
            worked with Mexico’s central bank to develop a new platform that
            allows anyone to make and receive cashless payments for free. In a
            country where a little more than a third of adults have a bank
            account but many more have a mobile phone, Cobro Digital has since
            paved the way for millions of Mexicans to access affordable
            financial services. It has also reinforced our belief that by living
            our core values we generate business value. This is the kind of
            solution that banks like ours can forge to build a better world —
            and there is an increasing expectation from all our stakeholders
            that we do so. Our environmental, social and governance (ESG) agenda
            cannot just be a separate layer that sits above what we do day to
            day. It is embedded in what we do and creates concrete examples of
            the empathy I see in our firm every day as we work to serve our
            clients, customers and communities.
          </p>
        </Arena>
      </FiftyFifty>
      <ParagraphSection
        columns={2}
        paragraph="With trust in public institutions at record lows, there is greater opportunity for those of us in the private sector to step up and lead. One of the most urgent issues we can help to address Letter from Our CEO, Jane Fraser is confronting climate change. We are pleased to see the U.S. rejoin the Paris Agreement, and we are committed to doing our part. In 2020, in the midst of the pandemic, we announced our 2025 Sustainable Progress Strategy. At its heart is a five-year commitment to finance and facilitate $250 billion in environmental activities. In conjunction with this ambitious climate finance goal, we’re working with our clients to evaluate their climate risks and vulnerabilities while continuing to minimize our own company’s direct impacts on the planet. Earlier this year, on my first day as CEO, we committed Citi to net zero emissions by 2050. For us, the transition to more sustainable business practices mitigates risk and can be another competitive advantage. Building on these goals, we recently took another step and committed $1 trillion to sustainable finance by 2030, aligning with the agenda of the United Nations’ Sustainable Development Goals. This commitment includes extending our environmental finance target from $250 billion by 2025 to $500 billion by 2030, as well as an additional $500 billion for investments in other important areas such as education, affordable housing, health care, economic inclusion, racial diversity and gender equality. It’s a significant effort that expands on our many initiatives to help ensure a more sustainable and equitable future, especially as we continue to tackle challenges posed by COVID-19. As one example, last year we were selected by Gavi, the Global Vaccine Alliance, as sole financial advisor to the COVAX Facility to support the fair and equitable distribution of vaccines worldwide."
      />
      <FiftyFifty>
        <Arena width="70" align="">
          <p>
            The global pandemic has also laid bare the systemic inequities that
            have impeded communities from reaching their full potential, and we
            cannot ignore the role our own industry has played in contributing
            to these disparities. In the aftermath of George Floyd’s murder in
            Minneapolis, as calls for racial justice intensified across the
            U.S., we launched Action for Racial Equity, more than $1 billion in
            strategic initiatives to help close the racial wealth gap and
            increase economic mobility. It’s an investment that promises to pay
            tremendous dividends: recent research by Citi found that if key
            racial gaps for Black Americans had been closed 20 years ago, U.S.
            GDP could have increased by an estimated $16 trillion. We are
            already making meaningful progress — including investments in
            Minority Depository Institutions to strengthen community banking,
            investments in minority-owned housing developers to build affordable
            housing, and a partnership with the National Urban League to expand
            access to Citibank’s no-fee banking accounts. Action for Racial
            Equity builds on Citi’s ongoing efforts to support those who are
            creating solutions to the social and environmental challenges facing
            communities.
          </p>
        </Arena>
        <img
          src="https://image.flaticon.com/icons/png/512/5412/5412195.png"
          className="icon"
          alt=""
        />
      </FiftyFifty>

      <ParagraphSection
        columns={2}
        paragraph="In January 2020, we
launched the Citi Impact Fund with
$150 million in capital for startups,
many of them founded by women and
minorities, that are focused on the
“double bottom-line.” We later allocated
an additional $50 million to the fund
to support businesses owned by Black
entrepreneurs. In addition, the Citi
Foundation is investing $100 million
in its successful Pathways to Progress
initiative, which is equipping 1 million
youth worldwide by 2023 with the skills
they need to access meaningful jobs
and careers.
Underpinning all of this work is a
commitment to a culture that embraces
the diversity of our people and the
communities we serve. We are notable in our industry for recognizing the
importance of transparency and
accountability to these efforts. In 2018,
Citi was the first major U.S. financial
institution to publicly release the results
of a pay equity review comparing
compensation of women to men and
U.S. minorities to U.S. non-minorities.
Our people are Citi’s greatest asset, and
we are absolutely committed to being
a firm where everyone can show up to
work as their true, authentic and whole
selves, knowing that their contributions
will be judged solely on their merits and
their voices will always be heard. To
hold everyone to the highest standards
of ethics and professional behavior, we
have implemented a new accountability
framework that contains clear and
consistent consequences for misconduct
or risk management concerns. I invite you to learn more about our ESG
efforts in the pages that follow. This is
a journey that we began at Citi many
years ago and is now an essential part
of our firm-wide strategy, harnessing
the full power of our businesses to help
solve society’s toughest challenges. But
the pandemic has changed our world
irrevocably, and as we work to support
an equitable recovery, we need to be
even more responsive to the needs of
all of our stakeholders, including those
who have been most challenged by this
public health crisis. The opportunities
and obligations for companies like ours
have never been greater and, as CEO,
I am determined for Citi to continue
answering the call."
      />
      <Arena width="70" align="center">
        <Header
          size="medium"
          text="Through our core business and philanthropy, we address some of
          society’s greatest challenges — an imperative stated in our mission
          and an idea that shapes our decisions every day. Our ESG commitments
          are an essential part of our firm-wide strategy, deeply integrated
          into our business and long-term priorities, yet nimble to adjust and
          respond to the ever-changing realities around the globe. For a
          comprehensive view of our ESG governance, approach and initiatives,
          read our full 2020 ESG Report."
        />
      </Arena>
      <Story>
        <img
          src="https://image.flaticon.com/icons/png/512/5412/5412195.png"
          alt=""
          className="icon"
        />
        <Achivement header="Support communities most impacted by COVID-19 and aid in an equitable recovery.">
          <ul>
            <li>
              Committed over $100 million in support of COVID-19-related relief
              and economic recovery efforts
            </li>
            <li>
              Selected by Gavi, the Global Vaccine Alliance, as sole financial
              advisor to the COVAX Facility to support the fair and equitable
              distribution of vaccines
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/1890/1890036.png"
          alt=""
          className="icon"
        />

        <Achivement header="Play a leading role in driving the transition to a low-carbon economy">
          <ul>
            <li>
              Launched our 2025 Sustainable Progress Strategy, including our
              $250 Billion Environmental Finance Goal; measuring and managing
              the climate risk and impact of our client portfolio; and reducing
              the environmental footprint of our facilities
            </li>
            <li>
              Committed to net zero greenhouse gas emissions by 2050, including
              emissions associated with our financing, and our own operations by
              2030
            </li>
          </ul>
        </Achivement>

        <img
          src="https://image.flaticon.com/icons/png/512/1062/1062726.png"
          className="icon"
          alt=""
        />

        <Achivement header="Leverage our core business capabilities and philanthropy to help close the racial wealth gap and increase economic mobility in the U.S.">
          <ul>
            <li>
              Launched $1 billion in strategic initiatives to provide greater
              access to banking and credit in communities of color, increase
              investment in Black-owned businesses, expand homeownership, and
              advance anti-racist practices in the financial services industry
            </li>
          </ul>
        </Achivement>

        <img
          src="https://image.flaticon.com/icons/png/512/2017/2017783.png"
          className="icon"
          alt=""
        />

        <Achivement header="Continue transparency around pay equity and reduce our raw pay gap">
          <ul>
            <li>
              Publicly shared an update on our progress, showing improvements in
              median pay for women globally and U.S. minorities
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/3135/3135691.png"
          className="icon"
          alt=""
        />
        <Achivement header="Invest in companies tackling society’s biggest challenges">
          <ul>
            <li>
              Invested in 13 companies through Citi’s $200 million Impact Fund,
              the majority of which are founded by women and/or minorities
            </li>
          </ul>
        </Achivement>

        <img
          src="https://image.flaticon.com/icons/png/512/913/913117.png"
          className="icon"
          alt=""
        />

        <Achivement header="Increase affordable housing in the U.S.">
          <ul>
            <li>
              Provided $7 billion in loans for affordable housing projects in
              the U.S., making Citi the largest U.S. affordable housing
              development lender for the 11th consecutive year
            </li>
            <li>
              Issued inaugural $2.5 billion Affordable Housing Bond, the
              largest-ever social bond from an issuer in the private sector
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/3501/3501080.png"
          className="icon"
          alt=""
        />

        <Achivement header="Advance economic progress in underserved and low-income communities in emerging markets">
          <ul>
            <li>
              Supported $289 million in debt transactions to fund inclusive
              businesses and microfinance institutions globally
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/3160/3160069.png"
          className="icon"
          alt=""
        />
        <Achivement header="Respect human rights in our financing of client activities">
          <ul>
            <li>
              Screened more than 600 transactions under our Environmental and
              Social Risk Management Policy and flagged 25 of those transactions
              for enhanced due diligence
            </li>
            <li>
              Screened an additional 100 client relationships for
              region-specific human rights risks
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/1436/1436690.png"
          className="icon"
          alt=""
        />

        <Achivement header="Address global issue of youth unemployment">
          <ul>
            <li>
              Expanded the global Pathways to Progress job skills-building
              initiative, led by a three-year, $100 million investment from the
              Citi Foundation
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/4747/4747186.png"
          className="icon"
          alt=""
        />

        <Achivement header="Support the equitable growth of underserved communities around the world">
          <ul>
            <li>
              $100 million in philanthropic grants provided by the Citi
              Foundation
            </li>
          </ul>
        </Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/2871/2871730.png"
          className="icon"
          alt=""
        />

        <Achivement header="Make a positive impact in our communities through employee volunteerism">
          <ul>
            <li>
              Over 63,000 volunteer engagements as part of Citi’s 15th annual
              Global Community Day Reimagined across 73 countries and
              territories
            </li>
          </ul>
        </Achivement>
      </Story>
      <ImageWithText
        header="Making Healthcare More Accessible"
        headerBreak={2}
        undertext="by Erica Plybeah"
        image="https://media.bizj.us/view/img/11831651/tnsu-starboardport-portrait-006*1200xx1710-964-0-176.jpg"
      >
        <Quote text="Nowadays, most hospitals and healthcare providers do offer free or reduced-cost rides home, but those trips are often via taxis, rideshare services or public transportation — not really viable choices for new mothers, people undergoing cancer treatments or someone with dementia, even before COVID-19. " />
      </ImageWithText>

      <FiftyFifty>
        <Arena width="70" align="">
          <p>
            There are many other patients, such as those with disabilities, who
            may have special transportation needs even if they do not have
            special medical needs. In the U.S., we’re continuing to see delays
            in diagnoses, medical procedures and treatment, leading to further
            health risks. On top of that, COVID-19’s disproportionate and severe
            impact on people of color and lower-income communities only further
            highlighted the need to address the tremendous gap in access that
            already existed.
          </p>
        </Arena>
        <img
          src="https://image.flaticon.com/icons/png/512/2966/2966486.png"
          className="icon"
          alt=""
        />
      </FiftyFifty>
      <ParagraphSection
        columns={2}
        paragraph="The notion that everyone deserves safe, reliable, and compassionate transportation, regardless of their unique needs, is why I started MedHaul. MedHaul connects healthcare providers with specialized medical transportation providers, providing patients with free, safe, and accountable transportation to and from their medical appointments. Our tech-enabled marketplace replaces outdated, idiosyncratic systems used by hospitals with a standardized platform that pairs patients with a ride that accommodates their specific transportation needs, such as a wheelchair, stretcher, or door-through-door transport. By enabling more people to keep their appointments and wellness visits, MedHaul is improving healthcare outcomes for vulnerable and underserved communities — while also reducing the amount of revenue lost by healthcare providers due to missed appointments. Specialized medical transportation providers also benefit from increased revenue, since we seek out and enlist vetted, high-quality providers to participate in MedHaul who might otherwise have gone overlooked But launching a successful technology
startup takes much more than just a
good idea. Bringing MedHaul from a
promising concept to an actual business required investment, networks
and other resources that are not
nearly as available to Black women
founders — especially at the seed
stage. According to Project Diane,
the median seed round funding for
a startup is $2.5 million, but that
number falls to just $125,000 for
Black women founders, who received
just .06% of all venture capital
investment raised from 2009 to
2018. Black founders don’t have
the same kind of access to venture
funding sources and networks as
other founders, and many cannot
rely on family to help raise capital.
And then there’s what I call the
“quadruple due diligence,” the many
additional hoops a Black woman
founder needs to jump through in
order to meet a much tougher level
of funder scrutiny. The obstacles
to growth and scale are high,
and they are deeply embedded
in the structures that fuel the
startup ecosystem. Investment through the Citi Impact
Fund was a critical step toward
shifting that dynamic for founders
like me. By dedicating its $200
million fund to making equity investments in minority- and women-owned
companies like MedHaul, which seek
to deliver a positive impact on
society in addition to economic
success, Citi is working to make the
startup world more inclusive and
equitable. The early-stage investment
MedHaul received from the Impact
Fund has been pivotal for our growth
— enabling us to build the next
version of our online platform for
booking and scheduling, develop a marketing campaign to recruit and
onboard transportation companies,
and scale our operations so we have
the capacity to grow smoothly."
      />
      <FiftyFifty>
        <img
          src="https://image.flaticon.com/icons/png/512/3159/3159985.png"
          className="icon"
          alt=""
        />
        <Arena width="70" align="">
          <p>
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
          </p>
        </Arena>
      </FiftyFifty>
      <ImageWithText
        header="Sustainability Issues to Watch in 2021 and Beyond"
        headerBreak={3}
        undertext="by Val Smith "
        image="https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F43739ead-0fc0-44cc-83a1-a3975c26c014_3000x2000.jpeg"
      >
        <Quote
          text="2021 will be a pivotal and consequential
year for sustainability initiatives and
climate change. Around the world, a
broad set of stakeholders are focusing
their attention on the breadth of
climate-related risks and opportunities."
        />
      </ImageWithText>
    </div>
  );
}

export default App;
