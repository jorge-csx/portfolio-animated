/**
 * * toggleClasses
 * Función para agregar y remover clases de element
 */
export default function toggleClasses(element, classAdd, classRemove) {
    if (classAdd) {
        for (let i = 0; i < classAdd.length; i++) element.classList.add(classAdd[i])
    }
    if (classRemove) {
        for (let i = 0; i < classRemove.length; i++) element.classList.remove(classRemove[i])
    }
}