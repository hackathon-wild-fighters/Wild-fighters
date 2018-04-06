import { fight } from './fight.js'

export const navigation = (poolSpellJ1, poolSpellJ2, poolHeroJ1, poolHeroJ2) => {
    const MusicMenu = new Audio('songs/menuMusic.mp3');
    const SelectSong = new Audio('songs/selectedPlayer.mp3');
    MusicMenu.play()
    SelectSong.play()
    const leftTab = document.querySelectorAll('#perso_grid .img_perso')
    const rightTab = document.querySelectorAll('#perso_grid2 .img_perso')

    let currentPositionPlayer1 = 0
    let currentPositionPlayer2 = 0

    const screen1 = document.querySelector('#perso_grid')
    const screen2 = document.querySelector('#perso_grid2')

    const J1champ = []
    const J2champ = []

    let i = 0

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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
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
                SelectSong.play()
                activeTabPlayer2.classList.remove('active')
                prev2.classList.add('active')
                currentPositionPlayer2 -= 1
                player2id = document.querySelector('#perso_grid2 .active').id
                injectJ2info()
            }
        }

        // verrouiller son héros J1
        else if (e.which === 69) {
            i = 0
            activeTabPlayer1.classList.add('selection')
            player1id = activeTabPlayer1.id
            player1selection = activeTabPlayer1.id
            if (player2selection) {
                document.querySelector('.footer-center').classList.add('active')
            }
        }

        // verrouiller son héros J2
        else if (e.which === 16) {
            i = 0
            activeTabPlayer2.classList.add('selection')
            player2id = activeTabPlayer2.id
            player2selection = activeTabPlayer2.id
            if (player1selection) {
                document.querySelector('.footer-center').classList.add('active')
            }
        }
        // Déverrouiller son héros J1
        else if (e.which === 27 && player1selection) {
            activeTabPlayer1.classList.remove('selection')
            player1selection = undefined
        }

        // Déverrouiller son héros J2
        else if (e.which === 17 && player2selection) {
            activeTabPlayer2.classList.remove('selection')
            player2selection = undefined
        }

        // Lancement du jeu
        else if (e.which === 32 && player1selection && player2selection) {
            while (poolHeroJ2[i]){
                if (poolHeroJ2[i].name === player2id){
                    J2champ[0] = poolHeroJ2[i]
                    J2champ[1] = poolSpellJ2[0]
                    J2champ[2] = poolSpellJ2[1]
                    J2champ[3] = poolSpellJ2[2]
                }
                i++
            }
            i = 0
            while (poolHeroJ1[i]){
                if (poolHeroJ1[i].name === player1id){
                    J1champ[0] = poolHeroJ1[i]
                    J1champ[1] = poolSpellJ1[0]
                    J1champ[2] = poolSpellJ1[1]
                    J1champ[3] = poolSpellJ1[2]
                }
                i++
            }
            MusicMenu.pause()
            fight(J1champ, J2champ)
            document.querySelector('#main_container').style.display = "none"
            document.querySelector('#main').style.display = "block"
            document.querySelector('.footer-left').innerHTML = '[Q, S, D] pour attaquer'            
            document.querySelector('.footer-right').innerHTML = '[ ◄   ▼   ► ] pour attaquer'
        }

    }
}