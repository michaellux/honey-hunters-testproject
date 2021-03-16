import React, { Component } from "react";

export default class Footer extends Component {

  render(props) {
    return (
      <div className="footer">
        <img alt={`Логотип компании ${this.props.companyName}.`} className="logo" src="/" />
        <span className="companyName">{this.props.companyName}</span>
        <img alt="Логотип социальной сети Вконтакте" className="logo-vk" />
        <img alt="Логотип социальной сети Фэйсбук" className="logo-facebook" />
      </div>
    );
  }
}