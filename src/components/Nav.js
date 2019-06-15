import React from "react"
import BraintreeLogo from "../images/braintree-logo.svg"
class Nav extends React.Component {
  state = {
    menuVisible: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible,
    }))
  }
  render() {
    let menuClass = `Nav__mobile-menu`
    if (this.state.menuVisible) {
      menuClass += " Nav__mobile-menu--open"
    }
    return (
      <React.Fragment>
        <div className="Nav">
          <div className="Nav__inner">
            <div className="Nav__btn-wrapper">
              <button className="Nav__btn" onClick={this.toggleMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="Nav__logo-wrapper">
              <img className="Nav__logo" alt="Braintree" src={BraintreeLogo} />
            </div>
            <div className="Nav__links">
              <div>
                <a className="Nav__link" href="#">
                  Why Braintree
                </a>
                <a className="Nav__link" href="#">
                  Products
                </a>
                <a className="Nav__link" href="#">
                  Features
                </a>
                <a className="Nav__link" href="#">
                  Learn
                </a>
              </div>
              <div>
                <a className="Nav__link" href="#">
                  Sign In
                </a>
                <a className="Button">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className={menuClass}>
          <a className="Nav__mobile-menu-link" href="#">
            Why Braintree
          </a>
          <a className="Nav__mobile-menu-link" href="#">
            Products
          </a>
          <a className="Nav__mobile-menu-link" href="#">
            Features
          </a>
          <a className="Nav__mobile-menu-link" href="#">
            Learn
          </a>
          <a className="Nav__mobile-menu-link" href="#">
            Sign In
          </a>
          <a className="Button">Sign Up</a>
        </div>
      </React.Fragment>
    )
  }
}

export default Nav
