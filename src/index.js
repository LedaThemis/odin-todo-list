import './styles.css';
import editIcon from './edit_icon.svg';
import clearIcon from './clear_icon.svg';

let SELECTED_STATUS = 0;
let SELECTED_PROJECT_ID = -1;

const helpers = (() => {
  const convertTaskForLocalStorage = (task) => {
    const taskName = task.getTitle();
    const taskDueDate = task.getDueDate();
    const taskPriority = task.getPriority();
    const taskIsDone = task.getIsDone();

    return { taskName, taskDueDate, taskPriority, taskIsDone };
  };

  const convertTaskForUse = ({
    taskName,
    taskDueDate,
    taskPriority,
    taskIsDone,
  }) => {
    const task = createTask(taskName, taskDueDate, taskPriority);
    if (taskIsDone) {
      task.setDone();
    }
    return task;
  };

  return {
    convertTaskForLocalStorage,
    convertTaskForUse,
  };
})();

const createTask = (title, dueDate, priority) => {
  let isDone = false;
  let _priority = priority;
  let _title = title;
  let _dueDate = dueDate;

  const getTitle = () => _title;
  const getDueDate = () => _dueDate;
  const getIsDone = () => isDone;
  const getPriority = () => _priority;

  const setTitle = (newTitle) => {
    _title = newTitle;
  };

  const setDueDate = (newDueDate) => {
    _dueDate = newDueDate;
  };

  const setPriority = (newPriority) => {
    _priority = newPriority;
  };

  const setDone = () => {
    isDone = true;
  };

  const setDoing = () => {
    isDone = false;
  };

  return {
    getTitle,
    getDueDate,
    getPriority,
    getIsDone,
    setTitle,
    setDueDate,
    setPriority,
    setDone,
    setDoing,
  };
};

