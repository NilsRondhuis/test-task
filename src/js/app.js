import serverLs from '../data/dataInfo';
import refs from './refs';

const LOCAL_STORAGE = 'task-info';

export function onSubmit(e) {
    e.preventDefault();
    const value = refs.input.value;

    serverLs.dataBase.push(value);
    
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(serverLs.dataBase));
    const getStringLs = localStorage.getItem(LOCAL_STORAGE);
    const parseStringLs = JSON.parse(getStringLs);

    const result = createEl(parseStringLs);
    refs.root.innerHTML = [...result].join('');
    e.currentTarget.reset();
}

export function createEl(element) {
    return element.map(task => {

        return `<li>${task}</li>`;
    });
}

