const boton = document.querySelectorAll('.boton')

boton.forEach(boton => {
    boton.addEventListener('click', (e) => {
        let ripple = document.createElement('span')
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop

        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'

        boton.appendChild(ripple)

        // setTimeout(() => {
        //     ripple.remove()
        // }, 700)
    })
})