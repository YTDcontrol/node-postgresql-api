"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
// /api/tasks/
router.post('/', _task.createTask);
router.get('/', _task.getTask); // /api/projects/:projectID

router.get('/:id', _task.getOneTask);
router["delete"]('/:id', _task.deleteTask);
router.put('/:id', _task.updateTask); // /api/tasks/projects/:projectid

router.get('/projects/:projectid', _task.getTaskByProject);
var _default = router;
exports["default"] = _default;