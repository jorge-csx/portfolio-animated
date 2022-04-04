export function Label(props){
    return (
        <label className="border px-4 py-2 rounded-full w-fit flex items-center text-sm">
            {props.children}
        </label>
    )
}
export function ExpandableLabel(props) {
    const copyToClipBoard = (e) =>{
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
    function setLink() {
        if (props.link) {
            return (
                <a href={props.link} className="underline decoration-1 underline-offset-4" target="_blank" rel="noopener noreferrer">
                    <span className="
                        opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                        group-hover:opacity-100
                    ">
                        {props.title}
                    </span>
                    <input className="w-0" id="copyInput" value={props.title} type="text" readOnly/>
                </a>
            )
        } else {
            return (
                <span className="
                    opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                    group-hover:opacity-100
                ">
                    {props.title}
                </span>
            )
        }
    }
    return (
        <div className="
            border p-2 gap-0 rounded-full w-[2.375rem] min-w-[2.375rem] max-w-fit overflow-hidden flex items-center text-sm group ring-transparent ring-offset-2 transition-all ease-in-out delay-100 ring-2
            hover:px-4 hover:py-2 hover:gap-4 hover:w-[25rem] hover:ring-cyan-400 
        ">
            <i className={props.icon + ' text-xl'}/>
            {setLink()}
            { props.iconF 
                ? <i className={
                    props.iconF + " text-xl cursor-pointer opacity-0 transition-all ease-in-out delay-100 group-hover:opacity-100"
                } onClick={ props.clipboard == 'y' ? copyToClipBoard : ''}>
                </i>
                : ''
            }
            
        </div>
    )
}

// return (
//     <div className="
//         border p-2 gap-0 rounded-full w-[2.375rem] min-w-[2.375rem] max-w-fit overflow-hidden flex items-center text-sm group ring-transparent ring-offset-2 transition-all ease-in-out delay-100 ring-2
//         hover:px-4 hover:py-2 hover:gap-4 hover:w-[25rem] hover:ring-cyan-400 
//     ">
//         <i className={props.icon + ' text-xl'}/>
//         {setLink()}
//         <i className={
//             props.iconF + " text-xl cursor-pointer opacity-0 transition-all ease-in-out delay-100 \
//             group-hover:opacity-100 \
//             after:content-[''] after:bg-red-500 after:w-10 after:h-10 after:block"
//         } onClick={ props.clipboard == 'y' ? copyToClipBoard : ''}/>
//     </div>
// )