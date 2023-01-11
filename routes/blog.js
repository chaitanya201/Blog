const router = require("express").Router();
const blogController = require("../controllers/blogController");
router.post("/create", blogController.addBlog);
router.patch("/update", blogController.updateBlog);
router.delete("/delete", blogController.deleteBlog);
router.get("/get", blogController.getAllBlogs);

module.exports = router;
