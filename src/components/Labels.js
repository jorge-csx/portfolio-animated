import { Icon } from "./Layout"
import copyToClipBoard from "../scripts/copyToClipBoard"
/**
 * @component
 * * Label
 * Este componente es una etiqueta simple para resaltar texto
 * 
 * @param {object} children — Hereda elementos hijos del componente
 */
export function Label(props){
    return (
        <label className="
            bg-gray-200/25 border px-4 py-2 rounded-full w-fit flex items-center text-sm
            dark:bg-slate-700/25 dark:border-slate-600 dark:text-white dark:font-light
        ">
            {props.children}
        </label>
    )
}
/**
 * @component
 * * ExpandableLabel
 * Este componente es una etiqueta para resaltar texto con interaccines
 * 
 * @param {string}   content — Establece el contenido de la label, este también
 *                             sera replicado en un input en caso de ser necesario
 * @param {string}   link    — Enlace para el contenido
 * @param {string}   iconF   — Icono que ejecuta función
 * @param {function} onClick — Función onClick
 */
export function ExpandableLabel(props) {
    /**
     * @subcomponent
     * Devuelve label contenedora de content e input si props.onClick es copyToClipBoard() 
     */ 
    function setLink() {
        function basic() {
            return (
                <span 
                    className="
                        opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                        group-hover:opacity-100
                        group-focus:opacity-100
                    "
                    tabIndex="-1"    
                >
                    {props.content}
                </span>
            )
        }
        // Input oculto, que replica el contenido de la label para copiarlo al portapapeles,
        // solo se inserta si la función es copyToClipBoard()
        function input(){
            return (
                <input 
                    className="w-0 copyInput"
                    value={props.content} 
                    type="text"
                    readOnly
                    tabIndex="-1"
                    title="copy-input-hidden"
                    placeholder="Correo a copiar"
                />
            )
        } 
        if (props.link) {
            return (
                <a 
                    href={props.link}
                    className="underline decoration-1 underline-offset-4"
                    target="_blank" 
                    rel="noopener noreferrer"
                    tabIndex="-1"
                >
                    {basic()}
                    {props.onClick === copyToClipBoard ? input() : ""}
                </a>
            )
        } else {
            return basic()
        }
    }
    /**
     * @subcomponent
     * Devuelve el icono y función a ejecutar
     */ 
    function setIconF() {
        if (props.iconF) {
            return (
                <Icon
                    icon={props.iconF}
                    size="text-xl"
                    className="
                        cursor-pointer opacity-0 transition-all ease-in-out delay-100
                        group-hover:opacity-100
                        group-focus:opacity-100
                    "
                    onClick={props.onClick}
                />
            )
        }
    }
    return (
        <div 
            className="
                bg-white border p-2 gap-0 rounded-full w-[2.375rem] min-w-[2.375rem] max-w-fit overflow-hidden flex items-center text-sm group outline-none transition-all ease-in-out delay-100
                hover:px-4 hover:py-2 hover:gap-4 hover:w-[25rem] 
                focus:px-4 focus:py-2 focus:gap-4 focus:w-[25rem] 
                dark:bg-slate-800 dark:border-slate-600 dark:ring-offset-slate-800
            " 
            tabIndex="0"
        >
            <Icon
                icon={props.icon}
                size="text-xl"
            />
            {setLink()}
            {setIconF()}
        </div>
    )
}