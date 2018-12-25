document.getElementById('primeiro').classList.add('destaque')

const divs = document.getElementsByTagName('div')
Array.from(divs).forEach(e => e.classList.remove('destaque'))

const divsArray = [...divs]
divsArray.forEach(e => e.classList.add('destaque'))

document.getElementsByClassName('ultimo')[0].classList.toggle('destaque')