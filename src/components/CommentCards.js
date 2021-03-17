import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentDataService from "../services/service";
import { loadComments, selectComments } from '../reducer';
export function CommentCards() {
  const { comments } = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveComments();
  }, []);

  function retrieveComments() {
    CommentDataService.getAll()
      .then(response => {
        dispatch(loadComments(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  }

    return (
      <div className="commentcards">
        <div className="commentcards__wrapper">
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
      </div>
    );
}