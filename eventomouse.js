
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var cuadrito = document.getElementById("area_de_dibujo"); 
var papel = cuadrito.getContext("2d");
var borradorcito = document.getElementById("borrar");
var pintadorcito = document.getElementById("pintar");
var x;
var y;
var cc;
var colorcito = "blue";
var ancho = 3;

document.addEventListener("mousedown", oprimir );
document.addEventListener("mousemove", mover );
document.addEventListener("mouseup", soltar );
document.addEventListener("keydown", borrar ); //Manda a llamar la funcion borrar cuando se oprime cualquier tecla

function dibujarLinea(color, x_ini, y_ini, x_fin, y_fin, lienzo, ancho) { 
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.lineWidth = ancho;
	lienzo.moveTo(x_ini, y_ini); 
	lienzo.lineTo(x_fin, y_fin); 
	lienzo.stroke(); 
	lienzo.closePath(); 
}

function mover(evento){
	if (cc == 1) {
		
		if (borradorcito.checked) {
			 colorcito = "white"
			 ancho = 5;
		} else if (pintadorcito.checked) {
			colorcito = "blue"
			ancho = 3;
		}

		var mx = evento.layerX
		var my = evento.layerY
		dibujarLinea(colorcito, x, y, mx, my, papel, ancho);
		x = mx;
		y = my;
	}
}

function oprimir(evento){ //Cuando se genera el evento de click cc se hace uno y comienza a dibujar en la pocicion altual con los nuevos valores de x, y
	cc = 1;
	x = evento.layerX
	y = evento.layerY
}

function soltar(evento){ //Cuando se genera el evento de dejar de precionar el click, cc se hace 0, por lo tanto en la funcion mover no pasa nada
	cc = 0;
}

//Funciones para borrar y recetar el lienzo
function borrar(){
	limpiarLienzo(papel);
}

function limpiarLienzo(lienzo){
	lienzo.clearRect(0,0,cuadrito.width, cuadrito.height);
}