const storage = (() => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = ['default'];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));

    tasks = localStorageTasks.map((t) => {
      const projectId = t.projectId;
      const task = helpers.convertTaskForUse(t.task);

      return { task, projectId };
    });
  }

  const addProject = (name) => {
    projects.push(name);
  };
  const removeProject = (id) => {
    projects = projects.slice(0, id).concat(projects.slice(id + 1));
    tasks = tasks.filter((task) => task.projectId !== id);
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

  const setTaskProjectId = (taskId, newProjectId) => {
    tasks[taskId].projectId = newProjectId;
  };

  return {
    addTask,
    removeTask,
    getTasks,
    addProject,
    removeProject,
    getProjects,
    setTaskProjectId,
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

const showAddProjectForm = () => {
  const addProjectFormDiv = document.querySelector('#add-project-div');
  addProjectFormDiv.style.display = 'grid';
};

const showEditTaskForm = () => {
  const addProjectFormDiv = document.querySelector('#edit-task-div');
  addProjectFormDiv.style.display = 'grid';
};

const hideAddTaskForm = () => {
  const addTaskFormDiv = document.querySelector('#add-task-div');
  addTaskFormDiv.style.display = 'none';
};

const hideAddProjectForm = () => {
  const addProjectFormDiv = document.querySelector('#add-project-div');
  addProjectFormDiv.style.display = 'none';
};

const hideEditTaskForm = () => {
  const addProjectFormDiv = document.querySelector('#edit-task-div');
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
  e.preventDefault();
  const form = document.querySelector('#add-task-form');
  const formData = new FormData(form);
  const title = formData.get('task-name');
  const dueDate = formData.get('task-dueDate');
  const priority = formData.get('task-priority');
  const projectId = parseInt(formData.get('task-project'));

  const p = document.querySelector('#fill-all-required-fields');
  if (
    title === '' ||
    (dueDate === '') | (priority === null) ||
    isNaN(projectId)
  ) {
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
const handleProjectDelete = (e, projectId) => {
  storage.removeProject(projectId);
  renderProjects(storage.getProjects());
  renderTasks(storage.getTasks());
};

const handleCloseProjectForm = () => {
  hideAddProjectForm();
};

function handleSubmitProject(e) {
  e.preventDefault();
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

  renderProjects(storage.getProjects());
}

const handleProjectSelect = (e, id) => {
  SELECTED_PROJECT_ID = id;
  renderProjects(storage.getProjects());
  renderTasks(storage.getTasks());
};

const handleStatusClick = (e, id) => {
  SELECTED_STATUS = id;
  renderStatus();
  renderTasks(storage.getTasks());
};

const passFilter = (task, projectId) => {
  const inProject = (projectId) => {
    return SELECTED_PROJECT_ID === -1 || projectId === SELECTED_PROJECT_ID;
  };
  const inStatus = (isDone) => {
    return (
      (isDone && SELECTED_STATUS === 1) || (!isDone && SELECTED_STATUS === 0)
    );
  };
  return inProject(projectId) && inStatus(task.task.getIsDone());
};

const getTaskHTML = (task, id, isHidden) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  if (isHidden) {
    taskDiv.style.display = 'none';
  }

  let priorityClass;
  switch (task.task.getPriority()) {
    case 'high':
      priorityClass = 'high-priority-task';
      break;
    case 'medium':
      priorityClass = 'medium-priority-task';
      break;
    case 'low':
      priorityClass = 'low-priority-task';
      break;
  }

  taskDiv.classList.add(priorityClass);

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
  taskTitle.innerText = task.task.getTitle();

  taskInfoDiv.appendChild(taskCheckbox);
  taskInfoDiv.appendChild(taskTitle);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('right-task-div');

  const taskDueDate = document.createElement('p');
  taskDueDate.innerText = task.task.getDueDate();

  const taskButtonsDiv = document.createElement('div');
  taskButtonsDiv.classList.add('task-buttons');

  const editTaskButton = document.createElement('img');
  editTaskButton.src = editIcon;
  editTaskButton.alt = 'edit task';
  editTaskButton.id = `task-edit-${id}`;
  editTaskButton.classList.add('task-edit');
  editTaskButton.addEventListener('click', (e) => handleTaskEdit(e, id));

  const deleteTaskButton = document.createElement('img');
  deleteTaskButton.src = clearIcon;
  deleteTaskButton.alt = 'delete task';
  deleteTaskButton.id = `task-delete-${id}`;
  deleteTaskButton.classList.add('task-delete');
  deleteTaskButton.addEventListener('click', (e) => handleTaskDelete(e, id));

  taskButtonsDiv.appendChild(editTaskButton);
  taskButtonsDiv.appendChild(deleteTaskButton);

  rightDiv.appendChild(taskDueDate);
  rightDiv.appendChild(taskButtonsDiv);

  taskDiv.appendChild(taskInfoDiv);
  taskDiv.appendChild(rightDiv);

  return taskDiv;
};

const getProjectHTML = (name, id) => {
  const li = document.createElement('li');
  li.classList.add('project-names');

  if (id === SELECTED_PROJECT_ID) {
    li.classList.add('selected-project');
  }
  if (SELECTED_PROJECT_ID === -1) {
    const viewAll = document.querySelector('#view-all');
    viewAll.classList.add('selected-project');
  } else {
    const viewAll = document.querySelector('#view-all');
    viewAll.classList.remove('selected-project');
  }

  li.addEventListener('click', (e) => handleProjectSelect(e, id));

  const p = document.createElement('p');
  p.innerText = name;
  p.classList.add('project-title');

  li.appendChild(p);

  if (id !== 0) {
    const button = document.createElement('button');
    button.classList.add('remove-project-buttons');
    button.type = 'button';
    button.dataset.key = id;
    button.innerText = '✕';

    button.addEventListener('click', (e) => handleProjectDelete(e, id));
    li.appendChild(button);
  }

  return li;
};

const getStatusHTML = (s, id) => {
  const li = document.createElement('li');
  li.innerText = s;
  li.classList.add('status-choice');

  li.addEventListener('click', (e) => handleStatusClick(e, id));
  if (SELECTED_STATUS === id) {
    li.classList.add('selected-status');
  }

  return li;
};

const handleTaskCheckboxClick = (e, taskId) => {
  if (e.target.checked) {
    storage.getTasks()[taskId].task.setDone();
  } else {
    storage.getTasks()[taskId].task.setDoing();
  }

  renderTasks(storage.getTasks());
};

const handleTaskDelete = (e, taskId) => {
  storage.removeTask(taskId);
  renderTasks(storage.getTasks());
};

const handleTaskEdit = (e, taskId) => {
  const projectsDropdown = document.querySelector('#edit-task-project');
  const dropdownValues = getProjectsDropdownValues(storage.getProjects());

  projectsDropdown.replaceChildren();

  const emptyOption = createOptionElement('', '');
  emptyOption.selected = true;
  emptyOption.disabled = true;
  projectsDropdown.appendChild(emptyOption);

  dropdownValues.forEach((dropdownValue) =>
    projectsDropdown.appendChild(dropdownValue)
  );

  const task = storage.getTasks()[taskId].task;

  const editTaskNameInput = document.querySelector('#edit-task-name');
  editTaskNameInput.value = task.getTitle();

  const editTaskDueDateInput = document.querySelector('#edit-task-dueDate');
  editTaskDueDateInput.value = task.getDueDate();

  const editTaskPriorityInput = document.querySelector('#edit-task-priority');
  editTaskPriorityInput.value = task.getPriority();

  const editTaskProjectInput = document.querySelector('#edit-task-project');
  editTaskProjectInput.value = storage.getTasks()[taskId].projectId;

  const submitEditTaskButton = document.querySelector('#submit-edit-task');
  submitEditTaskButton.dataset.key = taskId;

  showEditTaskForm();
};

function handleSubmitEditTask(e) {
  e.preventDefault();
  const form = document.querySelector('#edit-task-form');
  const formData = new FormData(form);
  const title = formData.get('edit-task-name');
  const dueDate = formData.get('edit-task-dueDate');
  const priority = formData.get('edit-task-priority');
  const projectId = parseInt(formData.get('edit-task-project'));

  const taskId = parseInt(e.target.dataset.key);
  const task = storage.getTasks()[taskId].task;

  if (title !== '') {
    task.setTitle(title);
  }

  if (dueDate !== '') {
    task.setDueDate(dueDate);
  }

  if (priority !== null) {
    task.setPriority(priority);
  }

  if (!isNaN(projectId)) {
    storage.setTaskProjectId(taskId, projectId);
  }

  form.reset();
  hideEditTaskForm();

  renderTasks(storage.getTasks());
}

const handleCloseEditTaskForm = (e) => {
  hideEditTaskForm();
};

const handleViewAllClick = (e) => {
  SELECTED_PROJECT_ID = -1;
  renderProjects(storage.getProjects());
  renderTasks(storage.getTasks());
};

const renderTasks = (tasks) => {
  const main = document.querySelector('#main');
  main.replaceChildren();

  tasks.forEach((task, id) => {
    const taskHTML = getTaskHTML(task, id, !passFilter(task, task.projectId));
    main.appendChild(taskHTML);
  });

  // localStorage
  tasks = storage.getTasks();
  const saveableTasks = tasks.map((t) => {
    const task = helpers.convertTaskForLocalStorage(t.task);
    const projectId = t.projectId;
    return { task, projectId };
  });

  localStorage.setItem('tasks', JSON.stringify(saveableTasks));
};

const renderProjects = (projects) => {
  const projectsUl = document.querySelector('#projects-list');
  projectsUl.replaceChildren();
  projects.forEach((project, id) => {
    const projectHTML = getProjectHTML(project, id);
    projectsUl.appendChild(projectHTML);
  });

  localStorage.setItem('projects', JSON.stringify(projects));
};

const renderStatus = () => {
  const status = ['Doing', 'Done'];
  const statusList = document.querySelector('#status-list');
  statusList.replaceChildren();

  status.forEach((s, i) => {
    const liHTML = getStatusHTML(s, i);
    statusList.appendChild(liHTML);
  });
};

const addTaskButton = document.querySelector('#add-task');
addTaskButton.addEventListener('click', handleAddTask);

const addProjectButton = document.querySelector('#add-project');
addProjectButton.addEventListener('click', handleAddProject);

const closeFormButton = document.querySelector('#close-task-form');
closeFormButton.addEventListener('click', handleCloseForm);

const closeProjectForm = document.querySelector('#close-project-form');
closeProjectForm.addEventListener('click', handleCloseProjectForm);

const closeEditTaskForm = document.querySelector('#close-task-edit-form');
closeEditTaskForm.addEventListener('click', handleCloseEditTaskForm);

const submitTaskButton = document.querySelector('#submit-task');
submitTaskButton.addEventListener('click', handleSubmitTask);

const submitProjectButton = document.querySelector('#submit-project');
submitProjectButton.addEventListener('click', handleSubmitProject);

const submitEditTaskButton = document.querySelector('#submit-edit-task');
submitEditTaskButton.addEventListener('click', handleSubmitEditTask);

const viewAll = document.querySelector('#view-all');
viewAll.addEventListener('click', handleViewAllClick);

renderTasks(storage.getTasks());
renderProjects(storage.getProjects());
renderStatus();
