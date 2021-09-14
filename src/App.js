import "./App.css";
import "./styles/style-variables.scss";
import { NavigationBar } from "./components/navigation/navigation.component";
import { GiantHeader } from "./components/typography/headers/giant-header/giant-header.component";
import { ParagraphSection } from "./components/sections/paragraph-section/paragraph-section.component";
import { Story } from "./components/sections/story/story.component";
import { Quote } from "./components/typography/quote/quote.component";
import { Header } from "./components/typography/headers/header/header.component";
import { ImageWithText } from "./components/sections/image-with-text/image-with-text.component";
import { Arena } from "./components/sections/arena/arena.component";
import { FiftyFifty } from "./components/sections/fifty-fifty/fifty-fifty.component";
import { Achivement } from "./components/elements/achivement/achivement.component";
import { ChatBubble } from "./components/elements/chatbubble/chatbubble.component";

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

      <FiftyFifty rounded>
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
        divider
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
        wordLimit={70}
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
        wordLimit={70}
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
        divider
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
        divider
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

      <FiftyFifty>
        <Arena width="70" align="">
          <p>
            In the U.S., following the release of the Biden Administration’s
            longterm plan for greenhouse gas (GHG) reductions on Earth Day, we
            expect to see changes through executive and congressional action, a
            welcome contribution as we seek to re-join governments around the
            world in driving climate leadership in support of the Paris
            Agreement. Industries across every sector of the global economy —
            including banking and financial services — are working to meet their
            own GHG commitments and those that policy makers are setting out.
            This effort will require no small amount of collaboration,
            innovation, big thinking, and largescale partnerships between the
            public and private sector. In the past, I have used this space to
            highlight efforts that Citi has undertaken on our path to
            incorporate sustainability into how we do business.
          </p>
        </Arena>
        <img
          src="https://image.flaticon.com/icons/png/512/3176/3176369.png"
          className="icon"
          alt=""
        />
      </FiftyFifty>
      <ParagraphSection
        columns={2}
        wordLimit={70}
        paragraph="We are proud of the work we have done; from 2014 to 2019, we financed
          and facilitated $164 billion in low-carbon solutions, and last year we
          committed to an additional $250 billion in environmental finance by
          2025. We also reached our goal of purchasing 100% renewable
          electricity for our facilities around the world. Earlier this year, we
          took another important step in our journey and committed to net zero
          GHG emissions by 2050. With so much focus on the broader trends and
          innovative approaches to sustainability, I’d like to highlight the
          related issues we are tracking externally. These range from specific
          to broad, from short term to long, but within each, there is a pivotal
          role that Citi can and will play in building a more sustainable
          future."
      />
      <Story>
        <img
          src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200910084940-jane-fraser-2019-file-restricted-01.jpg"
          alt=""
        />

        <ChatBubble>
          On Jane Fraser’s first day as CEO, she committed Citi to a goal of net
          zero emissions by 2050, an ambitious goal that we are mapping out over
          the next year. Other companies in financial services, as well as the
          tech, power and energy sectors, have made similar commitments in
          recent months. So what does it all mean? To state it simply, net zero
          means reducing emissions associated with business and operations
          activities to as close to zero as possible, and neutralizing any
          remaining emissions through removal from the atmosphere. How companies
          actually get there and deal with that remainder is a challenge I am
          keenly interested in. There are a growing number of approaches —
          things like regenerative agriculture and hydrogen fuel are gaining
          steam, and the Biden administration is considering establishing a
          Carbon Bank to further legitimize those efforts. Other areas under
          exploration include afforestation and finding ways to deal with
          fugitive methane emissions. There has also been significant investment
          in private-sector companies developing innovative sequestration
          technologies. As always, we’ll share our learnings and disclose our
          progress along the way.
        </ChatBubble>
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/Industry.jpeg"
          alt=""
        />

        <ChatBubble>
          Citi isn’t the only company where ESG has become more and more
          integrated into the business. Companies across every industry are
          shifting their focus from short term gains (i.e. stock prices) to a
          longer term approach focused on sustainable growth. We are also seeing
          more deliberate board oversight of ESG, and executive compensation is
          being linked to ESG metrics and performance. As the ESG reporting
          landscape continues to evolve, with the potential consolidation of
          different frameworks and new global bodies to oversee reporting
          practices, the key and consistent through-line for us is
          accountability. At Citi, we publicly report on our progress for all
          ESG initiatives, including our efforts to advance pay equity, racial
          equity, and our previously announced sustainability goals. That
          transparency goes hand-in-hand with the stakeholders and communities
          to which we hold ourselves accountable. It is our hope that other
          companies launching efforts like this for the first time will do the
          same.
        </ChatBubble>
        <img
          src="https://www.parisschoolofeconomics.eu/IMG/arton5587.png"
          alt=""
        />

        <ChatBubble>
          When we look at the potential impacts of climate change, both
          domestically and globally, an important area of focus is the
          communities where those effects will be felt most acutely. Current
          analysis tells us that low income communities around the world are
          much more susceptible to the negative impacts from climate change than
          higher income areas. In the US, communities of color have long
          suffered disparate health outcomes due to significantly higher levels
          of exposure to air pollution based on the location of industrial
          development. More recently, terms like “climate gentrification” —
          meaning the movement of whiter, more affluent populations to areas
          less at-risk, while pushing poorer communities to higher risk areas —
          have gained significant traction. Citi has been working with local
          governments to address issues like this for years, but as the problem
          accelerates — both in terms of timing and severity — so too will the
          impacts. The issue is front and center in the Biden Administration’s
          whole of government approach to climate change and will loom large in
          Congressional legislation as well. How the private sector works to
          address these disproportionate effects in the U.S. and around the
          world will be important. And since the most severe impacts will likely
          play out in countries more susceptible to flooding and drought, a
          global focus — and global collaboration — will be a central part of
          any mitigation efforts.
        </ChatBubble>
        <img
          src="https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024"
          alt=""
        />

        <ChatBubble>
          It is hard to ignore the ripple effect that climate change will have
          not only on the people in our communities, but also on the
          environments those communities are in. Specifically, plant and animal
          life are greatly impacted by climate change, with some studies
          projecting that up to one third of all species could be extinct by
          2070 if our behavior does not change. If even a small percentage of
          that destruction is realized, it will reshape the way millions of
          people live, alter the livelihoods of entire countries, and ravage
          local economic and food systems, to name just a few potential
          outcomes. This is an emerging issue not just for Citi, but across
          private industry and for governments around the world, and we still
          lack many of the tools and data needed to make a direct impact. In
          some ways, it reminds me of where we started with assessing climate
          risk over a decade ago. When I look at how far we have come on that
          front, I am encouraged that we will have more actionable information
          in short order, and that Citi can play a major role in ensuring the
          safety and growth of our natural environments
        </ChatBubble>
        <img
          src="https://image.flaticon.com/icons/png/512/1598/1598431.png"
          className="icon"
          alt=""
        />

        <ChatBubble>
          Across many of these trending issues is the notion that we cannot do
          this alone. All of our efforts require action not just by Citi, but by
          our clients and partners as well. We have pledged to actively engage
          with our clients on their efforts to achieve net zero, and to help
          with their transitions, we offer a range of innovative financing
          solutions. Over the past few years, we’ve seen increased interest in
          incentive structures — linking financing to environmental and social
          performance through a set of pre-determined Key Performance Indicators
          (KPIs) — such as sustainability-linked loans and bonds, and
          sustainable supply chain finance. We are looking closely at how
          sustainability characteristics can be integrated into all financing
          solutions, and how these types of incentive structures can be extended
          to additional products. As a financial institution, we know we can
          play an important role here by directing capital to where it can have
          the most positive impact, and facilitating the transition to a more
          sustainable future. I look forward to seeing how these areas evolve as
          part of our conversations with clients, investors and partners in the
          year ahead.
        </ChatBubble>
      </Story>
      <ImageWithText
        header="Setting a New Standard for Affordable Housing Development"
        headerBreak={4}
        divider
        undertext="by Richard Gerwitz"
        image="https://miro.medium.com/max/1000/1*lN5-RROy6TuB1cwNKu1xQA.png"
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
      <FiftyFifty>
        <img
          src="https://image.flaticon.com/icons/png/512/609/609803.png"
          className="icon"
          alt=""
        />
        <Arena width="70" align="">
          <p>
            There’s no doubt that housing is a major issue for communities
            throughout the United States — and that its availability and
            location has a real impact on the financial stability of families
            and individuals, local communities, and their economic development.
            According to a study conducted by Stanford Economist Raj Chetty,
            children living in lower income neighborhoods whose families were
            able to move to areas with less poverty had earnings as adults over
            30% higher than would have been the case had they not moved.
          </p>
        </Arena>
      </FiftyFifty>
      <ParagraphSection
        columns={2}
        wordLimit={80}
        paragraph="They
