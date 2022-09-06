const work1 = document.getElementById('work1');
const work2 = document.getElementById('work2');
const work3 = document.getElementById('work3');



const items = [work1, work2, work3]
const nbSlide = items.length;
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left')
let count = 0;

console.log(items)

function slideSuivante() {
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
}

suivant.addEventListener('click', slideSuivante)


function slidePrecedente() {
    items[count].classList.remove('active')

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)
