// Codigo para las particulas
particlesJS ({
    "particles": {
        "number": {
            "value": 160,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "star",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 10,
            "direction": "bottom-left",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": false,
            "mode": "bubble"
            },
            "onclick": {
            "enable": false,
            "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
                "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
        "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
        "retina_detect": true
});
//  FIN CODIGO PARTICULAS


// const entrada = document.querySelector('.contenedor1');
const entrada2 = document.getElementById('cargando_pagina')
const entrada3 = document.querySelector('body');


window.addEventListener('load', ()=> {
    window.setTimeout(function(){
        entrada2.classList.add('opacidad');
    }, 2000);
    window.setTimeout(function(){
        entrada2.classList.add('display_ninguno');
    }, 3000);
    window.setTimeout(function(){
        pagina_principal.classList.remove('display_ninguno');
    }, 3001);
    window.setTimeout(function() {
        entrada3.classList.remove('precarga');
    }, 4001);
});

// ABRIR Y CERRAR LOS ARTICULOS
const pagina_principal = document.getElementById('encabezado');
const contenedor_articulos = document.getElementById('articulos');
const clase_articulos = document.querySelectorAll('.articulo_discos');
const art_amor_amarillo = document.getElementById('AMOR_AMARILLO');
const art_bocanada = document.getElementById('BOCANADA');
const art_siempre_es_hoy = document.getElementById('SIEMPRE_ES_HOY');
const art_ahi_vamos = document.getElementById('AHI_VAMOS');
const art_fuerza_natural = document.getElementById('FUERZA_NATURAL');

function mostrar(bloqueM) {
    var cajaM = document.getElementById(bloqueM);
    pagina_principal.classList.remove('visible');
    window.setTimeout(function() {
        pagina_principal.classList.add('display_ninguno');
        contenedor_articulos.classList.remove('display_ninguno');
        cajaM.classList.remove('display_ninguno');
    }, 500);
    window.setTimeout(function() {
        cajaM.classList.add('visible');
    }, 1000);
};

function ocultar(bloqueO) {
    var cajaO = document.getElementById(bloqueO)
    if (cajaO.classList.contains('display_ninguno') == false)  {
        cajaO.classList.add('display_ninguno');
    }
};

function cerrar () {
    for (var i = 0; i < clase_articulos.length ; i++) {
        clase_articulos[i].classList.remove('visible');
    }

    window.setTimeout(function() {
        contenedor_articulos.classList.add('display_ninguno')
        for (var i = 0; i < clase_articulos.length ; i++) {
            clase_articulos[i].classList.add('display_ninguno');
        };
        pagina_principal.classList.remove('display_ninguno');
        pagina_principal.classList.add('visible');

        entrada3.classList.add('precarga');
    }, 500);
    
    
    window.setTimeout(function() {
        entrada3.classList.remove('precarga');
    }, 1000);
};

// DESPLEGANDO BOTON CURIOSIDAD
const boton_curiosidad1 = document.getElementById('curiosidad_amor');
const texto_curiosidad1 = document.getElementById('TEXTO-CURIOSIDAD1');
const botones_curiosidad = document.querySelectorAll('.btn-curiosidad');
const rango = document.querySelectorAll('.rango_defecto');

boton_curiosidad1.addEventListener('click', () => {
    texto_curiosidad1.classList.toggle('active');
});

// DESPLIEGO LA CURIOSIDAD OCULTA

function mostrarOcultar (elemento) {
    elemento.classList.toggle('active');
}

function obtenerValorRango (elementoTio) {
    let objetoContendorRango = elementoTio.lastElementChild;
    let objetoInput = objetoContendorRango.firstElementChild;
    valorSeleccionado = objetoInput.value;
    return valorSeleccionado;
}

botones_curiosidad.forEach((boton) => boton.addEventListener('click', (e) => {
    let botonid = e.target;
    let padre = botonid.parentElement;
    let tio = padre.nextElementSibling;
    let primos = tio.children;
    // SELECCIONAR EL TEXTO A MOSTRAR SEGUN EL VALOR DEL RANGO
    if (tio.getAttribute('id') != "TEXTO-CURIOSIDAD1") {
        // MOSTRAR-OCULTAR EL DIV input-curiosidad
        mostrarOcultar(tio);
        let valorRango = obtenerValorRango(tio);
        let j = valorRango - 1;
        // DEBO RETRASAR EL EFECTO DEL TEXTO POR QUE DIV PREVIAMENTE TENIA display = none
        window.setTimeout(function() {
            mostrarOcultar(primos[j]); 
        }, 1);     
    }
    let sobrinos = tio.children;
    for (var i = 0; i < sobrinos.length; i++) {
        let claseContenedor = sobrinos[i].getAttribute('class');
        if (claseContenedor == "contenedor-rango") {
            sobrinos[i].classList.toggle('active');
        }
    }
}));

// RECONOCIENDO CAMOBIOS INPUT RANGE
rango.forEach((valorRango) => valorRango.addEventListener('change', function(event) {
    let objetivoInput = event.target;
    let padreInput = objetivoInput.parentElement;
    let abueloInput = padreInput.parentElement;
    let abueloHijos = abueloInput.children;
    let j = abueloHijos.length - 1;
    let k = valorRango.value -1;
    for (let i = 0; i < j; i++) {
        if (i == k) {
            if (abueloHijos[i].classList.contains('active') == false) {
                mostrarOcultar(abueloHijos[i]);
            }
        } else {
            if (abueloHijos[i].classList.contains('active')) {
                mostrarOcultar(abueloHijos[i]);
            }
        }
    }
}))

// SCROLL TO TOP
const clase_flechas = document.querySelectorAll('.boton_arriba');

//declaramos la función que se ejecutará cuando ocurre el evento
function seleccionflecha(event) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//usamos el nombre de la función para asignarla a cada evento, reusándola
clase_flechas.forEach(boton_arriba => boton_arriba.addEventListener('click', seleccionflecha));
