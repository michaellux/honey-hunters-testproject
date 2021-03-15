import http from "../http-common";

class CommentDataService {
  getAll() {
    return http.get("/comments");
  }

  get(id) {
    return http.get(`/comments/${id}`);
  }

  create(data) {
    return http.post("/comments", data);
  }
}

export default new CommentDataService();