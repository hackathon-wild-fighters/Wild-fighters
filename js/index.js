import { navigation } from './navigation-ui.js'
const spells = [
{"spell" : "tourbillon de lames", "img" : "spellList/icons_spells/tourbillonDeLames.jpg"},
{"spell" : "toucher corrosif", "img" : "spellList/icons_spells/toucherCorrosif.jpg"},
{"spell" : "toucher contaminé", "img" : "spellList/icons_spells/toucherContamine.jpg"},
{"spell" : "Terres brûlées", "img" : "spellList/icons_spells/terresBrulees.jpg"},
{"spell" : "souffle de glace", "img" : "spellList/icons_spells/souffleDeGlace.jpg"},
{"spell" : "Rayon plasma", "img" : "spellList/icons_spells/rayonPlasma.jpg"},
{"spell" : "putréfaction", "img" : "spellList/icons_spells/putrefaction.jpg"},
{"spell" : "points de suture", "img" : "spellList/icons_spells/pointsDeSuture.jpg"},
{"spell" : "pluie de feu", "img" : "spellList/icons_spells/pluieDeFeu.jpg"},
{"spell" : "Nuage de poison", "img" : "spellList/icons_spells/nuageDePoison.jpg"},
{"spell" : "mur de flamme", "img" : "spellList/icons_spells/murDeFlamme.jpg"},
{"spell" : "hachoir", "img" : "spellList/icons_spells/hachoir.jpg"},
{"spell" : "gel", "img" : "spellList/icons_spells/gel.jpg"},
{"spell" : "Fulgurance des arcanes", "img" : "spellList/icons_spells/fulguranceDesArcanes.jpg"},
{"spell" : "Exécution", "img" : "spellList/icons_spells/execution.jpg"},
{"spell" : "étreinte fantomatique", "img" : "spellList/icons_spells/etreinteFantomatique.jpg"},
{"spell" : "entailles sanglantes", "img" : "spellList/icons_spells/entaillesSanglantes.jpg"},
{"spell" : "énergie pure", "img" : "spellList/icons_spells/energiePure.jpg"},
{"spell" : "energie noire", "img" : "spellList/icons_spells/energieNoire.jpg"},
{"spell" : "crochet sanglant", "img" : "spellList/icons_spells/crochetSanglant.jpg"},
{"spell" : "chaine d'éclairs", "img" : "spellList/icons_spells/chaineEclairs.jpg"},
{"spell" : "caresse élémentaire", "img" : "spellList/icons_spells/caresseElementaire.jpg"},
{"spell" : "brise-crâne", "img" : "spellList/icons_spells/briseCrane.jpg"},
{"spell" : "brasier elementaire", "img" : "spellList/icons_spells/brasierElementaire.jpg"},
{"spell" : "attaque toxique", "img" : "spellList/icons_spells/attaqueToxique.jpg"},
{"spell" : "attaque du phénix", "img" : "spellList/icons_spells/attaqueDuPhenix.jpg"},
{"spell" : "attaque cérébral", "img" : "spellList/icons_spells/attaqueCerebral.jpg"},
{"spell" : "pluie de plasma", "img" : "spellList/icons_spells/pluieDePlasma.jpg"},
{"spell" : "mauvais contact", "img" : "spellList/icons_spells/mauvaisContact.jpg"}
]

fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
.then(res => res.json())
.then(json => {

	const poolHeroJ1 = []
	let poolSpellJ1 = []
	const poolHeroJ2 = []
	let poolSpellJ2 = []
	let i = 0

	//random spell * 10
	const fillPoolSpell = poolSpell => 
	{
		let j = 0
		let lol
		while (poolSpell.length < 10)
		{
			lol = spells[(Math.floor(Math.random() * 29))]
			if (poolSpell.includes(lol))
				lol = spells[(Math.floor(Math.random() * 29))]

			else
			{
				poolSpell[j] = lol
				j++
			}
		}
	}

	fillPoolSpell(poolSpellJ1)
	fillPoolSpell(poolSpellJ2)

	//inject spell j1
	document.getElementById("info-power1").innerHTML = ''
	poolSpellJ1.map(elem => document.getElementById("info-power1").innerHTML +=
		`<div><img class="img_spell" src="${elem.img}"><p>${elem.spell}</p></div>`
		)

	//inject spell j2
	document.getElementById("info-power2").innerHTML = ''
	poolSpellJ2.map(elem => document.getElementById("info-power2").innerHTML +=
		`<div><img class="img_spell" src="${elem.img}"><p>${elem.spell}</p></div>`
		)

	i = 0
	// random champ * 12
	while (i < 12) {
		poolHeroJ1[i] = json[(Math.floor(Math.random() * 563))]
		poolHeroJ2[i] = json[(Math.floor(Math.random() * 563))]
		i++
	}

	//inject J1 poolchamp
	poolHeroJ1.map(elem => document.getElementById('perso_grid').innerHTML +=
		`<div class="img_perso" id="${elem.name}">
		<img src="${elem.images.sm}">
		</div>`
		)

	//inject J2 poolchamp
	poolHeroJ2.map(elem => document.getElementById('perso_grid2').innerHTML +=
		`<div class="img_perso" id="${elem.name}">
		<img  src="${elem.images.sm}">
		</div>`
		)
	
	navigation(poolHeroJ1, poolHeroJ2)
})

