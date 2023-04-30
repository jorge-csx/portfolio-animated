/**
 * @function toggleClasses
 * Esta función agrega y remueve clases de element simultáneamente
 *
 * @param {object} element     — Establece el elemento a manipular
 * @param {object} classAdd    — Establece las clases a agregar a través de un arreglo
 * @param {object} classRemove — Establece las clases a remover a través de un arreglo
 */
export default function toggleClasses(element, classAdd, classRemove) {
  if (classAdd) {
    for (let i = 0; i < classAdd.length; i++)
      element.classList.add(classAdd[i]);
  }
  if (classRemove) {
    for (let i = 0; i < classRemove.length; i++)
      element.classList.remove(classRemove[i]);
  }
}
