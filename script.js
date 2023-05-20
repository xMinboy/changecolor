let colors = ['red', 'blue', 'green', 'yellow', 'purple']

const body = document.querySelector('body');
const button = document.querySelector('.btn');
console.log(body, button)

button.addEventListener('click', function changeBackground(color) {
    let i = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[i];
});