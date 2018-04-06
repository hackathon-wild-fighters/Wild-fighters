export const fight = (J1champ, J2champ) => {
  const random = () => {
    return Math.floor(Math.random() * (500 - 1) + 1)
  }
  console.log(J1champ, J2champ)
  const randomBackground = () => {
    return Math.floor(Math.random() * (9 - 1) + 1)
  }
  document.getElementById('main').innerHTML = `<div id="arena${randomBackground()}">
<div class="container-fluid">
<div class="baredevie row">
  <div id= "bareDeVie1" class="col-6">100%</div>
  <div id= "bareDeVie2" class="col-6">100%</div>
</div>
<div class="powers row">
  <div class="powers1 col-6">
    <div class="container-fluid spell" >
    <img src="${J1champ[1].img}" class="img-fluid col-2 offset-1" alt="" >
    <img src="${J1champ[2].img}" class="img-fluid col-2 " alt="">
    <img src="${J1champ[3].img}" class="img-fluid col-2" alt="">
    </div>
  </div>


  <div class="powers2 col-6">
    <div class="container-fluid spell">
    <img src="${J2champ[1].img}" alt="" class="img-fluid col-2 offset-1">
    <img src="${J2champ[2].img}" alt="" class="img-fluid col-2">
    <img src="${J2champ[3].img}" alt="" class="img-fluid col-2">
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

power1 = ((J1champ[0].powerstats.power + pouv) + (J1champ[0].powerstats.intelligence + int) + (J1champ[0].powerstats.strength + force) + (J1champ[0].powerstats.combat + fight)) / 4
image1 = J1champ[0].images.sm
document.getElementById('hero1').innerHTML = `<img src="${image1}" class="img-fluid" >`

power2 = (J2champ[0].powerstats.power + J2champ[0].powerstats.intelligence + J2champ[0].powerstats.strength + J2champ[0].powerstats.combat) / 4
image2 = J2champ[0].images.sm
document.getElementById('hero2').innerHTML = `<img src="${image2}" class="img-fluid">`


  let life1 = 100
  let life2 = 100
  const audio = new Audio('songs/coup.mp3');
  const audio2 = new Audio('songs/coup2.mp3');
  const fightMusic = new Audio('songs/fightMusic.mp3');
  fightMusic.play()
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
      if (life1 > 0) {
        lifeBar(life1, 'bareDeVie1', life1)

        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmgEffect"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
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
      if (life1 > 0) {
        lifeBar(life1, 'bareDeVie1', life1)

        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmg2"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
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
    if (keyName === 'ArrowDown') {
      life1 -= Math.floor(power1 / 5)
      console.log(life1)
      audio.play();
      if (life1 > 0) {
        lifeBar(life1, 'bareDeVie1', life1)

        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 dmg3"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
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
    if (keyName === 'q') {
      life2 -= Math.floor(power2 / 5)
      console.log(life2)
      audio2.play();
      if (life2 > 0) {
        lifeBar(life2, 'bareDeVie2', life2)
        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmgEffect"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
        lifeBar(0, 'bareDeVie2', 0)
        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1  gagne"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 gameover">GAME OVER</div>`
      }
    }
  })

  document.addEventListener('keydown', (event) => {
    let keyName = event.key
    console.log(event.key)
    if (keyName === 'd') {
      life2 -= Math.floor(power2 / 5)
      console.log(life2)
      audio2.play();
      if (life2 > 0) {
        lifeBar(life2, 'bareDeVie2', life2)
        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmg2"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
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
    if (keyName === 's') {
      life2 -= Math.floor(power2 / 5)
      console.log(life2)
      audio2.play();
      if (life2 > 0) {
        lifeBar(life2, 'bareDeVie2', life2)
        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1"><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 dmg3"><img src="${image2}" class="img-fluid"></div>
    `
      } else {
        lifeBar(0, 'bareDeVie2', 0)
        document.getElementById('superheros').innerHTML = `
    <div id="hero1" class="col-4 offset-1 gagne "><img src="${image1}" class="img-fluid"></div>
    <div id="hero2" class="col-4 offset-2 gameover">GAME OVER</div>`
      }
    }
  })
}