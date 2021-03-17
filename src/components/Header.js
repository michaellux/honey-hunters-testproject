import React, { Component } from "react";
import logo from "../img/logo.png";
export default class Header extends Component {

  render(props) {
    return (
      <div className="header">
        <div className="header__wrapper wrapper">
          <img alt={`Логотип компании ${this.props.companyName}.`} className="logo" src={logo} />
          <h1 className="companyName">{this.props.companyName}</h1>
        </div>
      </div>
    );
  }
}