import React, { Component } from "react";
import CommentDataService from "../services/service";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.newComment = this.newComment.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
      comment: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  saveComment() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    };

    CommentDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          comment: response.data.comment,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  newComment() {
    this.setState({
      id: null,
      name: "",
      email: "",
      comment: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="addcomment-block">
        <img alt="Изображение письма в красном круге." className="companion-image" src="/" />
        <form onSubmit={this.saveComment} className="addcomment-form">
          <input
            aria-label="Имя"
            type="text"
            className="addcomment-form__name"
            id="name"
            required
            value={this.state.name}
            onChange={this.onChangeName}
            name="name"
          />

          <input
            aria-label="Email"
            type="email"
            className="addcomment-form__email"
            id="email"
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
            name="email"
          />
          <textarea className="addcomment-form__comment" required value={this.state.comment}
            onChange={this.onChangeComment}
            name="text">
          </textarea>
          <input type="submit" value="Добавить" className="btn addcomment-form__writeButton" />
        </form>
      </div>
    );
  }
}