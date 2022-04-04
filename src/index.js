import './styles.css';
import editIcon from './edit_icon.svg';
import clearIcon from './clear_icon.svg';

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

const createOptionElement = (name, value) => {
  const option = document.createElement('option');
  option.innerText = name;
  option.value = value;

  return option;
};

const getProjectsDropdownValues = (projects) => {
  return projects.map((project, i) => createOptionElement(project, i));
};

const showAddTaskForm = () => {
  const addTaskFormDiv = document.querySelector('#add-task-div');
  addTaskFormDiv.style.display = 'grid';
};

const hideAddTaskForm = () => {
  const addTaskFormDiv = document.querySelector('#add-task-div');
  addTaskFormDiv.style.display = 'none';
};

const showAddProjectForm = () => {
  const addProjectFormDiv = document.querySelector('#add-project-div');
  addProjectFormDiv.style.display = 'grid';
};

const hideAddProjectForm = () => {
  const addProjectFormDiv = document.querySelector('#add-project-div');
  addProjectFormDiv.style.display = 'none';
};

function handleAddTask(e) {
  const projectsDropdown = document.querySelector('#task-project');
  const dropdownValues = getProjectsDropdownValues(storage.getProjects());

  projectsDropdown.replaceChildren();

  const emptyOption = createOptionElement('', '');
  emptyOption.selected = true;
  emptyOption.disabled = true;
  projectsDropdown.appendChild(emptyOption);

  dropdownValues.forEach((dropdownValue) =>
    projectsDropdown.appendChild(dropdownValue)
  );
  showAddTaskForm();
}

function handleCloseForm(e) {
  hideAddTaskForm();
}

function handleSubmitTask(e) {
  const form = document.querySelector('#add-task-form');
  const formData = new FormData(form);
  const title = formData.get('task-name');
  const dueDate = formData.get('task-dueDate');
  const priority = formData.get('task-priority');
  const projectId = formData.get('task-project');

  const p = document.querySelector('#fill-all-required-fields');
  if (!title || !dueDate | !priority || !projectId) {
    p.textContent = 'Please fill all the fields.';
    return;
  }
  p.textContent = '';

  const task = createTask(title, dueDate, priority);

  storage.addTask(task, projectId);

  form.reset();
  hideAddTaskForm();

  renderTasks(storage.getTasks());
}

function handleAddProject(e) {
  showAddProjectForm();
}

const handleCloseProjectForm = () => {
  hideAddProjectForm();
};

function handleSubmitProject(e) {
  const form = document.querySelector('#add-project-form');
  const formData = new FormData(form);
  const name = formData.get('project-name');

  const p = document.querySelector('#fill-project-name');
  if (!name) {
    p.textContent = 'Please provide a project name.';
    return;
  }
  p.textContent = '';

  storage.addProject(name);

  form.reset();
  hideAddProjectForm();
}

const getTaskHTML = (task, id) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskInfoDiv = document.createElement('div');
  taskInfoDiv.classList.add('task-info');

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.name = `task-checkbox-${id}`;
  taskCheckbox.id = `task-checkbox-${id}`;
  taskCheckbox.checked = task.task.getIsDone();
  taskCheckbox.classList.add('task-checkbox');
  taskCheckbox.addEventListener('click', (e) => handleTaskCheckboxClick(e, id));

  const taskTitle = document.createElement('p');
  taskTitle.id = `task-title-${id}`;
  taskTitle.classList.add('task-title');
  taskTitle.innerText = task.task.title;

  taskInfoDiv.appendChild(taskCheckbox);
  taskInfoDiv.appendChild(taskTitle);

  const taskButtonsDiv = document.createElement('div');
  taskButtonsDiv.classList.add('task-buttons');

  const editTaskButton = document.createElement('img');
  editTaskButton.src = editIcon;
  editTaskButton.alt = 'edit task';
  editTaskButton.id = `task-edit-${id}`;
  editTaskButton.classList.add('task-edit');

  const deleteTaskButton = document.createElement('img');
  deleteTaskButton.src = clearIcon;
  deleteTaskButton.alt = 'delete task';
  deleteTaskButton.id = `task-delete-${id}`;
  deleteTaskButton.classList.add('task-delete');
  deleteTaskButton.addEventListener('click', (e) => handleTaskDelete(e, id));

  taskButtonsDiv.appendChild(editTaskButton);
  taskButtonsDiv.appendChild(deleteTaskButton);

  taskDiv.appendChild(taskInfoDiv);
  taskDiv.appendChild(taskButtonsDiv);

  return taskDiv;
};

const handleTaskCheckboxClick = (e, taskId) => {
  if (e.target.checked) {
    storage.getTasks()[taskId].task.setDone();
  } else {
    storage.getTasks()[taskId].task.setDoing();
  }
};

const handleTaskDelete = (e, taskId) => {
  storage.removeTask(taskId);
  renderTasks(storage.getTasks());
};

const renderTasks = (tasks) => {
  const main = document.querySelector('#main');
  main.replaceChildren();
  tasks.forEach((task, id) => {
    const taskHTML = getTaskHTML(task, id);
    main.appendChild(taskHTML);
  });
};

const addTaskButton = document.querySelector('#add-task');
addTaskButton.addEventListener('click', handleAddTask);

const closeFormButton = document.querySelector('#close-task-form');
closeFormButton.addEventListener('click', handleCloseForm);

const submitTaskButton = document.querySelector('#submit-task');
submitTaskButton.addEventListener('click', handleSubmitTask);

const addProjectButton = document.querySelector('#add-project');
addProjectButton.addEventListener('click', handleAddProject);

const closeProjectForm = document.querySelector('#close-project-form');
closeProjectForm.addEventListener('click', handleCloseProjectForm);

const submitProjectButton = document.querySelector('#submit-project');
submitProjectButton.addEventListener('click', handleSubmitProject);

const task = createTask('Buy Apples', '2022-04-06', 'high');

task.setDone();

storage.addTask(task, 0);

renderTasks(storage.getTasks());
