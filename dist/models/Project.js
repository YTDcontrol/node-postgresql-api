"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].INTEGER
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_Tasks["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

_Tasks["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;