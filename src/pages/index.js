import React from "react"
import "../styles/index.scss"
import Nav from "../components/Nav"
import HeroSection from "../components/HeroSection"
import BrandSection from "../components/BrandSection"
import FeatureSection from "../components/FeatureSection"

const IndexPage = () => (
  <div>
    <Nav />
    <HeroSection />
    <BrandSection />
    <FeatureSection />
  </div>
)

export default IndexPage
