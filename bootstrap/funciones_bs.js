function claro() {
    var mihome = document.getElementById('casa')
    var misol = document.getElementById('sol')
    var miluna = document.getElementById('luna')
    var fondo = document.getElementById('CUERPO')
    // var claroscuro = document.getElementById('BOTONERA')
    var submit = document.getElementById('ENVIAR')

    mihome.scr = 'bootstrap/images/SVG/home-outline.svg'
    misol.src = 'bootstrap/images/SVG/sun1.svg'
    miluna.src = 'bootstrap/images/SVG/moon1.svg'
    fondo.style.backgroundColor = '#ffffff'
    fondo.style.color = '#000000'
    // claroscuro.style.backgroundColor = '#808080'
    submit.style.borderColor = '#24303c'
    submit.style.color ='#24303c'
}

function oscuro() {
    var mihome = document.getElementById('casa')
    var misol = document.getElementById('sol')
    var miluna = document.getElementById('luna')
    var fondo = document.getElementById('CUERPO')
    // var claroscuro = document.getElementById('BOTONERA')
    var submit = document.getElementById('ENVIAR')

    mihome.scr = 'bootstrap/images/SVG/home.svg'
    misol.src = 'bootstrap/images/SVG/sun.svg'
    miluna.src = 'bootstrap/images/SVG/moon.svg'
    fondo.style.backgroundColor = '#24303c'
    fondo.style.color = '#ffffff'
    // claroscuro.style.backgroundColor = '#333333'
    submit.style.borderColor = '#ffffff'
    submit.style.color ='#ffffff'
}

// bootstrap JS
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
// FIN bootstrap JS