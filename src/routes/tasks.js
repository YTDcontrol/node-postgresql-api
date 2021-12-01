import { Router } from "express";
const router = Router();

import { createTask, getTask, deleteTask, getOneTask, updateTask, getTaskByProject } from '../controllers/task.controller';

// /api/tasks/
router.post('/', createTask);
router.get('/', getTask);

// /api/projects/:projectID
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// /api/tasks/projects/:projectid
router.get('/projects/:projectid', getTaskByProject)

export default router;