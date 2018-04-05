export const navigation = () => {
    const leftTab = document.querySelectorAll('#perso_grid .img_perso')
    const rightTab = document.querySelectorAll('#perso_grid2 .img_perso')

    let currentPositionPlayer1 = 0
    let currentPositionPlayer2 = 0

    const screen1 = document.querySelector('#perso_grid')
    const screen2 = document.querySelector('#perso_grid2')

    // const screen1
    leftTab[0].classList.add('active')
    rightTab[0].classList.add('active')

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

        //screen1 UP
        if (e.which === 90) {
            if (currentPositionPlayer1 >= 3) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 -= 3
                leftTab[currentPositionPlayer1].classList.add('active')
            }
        }
        //screen1 DOWN
        if (e.which === 83) {
            if (currentPositionPlayer1 < 9) {
                activeTabPlayer1.classList.remove('active')
                currentPositionPlayer1 += 3
                leftTab[currentPositionPlayer1].classList.add('active')
            }
        }
        //screen1 RIGHT
        if (e.which === 68) {
            if (currentPositionPlayer1 < 11) {
                activeTabPlayer1.classList.remove('active');
                next.classList.add('active')
                currentPositionPlayer1 += 1
            }
        }
        //screen1 LEFT
        if (e.which === 81) {
            if (currentPositionPlayer1 > 0) {
                activeTabPlayer1.classList.remove('active');
                prev.classList.add('active')
                currentPositionPlayer1 -= 1
            }
        }
        //screen2 UP
        if (e.which === 38) {
            if (currentPositionPlayer2 >= 3) {
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 -= 3
                rightTab[currentPositionPlayer2].classList.add('active')
            }
        }
        //screen2 DOWN
        if (e.which === 40) {
            if (currentPositionPlayer2 < 9) {
                console.log('down')
                activeTabPlayer2.classList.remove('active')
                currentPositionPlayer2 += 3
                rightTab[currentPositionPlayer2].classList.add('active')
            }
        }
        //screen2 RIGHT
        if (e.which === 39) {
            if (currentPositionPlayer2 < 11) {
                activeTabPlayer2.classList.remove('active');
                next2.classList.add('active')
                currentPositionPlayer2 += 1
            }
        }
        //screen2 left
        if (e.which === 37) {
            if (currentPositionPlayer2 > 0) {
                activeTabPlayer2.classList.remove('active');
                prev2.classList.add('active')
                currentPositionPlayer2 -= 1
            }
        }
    }
}