import React, { Component } from "react";

export default class Header extends Component {

  render(props) {
    return (
      <div className="header">
        <img alt={`Логотип компании ${this.props.companyName}.`} className="logo" src="/" />
        <h1 className="companyName">{this.props.companyName}</h1>
      </div>
    );
  }
}