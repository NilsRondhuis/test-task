import './css/main.scss';
import serverLs from './data/dataInfo';
import refs from './js/refs';
import { onSubmit, createEl } from './js/app';

const LOCAL_STORAGE = 'task-info';

refs.form.addEventListener('submit', onSubmit);

localStorage.setItem(LOCAL_STORAGE, JSON.stringify(serverLs.dataBase));
const getStringLs = localStorage.getItem(LOCAL_STORAGE);
const parseStringLs = JSON.parse(getStringLs);
console.log(parseStringLs);

const result = createEl(parseStringLs);
refs.root.innerHTML = [...result].join('');