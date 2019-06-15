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
        <div>
          <p className="Footer__text">
            Created by <a href="#">Jacob Wisniewski</a>
          </p>
        </div>
        <div>
          <a href="#">View Code</a>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default IndexPage