also had an increased likelihood
of living in better neighborhoods
themselves as adults. The Center
for Housing Policy also found that
the development of affordable
housing increases spending and
employment in the surrounding
community, serves as an important
source of local government revenue,
and reduces the likelihood and the
associated costs of foreclosure.
These and other studies show that
affordable housing is beneficial for
all parties, and as essential to our
nation’s infrastructure as roads,
bridges, tunnels, and the energy grid.
The COVID-19 pandemic, however,
has made an already significant
affordable housing crisis in the U.S.
worse — adding to a shortage of
over seven million affordable homes
for the nation’s 11 million-plus lower
income families. And with unemployment and economic hardship further
widening the inequality gap, access
to housing has become more vital
than ever for struggling Americans.
For those who are experiencing
poverty or financial strain, a safe
and comfortable home makes an
immeasurable difference. At Citi, we’re committed to addressing
this problem through our promotion
and support of innovative building
techniques, targeted funding, and
strategic partnerships with local
governments, nonprofits, and businesses. Here is just one example"
      />
      <Story>
        <img
          src="https://cahill-sf.com/wp-content/uploads/2020/05/833-Bryant_main_1.jpg"
          alt=""
        />

        <ChatBubble>
          A new affordable housing project in San Francisco, 833 Bryant, set to
          open for residents in October 2021, includes 145 studio apartments of
          permanent supportive housing for adults who have previously
          experienced homelessness. The site features clean and spacious
          apartments, and is centrally located in the South of Market area of
          San Francisco, close to public transit, grocery stores, and community
          parks. The ambitious project brought together Citi Community Capital,
          Public Finance, the Municipal Sales & Trading team, as well as public
          and private partners. Through its partnership with the City of San
          Francisco, 833 Bryant will provide permanent affordability and high
          quality maintenance of the building for residents.
        </ChatBubble>

        <img
          src="https://ternercenter.berkeley.edu/wp-content/uploads/2021/02/unnamed-1024x576.jpg"
          alt=""
        />

        <ChatBubble>
          Among the barriers to affordable housing development in major cities
          is the cost of construction, and the time it takes for developments to
          be ready for residents to move in. Building a unit of affordable
          housing through traditional means in San Francisco can cost as much as
          $750,000 per unit, and take three years or more to build and lease,
          making it a costly and unnecessarily prolonged process. In contrast,
          Citi-funded 833 Bryant was built using modular construction, an
          approach which moves much of the construction process off-site and
          onto a factory floor. This method not only expedites the process of
          building affordable housing in major cities, but also ensures that the
          high standard of quality for units is upheld and that the construction
          is uniform. Modular construction is also more eco-friendly — the
          process reduces waste thanks to a controlled environment, uses
          recyclable materials, and requires less energy. This is consistent
          with Citi’s commitment to ESG. As a result of the efficiencies of
          modular construction, the cost of the 833 Bryant project will be about
          half the typical per unit cost of building a project in San Francisco,
          and it is ESG at Citi 18 expected to be ready for occupancy a mere 14
          months from bond closing. These are significant reductions in the cost
          and time needed to complete a project of this magnitude relative to
          traditional construction. The time and money saved will also allow 833
          Bryant to provide affordable housing for 70 more people, for the same
          amount of money, than a typical project.
        </ChatBubble>
        <img
          src="https://media.bizj.us/view/img/10763308/factoryos011718tj-3*1200xx7301-4119-0-167.jpg"
          alt=""
        />

        <ChatBubble>
          The modular construction approach taken at 833 Bryant doesn’t just
          save money and time. It creates permanent jobs in lower-cost areas. We
          invested in Factory OS, a new company located in Vallejo, California,
          which employs a diverse group of mostly new immigrant workers to build
          the housing units for this building and others. These permanent jobs
          provide vital support to the Vallejo and surrounding communities.
          Factory OS is revolutionizing home construction using state of the art
          technology to build multi-family modular buildings. Citi’s
          contributions to Factory OS and 833 Bryant, while providing much
          needed housing to San Francisco residents experiencing homelessness,
          have also created stable jobs and stimulated the local economy in
          Vallejo.
        </ChatBubble>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQF8XEnfXu_OQg/company-background_10000/0/1519796489707?e=2159024400&v=beta&t=easEySPp0lwdpQlQvvnXmEMFCLw5gkFV3p97FPolvmU"
          alt=""
        />

        <ChatBubble>
          Citi played multiple roles in the effort to construct 833 Bryant: Low
          Income Housing Tax Credit investor, construction loan administrator,
          and Letter of Credit provider guaranteeing construction completion.
          Citi’s innovative approach to financing the project exemplifies our
          strong commitment to affordable housing in low-to-moderate
          communities, and combating homelessness in the United States. Homes
          for the Homeless, a subsidiary of the San Francisco Housing
          Accelerator Fund (a public/private entity for which Citi has been the
          lead lender), acquired the site for 833 Bryant back in 2018. Then, an
          innovative financing approach expedited and economized the
          construction process. Homes for the Homeless advanced pre-development
          costs to the developer, Mercy Housing, including the initial deposits
          to Factory OS, and purchased the site, which is being leased to the
          Mercy ownership entity. Mercy will then lease the completed project to
          the City of San Francisco, which will sublease it back to the
          partnership to operate. This lease/leaseback structure allows the
          City’s lease payments to go directly to service debt on the bonds,
          which were structured and sold to the public by Citi’s Public Finance
          Department and Underwriting and Sales team. By virtue of San
          Francisco’s Triple-A GO rating, the 30-year bonds were rated Aa2 by
          Moody’s Investor Service and sold at a net interest cost of 2.91%.
          Through its agreements with Mercy, the City is also funding all
          operating and supportive services costs for the project. Through these
          strategic partnerships and financing efforts, 833 Bryant was
          constructed more quickly and efficiently than most affordable housing
          developments in the San Francisco area, allowing residents timely
          access to a home when they most need it.
        </ChatBubble>
        <img
          src="https://image.flaticon.com/icons/png/512/3208/3208264.png"
          className="icon"
          alt=""
        />

        <ChatBubble>
          As the leading funder of affordable housing development in the U.S.,
          we strive to maximize efficiency, quality, and innovation in this
          space. By emphasizing teamwork and marshalling internal resources,
          through collaboration with local governments, nonprofits, and
          partners, and with innovative financing, Citi is helping make 833
          Bryant a shining example of what can be achieved when we address the
          affordable housing crisis with creative and comprehensive solutions.
        </ChatBubble>
      </Story>

      <GiantHeader
        color="white"
        background="black"
        firstBreak={3}
        text="Our Action for Racial Equity Goals."
        undertext="An update on our progress"
      />
      <Story background="black">
        <img
          src="https://image.flaticon.com/icons/png/512/3100/3100248.png"
          className="icon"
          alt=""
        />

        <Achivement
          header="More than half of the way to its $100 million commitment to
