import Button from "./Button"
import toggleClasses from "../scripts/toggleClasses"
import { Title, Subtitle } from "./Text"
import { useRef } from "react"

/**
 * * Section props
 * id        -> Indica el id para el section, usado por la navbar
 * bg        -> Sí existe, se asigna a la variable bgImage
 * className -> Clases adicionales para section
 * children  -> Hereda elementos hijos del componente
 */
export function Section(props) {
    const bgImage = {backgroundImage: "url(" + props.bg + ")"}
    return (
        <section
            id={props.id}
            className={"w-full h-screen px-24 py-14 flex items-center justify-center gap-8" + (props.className ? " " + props.className : "")}
            style={props.bg ? bgImage : {}}
        >
            {props.children}
        </section>
    )
}
/**
 * * ImageZoomIn props
 * id        -> Establece un id para el elemento
 * src       -> Ruta de imagen a mostrar
 * alt       -> Texto alternativo para imagen
 * className -> Clases adicionales para contenedor de imagen
 * onClick   -> Función onClick
 * onLoad    -> Función onLoad
 */
export function ImageZoomIn(props) {
    function basic() {
        return (
            <img className={"w-full h-full object-cover transition-all ease-in-out hover:scale-110" + (props.className ? " " + props.className : "")}
                src={props.src}
                onLoad={props.onLoad}
                onClick={props.onClick}
                alt={props.alt}
            />
        )
    }
    if (props.link) {
        if (props.blank == "none") {
            return (
                <div 
                    id={props.id} 
                    className={"h-full rounded-md overflow-hidden transition-all ease-in-out" + (props.containerClassName ? " " + props.containerClassName : "")}
                >
                    <a href={props.link} >
                        {basic()}
                    </a>
                </div>
            )
        } else {
            return (
                <div 
                    id={props.id} 
                    className={"h-full rounded-md overflow-hidden transition-all ease-in-out" + (props.containerClassName ? " " + props.containerClassName : "")}
                >
                    <a 
                        href={props.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {basic()}
                    </a>
                </div>
            )
        }
    } else {
        return (
            <div 
                id={props.id} 
                className={"h-full rounded-md overflow-hidden transition-all ease-in-out" + (props.containerClassName ? " " + props.containerClassName : "")}
            >
                {basic()}
            </div>            
        )
    }
}
/**
 * * Input props
 * title       -> Encabezado de input
 * placeholder -> Placeholder en input
 * type        -> Tipo de input a devolver
 * className   -> Clases adicionales para contenedor
 */
export function Input(props) {
    function textarea() {
        return (
            <textarea 
                className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top text-slate-700 resize-none outline-none ring-transparent ring-offset-2 ring-offset-white transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    dark:ring-offset-slate-800 dark:border-0
                    placeholder:font-light"
                placeholder={props.placeholder}
            />
        )
    }

    function input() {
        return (
            <input 
                type={props.type}
                className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top text-slate-700 outline-none ring-transparent ring-offset-2 ring-offset-white transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    dark:ring-offset-slate-800 dark:border-0
                    placeholder:font-light"
                placeholder={props.placeholder}
            />
        )
    }

    return (
        <div className={"flex flex-col " + props.className}>
            <p>{props.title}</p>
            {props.type == 'textarea' ? textarea() : input()}
        </div>  
    )
}
/**
 * * Icon props
 * icon      -> Clase para icono 
 * size      -> Clase para tamaño de icono
 * className -> Clases adicionales para icono
 * style     -> Añade estilos en línea
 * onClick   -> Función onClick
 * link      -> Sí existe, se crea un enlace contenedor
 */
export function Icon(props){
    // Elemento básico
    function basic() {
        return (
            <i
                className={props.icon + " " + props.size + " " + props.className + " transition-all ease-in-out"}
                onClick={props.onClick}
                style={props.style}
            />
        )
    }
    // Verificamos si existe prop link
    if (props.link) {
        // Sí existe, verificamos si es necesario usar target
        return (
            <div className="flex items-center">
                <a 
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                >
                    {basic()}
                </a>
            </div>
        )
    } else {
        return (
            <div className="flex items-center">
                {basic()}
            </div>
        )
    }
}
/**
 * * PopUp props
 * children  -> Hereda elementos hijos del componente
 * message   -> Texto que contiene el popup
 */
export function PopUp(props) {
    return (
        <div className="flex justify-center relative group">

            {props.children}

            <div className="
                border bg-slate-700 border-slate-500 text-white font-light m-4 px-2 py-0.5 absolute bottom-0 rounded-[.25rem] whitespace-nowrap transition-all ease-in-out delay-100 opacity-0 pointer-events-none
                group-hover:mb-8 group-hover:opacity-100
                dark:bg-gray-100 dark:border-slate-400 dark:font-normal dark:text-slate-700
            ">
                {props.message}
            </div>
        </div>
    )
}
/**
 * * Frame
 * children  -> Hereda elementos hijos del componente
 * className -> Clases adicionales para icono
 */
export function Frame(props) {
    function setPadding() {
        return !props.padding ? "p-1 "   : props.padding + " "
    }
    function setWidth() {
        return !props.width   ? "w-fit " : props.width + " "
    }
    function setHeight() {
        return !props.height  ? "h-fit " : props.height + " "
    }
    function setStyle() {
        const styles = [
            {name: "normal", style: "bg-gray-200/25 dark:bg-slate-700/25 border dark:border-slate-600 "},
            {name: "blue",   style: "bg-cyan-400 border border-cyan-500 dark:border-cyan-300 text-cyan-800 "},
            {name: "red",    style: "bg-red-400 border border-red-500 dark:border-red-300 text-red-800 "},
            {name: "yellow", style: "bg-yellow-400 border border-yellow-500 dark:border-yellow-300 text-yellow-800 "},
            {name: "green",  style: "bg-emerald-400 border border-emerald-500 dark:border-emerald-300 text-emerald-800 "}
        ]

        if(!props.style){
            return styles[0].style
        } else {
            let selected = styles[0].style
            for (let i = 0; i < styles.length; i++) {
                if (props.style == styles[i].name) {selected = styles[i].style}
            }
            return selected
        }
    }
    return (
        <div className={
                setWidth() + setHeight() + setPadding() + setStyle() +
                "rounded-md " + (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </div>
    )
}

export function FrameGroup(props) {
    return (
        <div className="flex flex-row gap-3 items-center w-[calc(50%_-_0.5rem)]">
            <Frame padding="p-2" className={props.frameClassName} height={props.frameHeight} width={props.frameWidth}>
                <Icon
                    icon={props.icon}
                    size={props.iconSize}
                    link={props.iconLink}
                    className={props.iconClassName}
                />
            </Frame>
            <p className="m-0">
               {props.children}
            </p>
        </div>
    )
}
/**
 * * Collapse
 * 
 * @param {string} from Tamaño colapsado
 * @param {string} to   Tamaño completo
 */
export function Collapse(props) {
    function setToggleCollapse(e) {
        const parent = e.target.parentElement.parentElement,
              collapse = parent.querySelector("#collapse")

        if (collapse.classList.contains(props.from)) {
            toggleClasses(collapse, [props.to], [props.from])
            e.target.textContent = "Ocultar"
        } else {
            toggleClasses(collapse, [props.from], [props.to])
            e.target.textContent = "Mostrar"
        }
    }
    return (
        <div className={"mb-3 relative" + (props.className ? " " + props.className : "")}>
            <div className="absolute right-0 bottom-full">
                <Button
                    text="b-to-w"
                    onClick={(e) => setToggleCollapse(e)}
                    className="flex justify-center mb-2 w-[6.426rem]"
                >
                    Mostrar
                </Button>
            </div>
            <div id="collapse" className={"transition-all duration-300 ease-in-out overflow-hidden " + props.from + (props.classNameCollapse ? " " + props.classNameCollapse : "")}>
                {props.children}
            </div>
        </div>
    )
}
/**
 *  
 */
export function SideBar(props) {
    function setWidth() {
        return !props.width ? "w-1/3 "  : props.width + " "
    }
    function setHeight() {
        return !props.height ? "h-[calc(100vh_-_2.5rem)] " : props.height + " "
    }
    return (
        <nav 
            className={setWidth() + setHeight() + "overflow-y-auto" + (props.className ? " " + props.className : "")}
        >
            {props.children}
        </nav>
    )
}
/**
 * * List
 */
export function List(props) {
    function setType() {
        return !props.type ? "" : props.type + " "
    }
    function setMargin() {
        return !props.margin ? "mb-3 " : props.margin + " "
    }
    return (
        <ul className={setType() + setMargin() + "ml-5" + (props.className ? " " + props.className : "")}>
            {props.children}
        </ul>
    )
}