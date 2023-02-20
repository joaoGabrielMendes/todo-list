const db = require("../models/index");
const List = db.list;

exports.home = (req, res) => {
  res.json({ message: "hello from the other side." });
};

exports.create = (req, res) => {
  const item = {
    date: req.body.date,
    todo_title: req.body.todo_title,
    todo_description: req.body.todo_description,
    todo_status: req.body.todo_status,
  };

  List.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List Item.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  List.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        return res.send({
          message: "List Item was deleted successfully!",
        });
      }
      return res.send({
        message: `Cannot delete List Item with id=${id}. Maybe Item was not found!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete List Item with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  List.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} List Items were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all list items.",
      });
    });
};

exports.findAll = (req, res) => {
  List.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the full List of Items.",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  List.findByPk(id, { where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the full List of Items.",
      });
    });
};

exports.check = (req, res) => {
  const id = req.params.id;

  List.findByPk(id, { where: { id: id } })
    .then((data) => {
      if (data.todo_status == false) {
        List.update(
          {
            todo_status: 1,
          },
          {
            where: { id: id },
          }
        );
      } else {
        List.update(
          {
            todo_status: 0,
          },
          {
            where: { id: id },
          }
        );
      }
    })
    .then(() => {
      return res.send({
        message: "List Item was update successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the full List of Items.",
      });
    });
};
