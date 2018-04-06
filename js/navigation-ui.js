export const navigation = (poolHeroJ1, poolHeroJ2) => {
    const leftTab = document.querySelectorAll('#perso_grid .img_perso')
    const rightTab = document.querySelectorAll('#perso_grid2 .img_perso')

    let currentPositionPlayer1 = 0
    let currentPositionPlayer2 = 0

    const screen1 = document.querySelector('#perso_grid')
    const screen2 = document.querySelector('#perso_grid2')

    // const screen1
    leftTab[0].classList.add('active')
    rightTab[0].classList.add('active')
    let player1id = document.querySelector('#perso_grid .active').id
    let player2id = document.querySelector('#perso_grid2 .active').id

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
                console.log(player1id)
                injectJ1info()

            }
        }

        if (e.which === 83) {
            if (currentPositionPlayer1 < 9) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 += 3
                leftTab[currentPositionPlayer1].classList.add('active')
                player1id = document.querySelector('#perso_grid .active').id
                console.log(player1id)
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
                console.log(player1id)
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
                console.log(player1id)
                injectJ1info()
            }
        }
        //screen2 UP
        if (e.which === 38) {
            if (currentPositionPlayer2 >= 3) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 -= 3
                rightTab[currentPositionPlayer2].classList.add('active')
                player2id = document.querySelector('#perso_grid2 .active').id
                console.log(player2id)
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
                console.log(player2id)
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
                console.log(player2id)
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
                console.log(player2id)
                injectJ2info()

            }
        }
    }
}