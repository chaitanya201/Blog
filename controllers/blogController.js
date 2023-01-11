const dbConn = require("../config/dbConfig");
const db = require("../model");
const Blog = db.blogs;
const Op = db.Sequelize.Op;
exports.addBlog = (req, res) => {
  // we can add as many fields as we want.
  if(!req.body) {
    return res.status(400).json({
      status: false,
      message: "Invalid data"
    })
  }
  Blog.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Blog."
    });
  });
  
};

exports.updateBlog = (req, res) => {
  const { id, title, description } = req.body;
  if (!id)
    return res.status(400).json({
      status: false,
      message: "Blog id is absent",
    });

    Blog.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Blog was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Blog with id=${id}. Maybe Blog was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Blog with id=" + id
        });
      });
};

exports.deleteBlog = (req, res) => {
  const { id } = req.query;
  Blog.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Blog was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Blog with id=${id}. Maybe Blog was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Blog with id=" + id
      });
    });
};

exports.getAllBlogs = (req, res) => {
  const {id} = req.query
  if(!id) return res.status(400).json({
    status: false,
    message: "Provide Id"
  })
  Blog.findAll({ where: { id:id } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Blogs."
    });
  });
};
