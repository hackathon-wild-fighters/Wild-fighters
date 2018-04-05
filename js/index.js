fetch('https://akabab.github.io/superhero-api/api/id/1.json')
.then(res => res.json())
.then(resJson =>{
  console.log(resJson.images.sm)
  document.getElementById('hero1').innerHTML = `<img "${}"`
})
