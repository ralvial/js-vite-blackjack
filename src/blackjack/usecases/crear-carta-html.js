 

 /**
  * Obtener una carta
  * @param {String} carta Numero de carta a crear
  * @returns {HTMLImageElement} retorna la imagen de una carta
  */
 export const crearCartaHtml = (carta)=> {

    if (!carta) throw new Erroror('La carta es un argumento obligatorio');
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}