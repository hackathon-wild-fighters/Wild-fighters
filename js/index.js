const random = () => {
  return Math.floor(Math.random() * (500 - 1) + 1)
}


fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
  .then(res => res.json())
  .then(resJson => {

    document.getElementById('hero1').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid" >`
  })
fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
  .then(res => res.json())
  .then(resJson => {

    document.getElementById('hero2').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid">`
  })

let life1 = 100
let life2 = 100

const lifeBar = (lifeHero, idName, lifeMax) => {
  document.getElementById(idName).innerHTML = `<div class="progress">
<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" 
style="width: ${lifeMax}%">
<span class="sr-only"></span>
</div>
</div>`
}

lifeBar(life1, 'bareDeVie1', life1)
lifeBar(life2, 'bareDeVie2', life2)

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'e') {
    life1 -= 10
    lifeBar(life1, 'bareDeVie1', life1)
  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'ArrowLeft') {
    life2 -= 10
    lifeBar(life2, 'bareDeVie2', life2)
  }
})