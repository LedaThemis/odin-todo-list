import './styles.css';
import clearIcon from './clear_icon.svg';
import editIcon from './edit_icon.svg';

const deleteButton = document.querySelector('#delete-task');

deleteButton.src = clearIcon;

const editButton = document.querySelector('#edit-task');

editButton.src = editIcon;
