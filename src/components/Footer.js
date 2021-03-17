import React, { Component } from "react";
import logo from "../img/logo.png";
import vk from "../img/vk.png";
import fb from "../img/fb.png";
export default class Footer extends Component {

  render(props) {
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <img alt={`Логотип компании ${this.props.companyName}.`} className="footer__logo logo" src={logo} />
          <span className="companyName">{this.props.companyName}</span>
          <div className="logo-block">
            <img src={vk} alt="Логотип социальной сети Вконтакте" className="logo-vk" />
            <img src={fb} alt="Логотип социальной сети Фэйсбук" className="logo-fb" />
          </div>
        </div>
      </div>
    );
  }
}