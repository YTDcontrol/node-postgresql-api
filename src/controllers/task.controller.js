import Task from '../models/Tasks';

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    }, {
        fields: ['name', 'done', 'projectid']
    });
    res.json({message: 'New task created'});
}

export async function getTask(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({tasks});
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    const task = await Task.findOne({
        attributes: ['id', 'name', 'done', 'projectid'],
        where: {
            id
        }
    });

    const updatedTask = Task.update({
        name,
        done,
        projectid
    }, {
        where: {
            id
        }
    });

    res.json({
        message: 'Task Updated Succesfully',
        updatedTask
    })

}

export async function deleteTask(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Task Deleted Succesfully',
        count: deleteRowCount
    });
}

export async function getOneTask(req, res) {
    const { id } = req.params;
    const task = await Task.findOne({
        where: {
            id
        }
    });
    res.json(task);
}

export async function getTaskByProject(req, res) {
    const { projectid } = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'],
        where: {
            projectid
        }
    });
    res.json({tasks});
}