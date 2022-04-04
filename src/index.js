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
