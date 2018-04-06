const random = () => {
  return Math.floor(Math.random() * (500 - 1) + 1)
}

let image1 = ''
let image2 = ''

let power1 = ''
let power2 = ''


/* "intelligence": 88,
      "strength": 28,
      "speed": 35,
      "durability": 65,
      "power": 100,
      "combat": 85*/ 

fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
  .then(res => res.json())
  .then(resJson => {
    power1 = (resJson.powerstats.power + resJson.powerstats.intelligence + resJson.powerstats.strength + resJson.powerstats.combat) / 4
    image1 = resJson.images.sm
    document.getElementById('hero1').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid" >`
  })
fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
  .then(res => res.json())
  .then(resJson => {
    power2 = (resJson.powerstats.power + resJson.powerstats.intelligence + resJson.powerstats.strength + resJson.powerstats.combat) / 4
    image2 = resJson.images.sm
    document.getElementById('hero2').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid">`
  })

let life1 = 100
let life2 = 100
//  barre de vie
const lifeBar = (lifeHero, idName, lifeMax) => {
  document.getElementById(idName).innerHTML = `<div class="progress">
<div class="progress-bar bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" 
style="width: ${lifeMax}%">${lifeHero}%
<span class="sr-only"></span>
</div>
</div>`
}

lifeBar(life1, 'bareDeVie1', life1)
lifeBar(life2, 'bareDeVie2', life2)
//appuie sur touche -> reduit barre de vie + effet image
document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'e') {
    life1 -= Math.floor(power1 / 5)
    console.log(life1)
    lifeBar(life1, 'bareDeVie1', life1)
    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmgEffect"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'ArrowLeft') {
    life2 -= Math.floor(power2 / 5)
    lifeBar(life2, 'bareDeVie2', life2)
    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmgEffect"><img src="${image2}" class="img-fluid"></div>
    `
  }
})