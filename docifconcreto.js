//constantes
const botonCalcular = document.getElementById('botonCalcular')
const sectionMateriales = document.getElementById('materiales')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('botonReiniciar')
const sectionCalculadora = document.getElementById('Calculadora')

const cementospan = document.getElementById('cemento')
const arenaspan = document.getElementById('arena')
const piedraspan = document.getElementById('piedra')
const aguaspan = document.getElementById('agua')

const divFc =document.getElementById('divFc')
let can = document.getElementById("cantidad");
let divFcmensaje
let contenedorListafc
let opcionDeFc
let metraje, desperdicio, cubicaje, resistencias = []
let fcvar

//operacion

let cemento, arena, piedra, agua

class Resistencia {
    constructor(nombre, cemento, arena, grava, agua) {
        this.nombre = nombre
        this.cemento = cemento
        this.arena = arena
        this.grava = grava
        this.agua = agua
    }
}

fc210 = new Resistencia ('210', '9', '0.6', '0.7', '200')
fc100 = new Resistencia ('100', '4', '0.6', '0.7', '200')
fc140 = new Resistencia ('140', '6', '0.6', '0.7', '200')
fc175 = new Resistencia ('175', '8', '0.6', '0.7', '200')
fc280 = new Resistencia ('280', '10', '0.6', '0.7', '200')
fc320 = new Resistencia ('320', '11', '0.6', '0.7', '200')
fc350 = new Resistencia ('350', '12', '0.6', '0.7', '200')

resistencias.push(fc210, fc100, fc140, fc175, fc280, fc320, fc350)

function iniciar() {
    let can = document.getElementById('cantidad')
    can.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            operar()
        }
    })
    botonCalcular.addEventListener('click', operar)
    botonReiniciar.addEventListener('click', reiniciar)
    sectionMateriales.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    contenedorListafc = document.getElementById('contenedorListafc')
    resistencias.forEach ((fc) => {
        opcionDeFc = `<option value=${fc.nombre}></option>`
    contenedorListafc.innerHTML += opcionDeFc
    })
}

function operar() {

    fcvar = document.getElementById('fc').value
    cubicaje = document.getElementById('cantidad').value
    desperdicio = document.getElementById('porcentajeDeDesperdicio').value
    metraje = cubicaje * desperdicio/100
    comprobarfc()
    
    //polarizado
    cementospan.innerHTML = fcvar.cemento * cubicaje
    arenaspan.innerHTML = (fcvar.arena * cubicaje).toFixed(2)
    piedraspan.innerHTML = (fcvar.grava * cubicaje).toFixed(2)
    aguaspan.innerHTML = (fcvar.agua * cubicaje).toFixed(2)
    descubrir()
}

function descubrir() {
    sectionCalculadora.style.display = 'none'
    sectionMateriales.style.display = 'block'
    sectionReiniciar.style.display = 'block'
}

function comprobarfc() {
    switch (fcvar) {
        case '210':
            fcvar = fc210
            break
        case '100':
            fcvar = fc100
            break
        case '140':
            fcvar = fc140
            break
        case '175':
            fcvar = fc175
            break
        case '280':
            fcvar = fc280
            break
        case '320':
            fcvar = fc320
            break
        case '350':
            fcvar = fc350
    }
}

function reiniciar() {
    location.reload()
}

window.addEventListener('load', iniciar)
