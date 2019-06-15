import React from "react"
import calendarSVG from "../images/undraw_schedule_pnbk.svg"
import chartSVG from "../images/undraw_visual_data_b1wx.svg"
import devicesSVG from "../images/undraw_web_devices_ad58.svg"

const FeatureSection = () => (
  <div className="FeatureSection">
    <div className="FeatureSection__feature">
      <img className="FeatureSection__image" src={chartSVG} />
      <h3 className="FeatureSection__heading">Drive Higher Conversion</h3>
      <p className="FeatureSection__text">
        Help increase sales and loyalty with a modernized, optimized payments
        experience.
      </p>
    </div>
    <div className="FeatureSection__feature">
      <img className="FeatureSection__image" src={devicesSVG} />
      <h3 className="FeatureSection__heading">
        Reach more buyers in more places
      </h3>
      <p className="FeatureSection__text">
        Leverage the PayPal network and next-generation technology to expand
        markets.
      </p>
    </div>
    <div className="FeatureSection__feature">
      <img className="FeatureSection__image" src={calendarSVG} />
      <h3 className="FeatureSection__heading">
        Streamline business operations
      </h3>
      <p className="FeatureSection__text">
        Manage internal costs and automate back-end processes without
        sacrificing revenue.
      </p>
    </div>
  </div>
)

export default FeatureSection
