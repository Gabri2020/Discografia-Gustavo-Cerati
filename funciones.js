var nacimiento = prompt('¿En qué año nacio Gustavo Cerati?')
var amor = prompt('¿Cuantas veces se casó Gustavo Adrián Cerati?')
var siempre = prompt('"Te amo para siempre pero..."')
siempre = siempre.toLowerCase();
var natural = prompt('¿Cuántos temas tiene el disco Fuerza Natural?')
var fallecimiento = prompt('¿En qué año murio Gustavo Cerati?')

function claro() {
    var misol = document.getElementById('sol')
    var miluna = document.getElementById('luna')
    var fondo = document.getElementById('CUERPO')
    var amortemas = document.getElementById('AMOR_AMARILLO_TEMAS')
    var amortexto = document.getElementById('AMOR_AMARILLO_TEXTO')
    var bocanadatemas = document.getElementById('BOCANADA_TEMAS')
    var bocanadatexto = document.getElementById('BOCANADA_TEXTO')
    var siempretemas = document.getElementById('SIEMPRE_ES_HOY_TEMAS')
    var siempretexto = document.getElementById('SIEMPRE_ES_HOY_TEXTO')
    var ahitemas = document.getElementById('AHI_VAMOS_TEMAS')
    var ahitexto = document.getElementById('AHI_VAMOS_TEXTO')
    var fuerzatemas = document.getElementById('FUERZA_NATURAL_TEMAS')
    var fuerzatexto = document.getElementById('FUERZA_NATURAL_TEXTO')
    var lunasol = document.getElementById('CLAROSCURO')
    var encabezado = document.getElementById('CABECERA')
    var frases = document.getElementById('IR-BOOTSTRAP')
    var pie = document.getElementById('PIE_PAGINA')
    var botonestexto = document.getElementsByTagName('a')

    lunasol.style.backgroundColor = '#cc9900'
    misol.src = 'img/SVG/sun.svg'
    miluna.src = 'img/SVG/moon.svg'
    encabezado.style.backgroundColor = '#cc9900'
    frases.style.backgroundColor = '#cc9900'
    fondo.style.backgroundColor = '#ffffff'
    fondo.style.backgroundImage = 'radial-gradient(black, rgba(0,0,0,.2) 2px, transparent 40px), radial-gradient(black, rgba(0,0,0,.15) 1px, transparent 30px), radial-gradient(black, rgba(0,0,0,.1) 2px, transparent 40px), radial-gradient(rgba(0,0,0,.4), rgba(0,0,0,.1) 2px, transparent 30px)'
    fondo.style.backgroundSize = '550px 550px, 350px 350px, 250px 250px, 150px 150px'
    fondo.style.backgroundPosition = '0 0, 40px 60px, 130px 270px, 70px 100px'
    fondo.style.backgroundAttachment = 'fixed'
    fondo.style.color = '#000000'
    for(var i=0; i<botonestexto.length; i++) {
        botonestexto[i].style.color = '#000000'
    }
    amortemas.style.backgroundColor = '#ffff80'
    amortexto.style.backgroundColor = '#ffcc80'
    bocanadatemas.style.backgroundColor = '#b3e6ff'
    bocanadatexto.style.backgroundColor = '#80d4ff'
    siempretemas.style.backgroundColor = '#ffb3b3'
    siempretexto.style.backgroundColor = '#ff8080'
    ahitemas.style.backgroundColor = '#d9d9d9'
    ahitexto.style.backgroundColor = '#bfbfbf'
    fuerzatemas.style.backgroundColor = '#d9ffb3'
    fuerzatexto.style.backgroundColor = '#bfff80'
    pie.style.backgroundColor = '#cc9900'
}

function oscuro() {
    var misol = document.getElementById('sol')
    var miluna = document.getElementById('luna')
    var fondo = document.getElementById('CUERPO')
    var amortemas = document.getElementById('AMOR_AMARILLO_TEMAS')
    var amortexto = document.getElementById('AMOR_AMARILLO_TEXTO')
    var bocanadatemas = document.getElementById('BOCANADA_TEMAS')
    var bocanadatexto = document.getElementById('BOCANADA_TEXTO')
    var siempretemas = document.getElementById('SIEMPRE_ES_HOY_TEMAS')
    var siempretexto = document.getElementById('SIEMPRE_ES_HOY_TEXTO')
    var ahitemas = document.getElementById('AHI_VAMOS_TEMAS')
    var ahitexto = document.getElementById('AHI_VAMOS_TEXTO')
    var fuerzatemas = document.getElementById('FUERZA_NATURAL_TEMAS')
    var fuerzatexto = document.getElementById('FUERZA_NATURAL_TEXTO')
    var lunasol = document.getElementById('CLAROSCURO')
    var encabezado = document.getElementById('CABECERA')
    var pie = document.getElementById('PIE_PAGINA')
    var botonestexto = document.getElementsByTagName('a')

    lunasol.style.backgroundColor = '#663300'
    misol.src = 'img/SVG/sun1.svg'
    miluna.src = 'img/SVG/moon1.svg'
    encabezado.style.backgroundColor = '#663300'
    fondo.style.backgroundColor = '#000000'
    fondo.style.backgroundImage = 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)'
    fondo.style.backgroundSize = '550px 550px, 350px 350px, 250px 250px, 150px 150px'
    fondo.style.backgroundPosition = '0 0, 40px 60px, 130px 270px, 70px 100px'
    fondo.style.backgroundAttachment = 'fixed'
    fondo.style.color = '#ffffff'
    for(var i=0; i<botonestexto.length; i++) {
        botonestexto[i].style.color = '#ffffff'
    }
    amortemas.style.backgroundColor = '#e6e600'
    amortexto.style.backgroundColor = '#e68a00'
    bocanadatemas.style.backgroundColor = '#0000ff'
    bocanadatexto.style.backgroundColor = '#0000b3'
    siempretemas.style.backgroundColor = '#ff0000'
    siempretexto.style.backgroundColor = '#990000'
    ahitemas.style.backgroundColor = '#262626'
    ahitexto.style.backgroundColor = '#000000'
    fuerzatemas.style.backgroundColor = '#008000'
    fuerzatexto.style.backgroundColor = '#006600'
    pie.style.backgroundColor = '#663300'
}

function mostrar(bloqueM) {
    var cajaM = document.getElementById(bloqueM)
    if (cajaM.style.display == 'block') {
        cajaM.style.display = 'none';
    }
    else {cajaM.style.display = 'block';} 
}

function ocultar(bloqueO) {
    var cajaO = document.getElementById(bloqueO)
    cajaO.style.display = 'none'
}
