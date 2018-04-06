const random = () => {
  return Math.floor(Math.random() * (500 - 1) + 1)
}

const randomBackground =() =>{
  return Math.floor(Math.random()*(9-1)+1)
}
document.getElementById('main').innerHTML =`<div id="arena${randomBackground()}">
<div class="container-fluid">
<div class="baredevie row">
  <div id= "bareDeVie1" class=" col-5">100%</div>
  <div id= "bareDeVie2" class="col-5 offset-1">100%</div>
</div>
<div class="powers row">
  <div class="powers1 col-6 ">
    <div class="container-fluid">
    <img src="icons_spells/attaque cérébral.jpg" class="img-fluid col-2 offset-1" alt="" >
    <img src="icons_spells/attaque du phénix.jpg" class="img-fluid col-2 " alt="">
    <img src="icons_spells/attaque toxique.jpg" class="img-fluid col-2" alt="">
    </div>
  </div>


  <div class="powers2 col-6">
    <div class="container-fluid">
    <img src="icons_spells/pluie de feu.jpg" alt="" class="img-fluid col-2 offset-1">
    <img src="icons_spells/énergie pure.jpg" alt="" class="img-fluid col-2">
    <img src="icons_spells/hachoir.jpg" alt="" class="img-fluid col-2">
  </div>
  </div>
</div>
<div id="superheros" class="row">
  <div id="hero1" class="col-4 offset-1"></div>
  <div id="hero2" class="col-4 offset-2"></div>
</div>
</div>
</div>`
let image1 = ''
let image2 = ''

let power1 = ''
let power2 = ''
let pouv = 1
let int = 1
let force = 1
let fight = 1

/* "intelligence": 88,
      "strength": 28,
      "speed": 35,
      "durability": 65,
      "power": 100,
      "combat": 85*/

fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
  .then(res => res.json())
  .then(resJson => {
    power1 = ((resJson.powerstats.power + pouv)+ (resJson.powerstats.intelligence + int) + (resJson.powerstats.strength + force) + (resJson.powerstats.combat + fight)) / 4
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
const audio = new Audio('songs/coup.mp3');
const audio2 = new Audio('songs/coup2.mp3');

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
  if (keyName === 'ArrowLeft') {
    life1 -= Math.floor(power1 / 5)
    console.log(life1)
    audio.play();
    if(life1>0){
    lifeBar(life1, 'bareDeVie1', life1)

    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmgEffect"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie1', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1  gameover">GAME OVER</div>
    <div id="hero2" class="col-4 offset-2 gagne"><img src="${image2}" class="img-fluid"></div>
    `}

  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'ArrowRight') {
    life1 -= Math.floor(power1 / 5)
    console.log(life1)
    audio.play();
    if(life1>0){
    lifeBar(life1, 'bareDeVie1', life1)

    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmg2"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie1', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1  gameover">GAME OVER</div>
    <div id="hero2" class="col-4 offset-2 gagne"><img src="${image2}" class="img-fluid"></div>
    `}

  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'ArrowUp') {
    life1 -= Math.floor(power1 / 5)
    console.log(life1)
    audio.play();
    if(life1>0){
    lifeBar(life1, 'bareDeVie1', life1)

    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmg3"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie1', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1  gameover">GAME OVER</div>
    <div id="hero2" class="col-4 offset-2 gagne"><img src="${image2}" class="img-fluid"></div>
    `}

  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 's') {
    life2 -= Math.floor(power2 / 5)
    console.log(life2)
    audio2.play();
    if(life2>0){
    lifeBar(life2, 'bareDeVie2', life2)
    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmgEffect"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie2', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 gagne "><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 gameover">GAME OVER</div>`
    }
  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'f') {
    life2 -= Math.floor(power2 / 5)
    console.log(life2)
    audio2.play();
    if(life2>0){
    lifeBar(life2, 'bareDeVie2', life2)
    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmg2"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie2', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 gagne "><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 gameover">GAME OVER</div>`
    }
  }
})

document.addEventListener('keydown', (event) => {
  let keyName = event.key
  console.log(event.key)
  if (keyName === 'e') {
    life2 -= Math.floor(power2 / 5)
    console.log(life2)
    audio2.play();
    if(life2>0){
    lifeBar(life2, 'bareDeVie2', life2)
    document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmg3"><img src="${image2}" class="img-fluid"></div>
    `
    }else{
      lifeBar(0, 'bareDeVie2', 0)
      document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 gagne "><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 gameover">GAME OVER</div>`
    }
  }
})
