import React from "react"
import creditCardSVG from "../images/undraw_credit_card_df1m.svg"

const HeroSection = () => (
  <div className="HeroSection">
    <div className="HeroSection__image-col">
      <img className="HeroSection__image" src={creditCardSVG} />
    </div>
    <div className="HeroSection__content-col">
      <h1 className="HeroSection__heading">
        Boost Revenue with a Global Payments Partner
      </h1>
      <p className="HeroSection__text">
        Reach more buyers and drive higher conversion with the only payments
        platform that delivers PayPal, Venmo (in the US), credit and debit
        cards, and popular digital wallets like Apple Pay and Google Pay in a
        single, seamless integration.
      </p>
      <a className="Button Button--large Button--green" href="#">
        Connect With Our Sales Team
      </a>
      <a className="Button Button--large Button--outline" href="#">
        Sign Up
      </a>
    </div>
  </div>
)

export default HeroSection
