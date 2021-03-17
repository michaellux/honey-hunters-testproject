import React, { Component } from "react";
import CommentDataService from "../services/service";
import mailIcon from "../img/mail-icon.png";
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
        <div className="addcomment-block__wrapper wrapper">
          <img alt="Изображение письма в красном круге." className="companion-image" src={mailIcon} />
          <form onSubmit={this.saveComment} className="addcomment-form">
            <div className="addcomment-form__wrapper row">
              <div className="col-12 col-md">
                <div className="addcomment-form__input-block name-block">
                  <label className="addcomment-form__labelname label" for="name">Имя</label>
                  <input
                    aria-label="Имя"
                    type="text"
                    className="addcomment-form__name input"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>
                <div className="addcomment-form__input-block">
                  <label className="addcomment-form__labelemail label" for="email">E-mail</label>
                  <input
                    aria-label="Email"
                    type="email"
                    className="addcomment-form__email input"
                    id="email"
                    required
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    name="email"
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="addcomment-form__textarea-block">
                  <label className="addcomment-form__labelcomment label" for="comment">Комментарий</label>
                  <textarea className="addcomment-form__comment textarea" required value={this.state.comment}
                    onChange={this.onChangeComment}
                    id="comment"
                    name="comment">
                  </textarea>
                </div>
              </div>
            </div>
            <input type="submit" value="Записать" className="btn addcomment-form__writeButton" />
          </form>
        </div>
      </div >
    );
  }
}