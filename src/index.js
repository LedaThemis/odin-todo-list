import './styles.css';

const createTask = (title, dueDate, priority) => {
  let isDone = false;
  let _priority = priority;

  const setDone = () => {
    isDone = true;
  };

  const setDoing = () => {
    isDone = false;
  };

  const getIsDone = () => {
    return isDone;
  };

  const setPriority = (newPriority) => {
    _priority = newPriority;
  };

  const getPriority = () => {
    return _priority;
  };

  return {
    title,
    dueDate,
    setDone,
    setDoing,
    getIsDone,
    getPriority,
    setPriority,
  };
};

const storage = (() => {
  let projects = ['default'];
  let tasks = [];

  const addProject = (name) => {
    projects.push(name);
  };
  const removeProject = (id) => {
    projects = projects.slice(0, id).concat(projects.slice(id + 1));
  };

  const getProjects = () => {
    return projects;
  };

  const addTask = (task, projectId) => {
    tasks.push({ task, projectId });
  };

  const removeTask = (id) => {
    tasks = tasks.slice(0, id).concat(tasks.slice(id + 1));
  };

  const getTasks = () => {
    return tasks;
  };

  return {
    addTask,
    removeTask,
    getTasks,
    addProject,
    removeProject,
    getProjects,
  };
})();

const showAddTaskForm = () => {
  const addTaskFormDiv = document.querySelector('#add-task-div');
  addTaskFormDiv.style.display = 'grid';
};

const hideAddTaskForm = () => {
  const addTaskFormDiv = document.querySelector('#add-task-div');
  addTaskFormDiv.style.display = 'none';
};

function handleAddTask(e) {
  showAddTaskForm();
}

function handleCloseForm(e) {
  hideAddTaskForm();
}

function handleSubmitTask(e) {
  const formData = new FormData(document.querySelector('#add-task-form'));
  const title = formData.get('task-name');
  const dueDate = formData.get('task-dueDate');
  const priority = formData.get('task-priority');
  const project = formData.get('task-project');

  const p = document.querySelector('#fill-all-required-fields');
  if (!title || !dueDate | !priority || !project) {
    p.textContent = 'Please fill all the fields.';
    return;
  }
  p.textContent = '';

  const task = createTask(title, dueDate, priority, project);
}

const addTaskButton = document.querySelector('#add-task');
addTaskButton.addEventListener('click', handleAddTask);

const closeFormButton = document.querySelector('#close-form');
closeFormButton.addEventListener('click', handleCloseForm);

const submitTaskButton = document.querySelector('#submit-task');
submitTaskButton.addEventListener('click', handleSubmitTask);
