import React from "react"
import Helmet from "react-helmet"
import "../styles/index.scss"
import Nav from "../components/Nav"
import HeroSection from "../components/HeroSection"
import BrandSection from "../components/BrandSection"
import FeatureSection from "../components/FeatureSection"
import favicon from "../images/favicon.png"

const IndexPage = () => (
  <React.Fragment>
    <Helmet
      title="Braintree Landing Page Concept"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <div>
      <Nav />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <div className="Footer">
        <div className="Footer__inner">
          <div>
            <p className="Footer__text">
              Created By{" "}
              <a href="https://github.com/wisniewskij26">Jacob Wisniewski</a>
            </p>
          </div>
          <div>
            <a href="https://github.com/wisniewskij26/gatsby-landing-page">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default IndexPage
