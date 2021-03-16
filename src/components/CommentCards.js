import React, { Component } from "react";
import CommentDataService from "../services/service";

export default class CommentCards extends Component {
  constructor(props) {
    super(props);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.refreshCards = this.refreshCards.bind(this);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.retrieveComments();
  }

  retrieveComments() {
    CommentDataService.getAll()
      .then(response => {
        this.setState({
          comments: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshCards() {
    this.retrieveComments();
    this.setState({
      currentComment: null
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="commentcards">
        <h2 className="commentcards__title">Выводим комментарии</h2>
        <ul className="commentcards__cards cards">
          {comments &&
            comments.map((comment, index) => (
              <li
                className=
                "cards__item item"
                key={index}
              >
                <span className="item__name">
                  {comment.name}
                </span>
                <span className="item__email">
                  {comment.email}
                </span>
                <span className="item__comment">
                  {comment.comment}
                </span>
              </li>))
          }
        </ul>
      </div>
    );
  }
}