/**
 * * copyToClipBoard
 * Esta función permite copiar el contenido de un input al portapapeles
 * Es usado en la sección de inicio, en la label correo, con un input oculto,
 * el cual replica el contenido de la label
 */
export default function copyToClipBoard(e){
    const copyParent = e.target.parentElement,
          copyInput = copyParent.querySelector('#copyInput'),
          target = e.target
    
    copyAnimation()

    copyInput.select()
    copyInput.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(copyInput.value)

    function copyAnimation() {
        // Se deshabilitan opacidad y eventos para evitar interrupciones de animación
    target.style.opacity = 0
    target.style.pointerEvents = 'none'

    // Desaparece primer icono y aparece segundo icono
        const entry = setInterval(() => {
            target.style.opacity = 1
            target.classList.remove('bx-copy')
            target.classList.add('bx-check')
            clearInterval(entry)
        
            // Se deshabilita la opacidad y se prepara para volver al primer icono
            const reset = setInterval(() => {
                target.style.opacity = 0
                clearInterval(reset)
            
                // Aparece primer icono y se habilitan los eventso
                const end = setInterval(() => {
                    target.style.opacity = 1
                    target.classList.remove('bx-check')
                    target.classList.add('bx-copy')
                    clearInterval(end)
                    target.removeAttribute('style')
                }, 300);
            }, 500);
        }, 300);
    }
}