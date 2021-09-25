export function сreatingMarkup(arr) {
    const markup = arr.map(el => `
    <li>${el.text} <button id="${el.id}">Удалить</button></li>
    `);
    return markup.join('');
}