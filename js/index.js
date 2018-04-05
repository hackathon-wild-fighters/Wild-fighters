const random = () =>{
  return Math.floor(Math.random() * (500 - 1) + 1)
}


fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
.then(res => res.json())
.then(resJson =>{

  document.getElementById('hero1').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid" >`
})
fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${random()}.json`)
.then(res => res.json())
.then(resJson =>{

  document.getElementById('hero2').innerHTML = `<img src="${resJson.images.sm}" class="img-fluid">`
})
