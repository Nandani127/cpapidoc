import React, { Component } from "react";
import "./apistyle.css";
import cplogo from "./images/centpays_full_logo.png";

import Intro from "./apidata/Intro";
import PayInte from "./apidata/PayInte";
import P2P from "./apidata/P2P";
import GetTxndata from "./apidata/GetTxndata";
import Ifram from "./apidata/Ifram";
import Errorcode from "./apidata/Errorcode";
import Callback from "./apidata/Callback";
import Webhook from "./apidata/Webhook";

import IntroCode from "./apicode/IntroCode";
import Integrationcode from "./apicode/Integrationcode";

class Apidoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0, // Set the default active item to the first one
    };
  }

  handleOptionClick = (index) => {
    this.setState({ activeItem: index });
  };

  renderSelectedComponent = () => {
    switch (this.state.activeItem) {
      case 0:
        return <Intro />;
      case 1:
        return <PayInte />;
      case 2:
        return <P2P />;
      case 3:
        return <GetTxndata />;
      case 4:
        return <Ifram />;
      case 5:
        return <Errorcode />;
      case 6:
        return <Callback />;
      default:
        return <Webhook />;
    }
  };

  renderSelectedApiCode = () => {
    switch (this.state.activeItem) {
      case 0:
        return <IntroCode />;
      case 1:
        return <Integrationcode />;
      case 2:
        return <Integrationcode />;
      case 3:
        return <GetTxndata />;
      case 4:
        return <Ifram />;
      case 5:
        return <Errorcode />;
      case 6:
        return <Callback />;
      default:
        return <Webhook />;
    }
  };

  render() {
    const { activeItem } = this.state;
    const sidebarOptions = [
      "Introduction",
      "Payment Integration",
      "P2P Integration",
      "Get Transaction Data",
      "Ifram Payment Integration",
      "Error Code",
      "Callback",
      "Webhook",
    ];

    return (
      <>
        <div className="apicdoc">
          <div className="background"></div>
          <div className="api-body">
            <div className="api-sidebar">
              <div className="api-sidebar-top">
                <img src={cplogo} alt="Company logo" className="companylogo" />
              </div>
              <div className="api-sidebar-middle">
                <ul>
                  {sidebarOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`sidebar-options ${
                        activeItem === index ? "active" : ""
                      }`}
                      onClick={() => this.handleOptionClick(index)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="api-sidebar-bottom">
                <p>Sign in</p>
              </div>
            </div>
            <span>
              <div className="api-header">
                <ul>
                  <li>Docs</li>
                  <li>Support</li>
                  <li>Login</li>
                  <li>Sing in</li>
                </ul>
              </div>
              <div className="api-main-component">
                <div className="api-compartment-left">
                  <div>{this.renderSelectedComponent()}</div>
                </div>
                <div className="api-compartment-right">
                  <div>{this.renderSelectedApiCode()}</div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Apidoc;