Minority Depository Institutions (MDIs) that are expanding
banking and credit access in communities of color."
        ></Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/3090/3090712.png"
          className="icon"
          alt=""
        />

        <Achivement
          header="Investing more than $200 million — out of a $550 million three-year
commitment to affordable housing — in five equity funds that will
be co-managed by Black investment managers to preserve multifamily affordable rental housing in cities all across the country. "
        ></Achivement>
        <img
          src="https://image.flaticon.com/icons/png/512/5335/5335637.png"
          className="icon"
          alt=""
        />

        <Achivement
          header="Collaborating with the cities of Los Angeles and San Jose to
provide college savings accounts for public school students."
        ></Achivement>
        <img
          src="https://cdn.britannica.com/13/126113-050-2927991E/Lyndon-B-Johnson-civil-rights-leaders-Oval-January-1964.jpg"
          alt=""
        />

        <Achivement
          header="Working with the National Urban League to offer the Citi®
Access Account Package that includes no fee savings and
checking products through its network."
        ></Achivement>
        <img
          src="https://c.files.bbci.co.uk/25DB/production/_114319690_hi063258080.jpg"
          alt=""
        />

        <Arena width="80">
          <Header
            size="large"
            align="center"
            uppercase
            color="white"
            text="«Action for Racial Equity was meant to be a three-year goal, but our teams have matched the urgency these issues deserve, making incredible progress towards that goal in just over six months. We are determined to do everything we can to help close the racial wealth gap in our communities and continue to do the work to become an anti-racist institution.»"
          />
        </Arena>
      </Story>

      <GiantHeader
        background="primary"
        color="white"
        specialDot
        firstBreak={2}
        undertext="Chief Administrative Officer of Citi"
        text="Q&A with Karen Peetz"
      />
      <Story>
        <ChatBubble reciever>
          Why is creating a best-in-class risk and control environment a top
          priority for Citi?
        </ChatBubble>

        <ChatBubble sender name="Karen">
          We are a bank. Effectively managing our risks is our business and our
          responsibility. By creating a best-in-class risk and control
          environment, we are positioning our firm to better compete in a
          digital world and simultaneously address the needs and expectations of
          our clients, regulators and our shareholders. The COVID-19 pandemic
          has only accelerated the transition to a digital future, and if we
          don’t have a modern, automated infrastructure that we’re continuously
          improving, we won’t be able to move at the pace we want. Enhancing our
          risk and controls is also an opportunity for us to strengthen our
          competitive advantages as the world’s most global bank. Our global
          network, people, expertise, insights, and connectivity — these are our
          most strategic assets that we must continue to invest in, and when we
          reach operational excellence, we’ll be known for excellence in what we
          do, how we do it, and who we are.
        </ChatBubble>

        <ChatBubble reciever>
          How is Citi approaching this transformation work?
        </ChatBubble>

        <ChatBubble sender name="Karen">
          The consent orders we received from regulators last year created the
          urgency and framework for our transformation, but the transformation
          encompasses more than the regulatory remediation and we’re taking a
          holistic approach to our efforts. This work builds on the progress
          we’ve made since the last financial crisis to make Citi simpler, safer
          and stronger. We’re looking at our transformation as a unique
          opportunity to make Citi more resilient and better prepared for the
          future.
        </ChatBubble>

        <ChatBubble reciever>
          How will Citi accomplish its transformation? What efforts are
          underway?
        </ChatBubble>
        <ChatBubble sender name="Karen">
          Instead of a fragmented approach to remediating issues, we’re looking
          to solve the root causes of our challenges. We’re redesigning our key
          processes from end-to-end, automating them, and ensuring we have the
          proper controls in place. We’re also eliminating much of the
          organizational and operational complexities that slow us down. All
          these efforts will allow us to be simpler, which enables us to focus
          our resources, see from endto-end, and connect different pieces more
          easily — with better controls. We created a Transformation Steering
          Committee, chaired by our CEO, to drive forward core areas of our
          transformation work. These areas include efforts to identify changes
          we need to make in our culture to increase accountability and champion
          excellence, improve and automate controls, and modernize our data
          infrastructure.
        </ChatBubble>

        <ChatBubble reciever>
          What role is the CAO Office playing in these remediation efforts?
        </ChatBubble>
        <ChatBubble sender name="Karen">
          Working directly with our CEO and the rest of the Executive Management
          Team, I’m leading the program management of our transformation. That
          means coordinating with colleagues across regions, businesses and
          functions as we put together extremely detailed plans for this
          multi-year effort. My office is really challenging ourselves and all
          of the participants in these plans with some consistent governance,
          consistent platforms, reporting — things that will really help us have
          transparency for where we are and a roadmap for where we are going.
        </ChatBubble>

        <ChatBubble reciever>
          How are Citi employees taking part in the transformation?
        </ChatBubble>
        <ChatBubble sender name="Karen">
          All Citi employees are responsible for taking part in our
          transformation — everyone has a role to play. That’s why one of our
          focus areas is creating a culture of excellence. We want to enable all
          of our colleagues to be better risk managers with direct
          accountability for protecting the integrity of our firm. It’s really a
          mindset shift, and once you have everyone in the company embracing
          this culture, it absolutely makes us stronger and more likely to
          succeed in our ambitious agenda.
        </ChatBubble>
      </Story>
      <ImageWithText
        header=" "
        image="https://cdn1.i-scmp.com/sites/default/files/styles/1920x1080/public/2013/08/11/1b96610856b100759045089212adf18b.jpg?itok=mWX1NmSW"
      >
        <Quote
          text="All Citi employees are
responsible for taking part
in our transformation —
everyone has a role to play.
That’s why one of our focus
areas is creating a culture
of excellence."
        />
      </ImageWithText>
    </div>
  );
}

export default App;
