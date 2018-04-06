import { navigation } from './navigation-ui.js'
const spells = [
{"spell" : "tourbillon de lames", "img" : "spellList/icons_spells/tourbillonDeLames.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "toucher corrosif", "img" : "spellList/icons_spells/toucherCorrosif.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "toucher contaminé", "img" : "spellList/icons_spells/toucherContamine.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "Terres brûlées", "img" : "spellList/icons_spells/terresBrulees.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "souffle de glace", "img" : "spellList/icons_spells/souffleDeGlace.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "Rayon plasma", "img" : "spellList/icons_spells/rayonPlasma.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "putréfaction", "img" : "spellList/icons_spells/putrefaction.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "points de suture", "img" : "spellList/icons_spells/pointsDeSuture.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "pluie de feu", "img" : "spellList/icons_spells/pluieDeFeu.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "Nuage de poison", "img" : "spellList/icons_spells/nuageDePoison.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "mur de flamme", "img" : "spellList/icons_spells/murDeFlamme.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "hachoir", "img" : "spellList/icons_spells/hachoir.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 6 , "fightSpell" :1},
{"spell" : "gel", "img" : "spellList/icons_spells/gel.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "Fulgurance des arcanes", "img" : "spellList/icons_spells/fulguranceDesArcanes.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "Exécution", "img" : "spellList/icons_spells/execution.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 3 , "fightSpell" :1},
{"spell" : "étreinte fantomatique", "img" : "spellList/icons_spells/etreinteFantomatique.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "entailles sanglantes", "img" : "spellList/icons_spells/entaillesSanglantes.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 3 , "fightSpell" :1},
{"spell" : "énergie pure", "img" : "spellList/icons_spells/energiePure.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "energie noire", "img" : "spellList/icons_spells/energieNoire.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "crochet sanglant", "img" : "spellList/icons_spells/crochetSanglant.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 3 , "fightSpell" :1},
{"spell" : "chaine d'éclairs", "img" : "spellList/icons_spells/chaineEclairs.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "caresse élémentaire", "img" : "spellList/icons_spells/caresseElementaire.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "brise-crâne", "img" : "spellList/icons_spells/briseCrane.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 3 , "fightSpell" :1},
{"spell" : "brasier elementaire", "img" : "spellList/icons_spells/brasierElementaire.jpg", "pouvoirSpell" : 3 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "attaque toxique", "img" : "spellList/icons_spells/attaqueToxique.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "attaque du phénix", "img" : "spellList/icons_spells/attaqueDuPhenix.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 1 , "fightSpell" :3},
{"spell" : "attaque cérébral", "img" : "spellList/icons_spells/attaqueCerebral.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 6 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "pluie de plasma", "img" : "spellList/icons_spells/pluieDePlasma.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 3 , "forceSpell" : 1 , "fightSpell" :1},
{"spell" : "mauvais contact", "img" : "spellList/icons_spells/mauvaisContact.jpg", "pouvoirSpell" : 1 , "intelligenceSpell" : 1 , "forceSpell" : 3 , "fightSpell" :2}
]

fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
.then(res => res.json())
.then(json => {

	const poolHeroJ1 = []
	let poolSpellJ1 = []
	const poolHeroJ2 = []
	let poolSpellJ2 = []
	let i = 0

	//random spell * 3
	const fillPoolSpell = poolSpell => 
	{
		let j = 0
		let lol
		while (poolSpell.length < 3)
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
		`<div class="content_spells">
		<div class="spells_choice">
		<p class="name_spell">${elem.spell}</p><img class="img_spell2" src="${elem.img}">
		</div>
		</div>`
		)

	//inject spell j2
	document.getElementById("info-power2").innerHTML = ''
	poolSpellJ2.map(elem => document.getElementById("info-power2").innerHTML +=
		`<div class="content_spells2">
		<div class="spells_choice">
		<img class="img_spell" src="${elem.img}"><p class="name_spell">${elem.spell}</p>
		</div>
		</div>`
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
	
	navigation(poolSpellJ1, poolSpellJ2, poolHeroJ1, poolHeroJ2)
})

