fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
.then(res => res.json())
.then(json => {
	console.log(json)
	const poolHeroJ1 = []
	const poolHeroJ2 = []
	let i = 0

	while (i < 12){
		poolHeroJ1[i] = json[(Math.floor(Math.random() * 563))]
		poolHeroJ2[i] = json[(Math.floor(Math.random() * 563))]
		i++
	}
	
	poolHeroJ1.map(elem => document.getElementById('app').innerHTML += `<img src="${elem.images.xs}">`)
	document.getElementById('app').innerHTML += `<br>`
	poolHeroJ1.map(elem => document.getElementById('app').innerHTML += `<img src="${elem.images.sm}">`)
	document.getElementById('app').innerHTML += `<br>`
	poolHeroJ1.map(elem => document.getElementById('app').innerHTML += `<img src="${elem.images.md}">`)


})
