export const navigation = (poolHeroJ1, poolHeroJ2) => {
    const leftTab = document.querySelectorAll('#perso_grid .img_perso')
    const rightTab = document.querySelectorAll('#perso_grid2 .img_perso')

    let currentPositionPlayer1 = 0
    let currentPositionPlayer2 = 0

    const screen1 = document.querySelector('#perso_grid')
    const screen2 = document.querySelector('#perso_grid2')



    let player1selection = undefined
    let player2selection = undefined


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
            console.log(player1selection)
            if (currentPositionPlayer1 >= 3 && !player1selection) {
                console.log('test')
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 -= 3
                leftTab[currentPositionPlayer1].classList.add('active')
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 DOWN
        else if (e.which === 83) {
            if (currentPositionPlayer1 < 9 && !player1selection) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 += 3
                leftTab[currentPositionPlayer1].classList.add('active')
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 RIGHT
        else if (e.which === 68) {
            if (currentPositionPlayer1 < 11 && !player1selection) {
                activeTabPlayer1.classList.remove('active');
                next.classList.add('active')
                currentPositionPlayer1 += 1
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen1 LEFT
        else if (e.which === 81) {
            if (currentPositionPlayer1 > 0 && !player1selection) {
                activeTabPlayer1.classList.remove('active');
                prev.classList.add('active')
                currentPositionPlayer1 -= 1
                player1id = document.querySelector('#perso_grid .active').id
                injectJ1info()
            }
        }

        //screen2 UP
        else if (e.which === 38) {
            if (currentPositionPlayer2 >= 3 && !player2selection) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 -= 3
                rightTab[currentPositionPlayer2].classList.add('active')
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 DOWN
        else if (e.which === 40) {
            if (currentPositionPlayer2 < 9 && !player2selection) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 += 3
                rightTab[currentPositionPlayer2].classList.add('active')
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 RIGHT
        else if (e.which === 39) {
            if (currentPositionPlayer2 < 11 && !player2selection) {
                activeTabPlayer2.classList.remove('active');
                next2.classList.add('active')
                currentPositionPlayer2 += 1
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        //screen2 left
        else if(e.which === 37) {
            if (currentPositionPlayer2 > 0 && !player2selection) {
                activeTabPlayer2.classList.remove('active')
                prev2.classList.add('active')
                currentPositionPlayer2 -= 1
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }
        // verrouiller son héros J1
        else if (e.which === 69) {
            activeTabPlayer1.classList.add('selection')
            player1id = activeTabPlayer1.id
            player1selection = activeTabPlayer1.id
        }
        // verrouiller son héros J2
        else if (e.which === 16) {
            activeTabPlayer2.classList.add('selection')
            player2id = activeTabPlayer2.id
            player2selection = activeTabPlayer2.id
        }
        // Déverrouiller son héros J1
        else if (e.which === 9 && player1selection) {
            activeTabPlayer1.classList.remove('selection')
            player1selection = undefined
        }
        // Déverrouiller son héros J2
        else if (e.which === 17 && player2selection) {
            activeTabPlayer2.classList.remove('selection')
            player2selection = undefined
        }
        // Déverrouiller son héros J1
        else if (e.which === 32 && player1selection && player2selection) {
            console.log('start')
        }

    }
}