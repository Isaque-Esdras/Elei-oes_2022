var button1 = document.getElementById('but1')
var button2 = document.getElementById('but2')
var button3 = document.getElementById('but3')
var dive = document.getElementById('NeN')
var dive2 = document.getElementById('CeO')
var dive3 = document.getElementById('SS')

var norte= ["10", "28", "27","78", "28", "27","27","78","78", "28", "27","78", "28", "27","27","78","20"]
var nordeste = ["30", "28", "27","78", "28", "27","27","78","78", "28", "27","78", "28", "27","27","40"]
var centroOeste = ["50", "28", "27","78", "28", "27","27","78","78", "28", "27","78", "28", "27","27","78","28","60"]
var sudeste = ["70", "28", "27","78", "28", "27","80"]
var sul = ["85", "28", "27","78", "28", "27","27","90"]


var unirNeN = norte.concat(nordeste) // Utilização do Método de Array, concat.
var totalNeN = unirNeN.length

function NorteeNordeste() {
    dive.innerHTML += `<p>${unirNeN}</p>`
    dive.innerHTML += `<p>Na região Norte e Nordeste a somatória de votos foi ${totalNeN} votos.</p>`
}

var contabilizar = centroOeste.length

function centroeOeste() {
    dive2.innerHTML += `O total de votos no Centro Oeste foi ${contabilizar} votos.`
}

var unirSeS = sudeste.concat(sul)  // Utilização do Método de Array, concat.
var contabilidade = unirSeS.length

function sudesteEsul() {
    dive3.innerHTML += `<p>${unirSeS}</p>`
    dive3.innerHTML += `<p>Na região Sudeste e Sul a somatória de votos foi ${contabilidade} votos.</p>`
}
