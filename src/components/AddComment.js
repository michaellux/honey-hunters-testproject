import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addComment } from '../reducer';
import CommentDataService from "../services/service";
import mailIcon from "../img/mail-icon.png";
export function AddComment(props) {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  function saveComment(e) {
    e.preventDefault();
    var data = {
      name: name,
      email: email,
      comment: comment
    };

    console.log(data);

    CommentDataService.create(data)
      .then(response => {
        dispatch(addComment(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  }

    return (
      <div className="addcomment-block">
        <div className="addcomment-block__wrapper wrapper">
          <img alt="Изображение письма в красном круге." className="companion-image" src={mailIcon} />
          <form onSubmit={saveComment} className="addcomment-form">
            <div className="addcomment-form__wrapper row">
              <div className="col-12 col-md">
                <div className="addcomment-form__input-block name-block">
                  <label className="addcomment-form__labelname label" htmlFor="name">Имя</label>
                  <input
                    aria-label="Имя"
                    type="text"
                    className="addcomment-form__name input"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                  />
                </div>
                <div className="addcomment-form__input-block email-block">
                  <label className="addcomment-form__labelemail label" htmlFor="email">E-Mail</label>
                  <input
                    aria-label="Email"
                    type="email"
                    className="addcomment-form__email input"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="addcomment-form__textarea-block">
                  <label className="addcomment-form__labelcomment label" htmlFor="comment">Комментарий</label>
                  <textarea className="addcomment-form__comment textarea" required value={comment}
                    onChange={(e) => setComment(e.target.value)}
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