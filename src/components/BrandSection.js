import React from "react"
import githubLogo from "../images/github-logo.svg"
import uberLogo from "../images/uber-logo.svg"
import dropboxLogo from "../images/dropbox-logo.svg"
import stubhubLogo from "../images/stubhub-logo.svg"

const BrandSection = () => (
  <div className="BrandSection">
    <h2 className="BrandSection__heading">
      The payments platform for some of the world’s leading brands
    </h2>
    <div className="BrandSection__brands">
      <img className="BrandSection__brand" src={uberLogo} alt="Uber" />
      <img className="BrandSection__brand" src={stubhubLogo} alt="StubHub" />
      <img className="BrandSection__brand" src={dropboxLogo} alt="Dropbox" />
      <img className="BrandSection__brand" src={githubLogo} alt="GitHub" />
    </div>
  </div>
)

export default BrandSection
