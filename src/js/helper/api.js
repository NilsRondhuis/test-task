import refs from "../refs";
import markup from '../../templates/markup.hbs';
import axios from 'axios';
import { сreatingMarkup } from '../markup';

export function createElementInAxios(value) {
    axios.post('http://localhost:3000/items', { text: value })
    .then(res => {
        // refs.list.insertAdjacentHTML('beforeend', markup(res.data));
        refs.list.insertAdjacentHTML('beforeend', сreatingMarkup(res.data));
    })
    .catch(err => console.log(err));
}

export function getElements() {
    axios.get('http://localhost:3000/items')
    .then(res => {
        // refs.list.insertAdjacentHTML('beforeend', markup(res.data));
        refs.list.insertAdjacentHTML('beforeend', сreatingMarkup(res.data));
    })
    .catch(err => console.log(err));
}

export function deleteElementInAxios(e) {
    const id = e.target.id;

    if (id) {
        axios.delete(`http://localhost:3000/items/${id}`)
        .catch(console.log);
    }
}


// запуски через феч

// export function createLi(value) {
//     fetch('http://localhost:3000/items', {
//         method: 'POST',
//         body: JSON.stringify({ text: value }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(res => res.json())
//     .then(res => {
//         refs.list.insertAdjacentHTML('beforeend', markup(res));
//     })
//     .catch(err => console.log(err));
// }

// export function deleteElement(e) {
//     const id = e.target.id;
//     if (id) {
//         fetch(`http://localhost:3000/items/${id}`, {
//             method: 'DELETE',
//         })
//         .then(res => res.json())
//         .then(console.log)
//         .catch(console.log);
//     }
// }
