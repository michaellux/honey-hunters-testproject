const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const comment = {
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
  };

  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Comment.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comment with id=" + id
      });
    });
};