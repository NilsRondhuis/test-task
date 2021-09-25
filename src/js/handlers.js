import refs from "./refs";
import markup from '../templates/markup.hbs';
import dataBase from '../../db.json';
import { 
    createLi, 
    createElementInAxios, 
    getElements,
    deleteElementInAxios,  
} from './helper/api';
import axios from "axios";


function onSubmitForm(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    createElementInAxios(value);
    e.currentTarget.reset();
}


window.addEventListener('DOMContentLoaded', getElements); //запуск Ф при первой загруз файла
refs.form.addEventListener('submit', onSubmitForm);

refs.list.addEventListener('click', deleteElementInAxios);