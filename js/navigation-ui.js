export const navigation = (poolHeroJ1, poolHeroJ2) => {
    const leftTab = document.querySelectorAll('#perso_grid .img_perso')
    const rightTab = document.querySelectorAll('#perso_grid2 .img_perso')

    const spells = [
        { "spell": "tourbillon de lames", "img": "spellList/icons_spells/tourbillonDeLames.jpg" },
        { "spell": "toucher corrosif", "img": "spellList/icons_spells/toucherCorrosif.jpg" },
        { "spell": "toucher contaminé", "img": "spellList/icons_spells/toucherContamine.jpg" },
        { "spell": "Terres brûlées", "img": "spellList/icons_spells/terresBrulees.jpg" },
        { "spell": "souffle de glace", "img": "spellList/icons_spells/souffleDeGlace.jpg" },
        { "spell": "Rayon plasma", "img": "spellList/icons_spells/rayonPlasma.jpg" },
        { "spell": "putréfaction", "img": "spellList/icons_spells/putrefaction.jpg" },
        { "spell": "points de suture", "img": "spellList/icons_spells/pointsDeSuture.jpg" },
        { "spell": "pluie de feu", "img": "spellList/icons_spells/pluieDeFeu.jpg" },
        { "spell": "Nuage de poison", "img": "spellList/icons_spells/nuageDePoison.jpg" },
        { "spell": "mur de flamme", "img": "spellList/icons_spells/murDeFlamme.jpg" },
        { "spell": "hachoir", "img": "spellList/icons_spells/hachoir.jpg" },
        { "spell": "gel", "img": "spellList/icons_spells/gel.jpg" },
        { "spell": "Fulgurance des arcanes", "img": "spellList/icons_spells/fulguranceDesArcanes.jpg" },
        { "spell": "Exécution", "img": "spellList/icons_spells/execution.jpg" },
        { "spell": "étreinte fantomatique", "img": "spellList/icons_spells/etreinteFantomatique.jpg" },
        { "spell": "entailles sanglantes", "img": "spellList/icons_spells/entaillesSanglantes.jpg" },
        { "spell": "énergie pure", "img": "spellList/icons_spells/energiePure.jpg" },
        { "spell": "energie noire", "img": "spellList/icons_spells/energieNoire.jpg" },
        { "spell": "crochet sanglant", "img": "spellList/icons_spells/crochetSanglant.jpg" },
        { "spell": "chaine d'éclairs", "img": "spellList/icons_spells/chaineEclairs.jpg" },
        { "spell": "caresse élémentaire", "img": "spellList/icons_spells/caresseElementaire.jpg" },
        { "spell": "brise-crâne", "img": "spellList/icons_spells/briseCrane.jpg" },
        { "spell": "brasier elementaire", "img": "spellList/icons_spells/brasierElementaire.jpg" },
        { "spell": "attaque toxique", "img": "spellList/icons_spells/attaqueToxique.jpg" },
        { "spell": "attaque du phénix", "img": "spellList/icons_spells/attaqueDuPhenix.jpg" },
        { "spell": "attaque cérébral", "img": "spellList/icons_spells/attaqueCerebral.jpg" },
        { "spell": "pluie de plasma", "img": "spellList/icons_spells/pluieDePlasma.jpg" },
        { "spell": "mauvais contact", "img": "spellList/icons_spells/mauvaisContact.jpg" }
    ]
    let currentPositionPlayer1 = 0
    let currentPositionPlayer2 = 0

    const screen1 = document.querySelector('#perso_grid')
    const screen2 = document.querySelector('#perso_grid2')



    const player1selection = []
    const player2selection = []


    // const screen1
    leftTab[0].classList.add('active')
    rightTab[0].classList.add('active')

    let player1id = document.querySelector('#perso_grid .active').id
    let player2id = document.querySelector('#perso_grid2 .active').id

    //inject stats on loadingc
    poolHeroJ1.map(elem => {
        if (elem.name === player1id)
            document.getElementById('info-perso1').innerHTML = `
        <div class="skills_perso1">
        <div>
        <span class="name_perso1">${elem.name}</span><br><br>
        Combat : ${elem.powerstats.combat}<br>
        Intelligence : ${elem.powerstats.intelligence}<br>
        Force : ${elem.powerstats.strength}<br>
        Vitesse : ${elem.powerstats.speed}<br>
        Durabilité : ${elem.powerstats.durability}<br>
        Puissance : ${elem.powerstats.power}
        </div>
        </div>
        `
    })

    //inject stats on loadingc
    poolHeroJ2.map(elem => {
        if (elem.name === player2id)
            document.getElementById('info-perso2').innerHTML = `
        <div class="skills_perso2">
        <div>
        <span class="name_perso2">${elem.name}</span><br><br>
        Combat : ${elem.powerstats.combat}<br>
        Intelligence : ${elem.powerstats.intelligence}<br>
        Force : ${elem.powerstats.strength}<br>
        Vitesse : ${elem.powerstats.speed}<br>
        Durabilité : ${elem.powerstats.durability}<br>
        Puissance : ${elem.powerstats.power}
        </div>
        </div>
        `
    })

    window.addEventListener('keydown', (e) => {
        moveCursor(e)
    })

    const moveCursor = (e) => {
        const activeTabPlayer1 = screen1.querySelector('#perso_grid .active')
        const activeTabPlayer2 = screen2.querySelector('#perso_grid2 .active')

        const next = activeTabPlayer1.nextElementSibling
        const prev = activeTabPlayer1.previousElementSibling

        const next2 = activeTabPlayer2.nextElementSibling
        const prev2 = activeTabPlayer2.previousElementSibling


        const injectJ1info = () => {
            poolHeroJ1.map(elem => {
                if (elem.name === player1id)
                    document.getElementById('info-perso1').innerHTML = `
                <div class="skills_perso1">
                <div>
                <span class="name_perso1">${elem.name}</span><br><br>
                Combat : ${elem.powerstats.combat}<br>
                Intelligence : ${elem.powerstats.intelligence}<br>
                Force : ${elem.powerstats.strength}<br>
                Vitesse : ${elem.powerstats.speed}<br>
                Durabilité : ${elem.powerstats.durability}<br>
                Puissance : ${elem.powerstats.power}
                </div>
                </div>
                `
            })
        }

        const injectJ2info = () => {
            poolHeroJ2.map(elem => {
                if (elem.name === player2id)
                    document.getElementById('info-perso2').innerHTML = `
                <div class="skills_perso2">
                <div>
                <span class="name_perso2">${elem.name}</span><br><br>
                Combat : ${elem.powerstats.combat}<br>
                Intelligence : ${elem.powerstats.intelligence}<br>
                Force : ${elem.powerstats.strength}<br>
                Vitesse : ${elem.powerstats.speed}<br>
                Durabilité : ${elem.powerstats.durability}<br>
                Puissance : ${elem.powerstats.power}
                </div>
                </div>
                `
            })
        }

        //screen1 UP
        if (e.which === 90) {
            if (currentPositionPlayer1 >= 3) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 -= 3
                leftTab[currentPositionPlayer1].classList.add('active')
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 DOWN
        if (e.which === 83) {
            if (currentPositionPlayer1 < 9) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 += 3
                leftTab[currentPositionPlayer1].classList.add('active')
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 RIGHT
        if (e.which === 68) {
            if (currentPositionPlayer1 < 11) {
                activeTabPlayer1.classList.remove('active');
                next.classList.add('active')
                currentPositionPlayer1 += 1
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 LEFT
        if (e.which === 81) {
            if (currentPositionPlayer1 > 0) {
                activeTabPlayer1.classList.remove('active');
                prev.classList.add('active')
                currentPositionPlayer1 -= 1
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        // verrouiller son héros J1
        if (e.which === 69) {
            player1id = document.querySelector('#perso_grid .active').id
            let i = 0
            while (poolHeroJ1[i]) {
                if (player1id === poolHeroJ1[i].name)
                    player1selection[0] = poolHeroJ1[i]
                i++
            }
        }

        //screen2 UP
        if (e.which === 38) {
            if (currentPositionPlayer2 >= 3) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 -= 3
                rightTab[currentPositionPlayer2].classList.add('active')
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 DOWN
        if (e.which === 40) {
            if (currentPositionPlayer2 < 9) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 += 3
                rightTab[currentPositionPlayer2].classList.add('active')
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 RIGHT
        if (e.which === 39) {
            if (currentPositionPlayer2 < 11) {
                activeTabPlayer2.classList.remove('active');
                next2.classList.add('active')
                currentPositionPlayer2 += 1
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 left
        if (e.which === 37) {
            if (currentPositionPlayer2 > 0) {
                activeTabPlayer2.classList.remove('active');
                prev2.classList.add('active')
                currentPositionPlayer2 -= 1
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }

        // verrouiller son héros J2
        if (e.which === 16) {
            player2id = document.querySelector('#perso_grid2 .active').id
            let i = 0
            while (poolHeroJ2[i]) {
                if (player2id === poolHeroJ2[i].name)
                    player2selection[0] = poolHeroJ2[i]
                i++
            }
        }

    }
}