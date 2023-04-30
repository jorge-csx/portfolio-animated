import { useEffect } from "react";

/**
 * @function copyToClipBoard
 * Esta función permite copiar el contenido de un input al portapapeles
 */
export default function copyToClipBoard(e) {
  const copyParent = e.target.parentElement.parentElement,
    copyInput = copyParent.querySelector(".copyInput"),
    target = e.target;

  copyAnimation();

  // Se copia el contenido de la label en navegadores de escritorio y móvil
  copyInput.select();
  copyInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyInput.value);

  /**
   * @function copyAnimation
   * Esta función ejecuta una animación al copiar contenido de label
   */
  function copyAnimation() {
    // Se deshabilitan opacidad y eventos para evitar interrupciones de animación
    target.style.opacity = 0;
    target.style.pointerEvents = "none";

    // Desaparece primer icono y aparece segundo icono
    const entry = setInterval(() => {
      target.style.opacity = 1;
      target.classList.remove("bx-copy");
      target.classList.add("bx-check");
      clearInterval(entry);

      // Se deshabilita la opacidad y se prepara para volver al primer icono
      const reset = setInterval(() => {
        target.style.opacity = 0;
        clearInterval(reset);

        // Aparece primer icono y se habilitan los eventso
        const end = setInterval(() => {
          target.style.opacity = 1;
          target.classList.remove("bx-check");
          target.classList.add("bx-copy");
          clearInterval(end);
          target.removeAttribute("style");
        }, 300);
      }, 500);
    }, 300);
  }
}
