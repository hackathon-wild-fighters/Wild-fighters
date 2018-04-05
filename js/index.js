fetch('https://akabab.github.io/superhero-api/api/id/1.json')
.then(res => res.json())
.then(resJson =>{
  console.log(resJson.images.sm)
  document.getElementById('hero1').innerHTML = `<img src="${resJson.images.sm}">`
})
fetch('https://akabab.github.io/superhero-api/api/id/2.json')
.then(res => res.json())
.then(resJson =>{
  console.log(resJson.images.sm)
  document.getElementById('hero2').innerHTML = `<img src="${resJson.images.sm}">`
})
