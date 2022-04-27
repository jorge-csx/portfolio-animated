import Button from "./Button"
import toggleClasses from "../scripts/toggleClasses"
/**
 * @component
 * * Section
 * Este componente define partes del portafolio cada 100vh
 * 
 * @param {string} id        — Indica el id para el section, usado por la TabBar
 * @param {string} bg        — Si existe, se asigna a la variable bgImage
 * @param {string} className — Clases adicionales
 * @param {object} children  — Hereda elementos hijos del componente
 */
export function Section(props) {
    const bgImage = {backgroundImage: "url(" + props.bg + ")"}
    return (
        <section
            id={props.id}
            className={
                "w-full md:h-screen px-6 md:px-24 py-6 md:py-14 flex flex-col md:flex-row items-center justify-center gap-8 scroll-mt-[4.625rem] md:scroll-mt-0" +
                (props.className ? " " + props.className : "")
            }
            style={props.bg ? bgImage : {}}
        >
            {props.children}
        </section>
    )
}
/**
 * @component
 * * ImageZoomIn
 * Este componente es un contenedor con interacción hover
 * 
 * @param {string}   id                 — Establece un id para contenedor padre de imagen
 * @param {string}   src                — Establece ruta de imagen a mostrar
 * @param {string}   alt                — Establece un texto alternativo para imagen
 * @param {string}   className          — Establece clases adicionales para imagen
 * @param {string}   containerClassName — Establece clases adicionales para contenedor de imagen
 * @param {string}   link               — Si existe se crea un enlace contenedor
 * @param {string}   blank              — Si es igual a "none", los atributos target y rel no son insertados
 * @param {function} onClick            — Establece función onClick
 * @param {function} onLoad             — Establece función onLoad
 */
export function ImageZoomIn(props) {
    function basic() {
        return (
            <img 
                className={
                    "w-full h-full object-cover transition-all ease-in-out hover:scale-110" +
                    (props.className ? " " + props.className : "")
                }
                src={props.src}
                onLoad={props.onLoad}
                onClick={props.onClick}
                alt={props.alt}
            />
        )
    }
    // Si props.link existe, se evalúa si existe props.blank si es asi,
    // el enlace sera blank, sino el enlace sera un enlace simple
    const styles = "h-full rounded-md overflow-hidden transition-all ease-in-out"
    if (props.link) {
        if (props.blank == "none") {
            return (
                <div 
                    id={props.id} 
                    className={styles + (props.containerClassName ? " " + props.containerClassName : "")}
                >
                    <a href={props.link}>
                        {basic()}
                    </a>
                </div>
            )
        } else {
            return (
                <div 
                    id={props.id} 
                    className={styles + (props.containerClassName ? " " + props.containerClassName : "")}
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
                className={styles + (props.containerClassName ? " " + props.containerClassName : "")}
            >
                {basic()}
            </div>            
        )
    }
}
/**
 * @component
 * * Input
 * Este componente es un input de tipo variable
 * 
 * @param {string} title       — Establece el encabezado del input
 * @param {string} name        — Establece un atributo name
 * @param {string} content     — Establece contenido predefinido
 * @param {string} placeholder — Establece el placeholder
 * @param {string} type        — Establece el tipo de input
 * @param {string} className   — Establece clases adicionales para contenedor
 */
export function Input(props) {
    function textarea() {
        return (
            <textarea 
                className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-4 align-text-top text-slate-700 resize-none outline-none ring-transparent ring-offset-2 ring-offset-white transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    dark:ring-offset-slate-800 dark:bg-slate-700/25 dark:border-slate-600 dark:text-white dark:font-light
                    placeholder:font-light placeholder:text-slate-500
                "
                placeholder={props.placeholder}
                name={props.name}
                defaultValue={props.content}
                spellCheck="false"
            />
        )
    }
    function input() {
        return (
            <input 
                type={props.type}
                className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-4 align-text-top text-slate-700 outline-none ring-transparent ring-offset-2 ring-offset-white transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    dark:ring-offset-slate-800 dark:bg-slate-700/25 dark:border-slate-600 dark:text-white dark:font-light
                    placeholder:font-light placeholder:text-slate-500
                "
                placeholder={props.placeholder}
                name={props.name}
                defaultValue={props.content}
                spellCheck="false"
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
 * @component
 * * Icon
 * Este componente es un icono
 * 
 * @param {string}   icon               — Establece el icono
 * @param {string}   size               — Establece el tamaño del icono
 * @param {string}   link               — Si existe, se crea un enlace contenedor
 * @param {string}   style              — Establece estilos en línea
 * @param {string}   className          — Establece clases adicionales para icono
 * @param {string}   containerClassName — Establece clases adicionales para el contenedor
 * @param {function} onClick            — Establece función onClick
 */
export function Icon(props){
    function basic() {
        return (
            <i
                className={
                    "transition-all ease-in-out" + (props.icon ? " " + props.icon : "") +
                    (props.size ? " " + props.size : "") + (props.className ? " " + props.className : "")
                }
                onClick={props.onClick}
                style={props.style}
            />
        )
    }
    // Verifica si existe prop link, si existe comprueba si es necesario usar target
    const styles = "flex items-center"
    if (props.link) {
        return (
            <div className={styles + (props.containerClassName ? " " + props.containerClassName : "")}>
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
            <div className={styles + (props.containerClassName ? " " + props.containerClassName : "")}>
                {basic()}
            </div>
        )
    }
}
/**
 * @component
 * * PopUp
 * Este componente muestra un mensajes al hacer hover sobre el contenedor
 * 
 * @param {string} message  — Establece el texto que contiene el popup
 * @param {object} children — Hereda elementos hijos del componente
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
 * @component
 * * Frame
 * Este componente es un contenedor de elementos pequeños
 * 
 * @param {object} children  — Hereda elementos hijos del componente
 * @param {string} className — Establece clases adicionales para icono
 * @param {string} padding   — Si existe se establece el padding introducida, sino se establece el valor por defecto
 * @param {string} width     — Si existe se establece la anchura introducida, sino se establece el valor por defecto 
 * @param {string} height    — Si existe se establece la altura introducida, sino se establece el valor por defecto
 * @param {string} style     — Es comparado con cada clave del array styles, sino se establece o no se encuentran coincidencias se devuelve el valor por defecto
 */
export function Frame(props) {
    function setPadding() {
        return props.padding ? props.padding + " " : "p-1 " 
    }
    function setWidth() {
        return props.width ? props.width + " " : "w-fit "
    }
    function setHeight() {
        return props.height ? props.height + " " : "h-fit " 
    }
    function setStyle() {
        const styles = [
            {name: "normal", style: "bg-gray-200/25 dark:bg-slate-700/25 border dark:border-slate-600 "},
            {name: "blue",   style: "bg-cyan-400 border border-cyan-500 dark:border-cyan-300 text-cyan-800 "},
            {name: "red",    style: "bg-red-400 border border-red-500 dark:border-red-300 text-red-800 "},
            {name: "yellow", style: "bg-yellow-400 border border-yellow-500 dark:border-yellow-300 text-yellow-800 "},
            {name: "green",  style: "bg-emerald-400 border border-emerald-500 dark:border-emerald-300 text-emerald-800 "}
        ]

        if(props.style){
            let selected = styles[0].style

            for (let i = 0; i < styles.length; i++) {
                props.style == styles[i].name ? selected = styles[i].style : selected = styles[0].style
            }

            return selected
        } else {
            return styles[0].style
        }
    }
    return (
        <div className={
                setWidth() + setHeight() + setPadding() + setStyle() +
                "rounded-md" + (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </div>
    )
}
/**
 * @component
 * * FrameGroup
 * Este componente es un contenedor de frame con icono y texto descriptivo
 * 
 * @param {string} icon           — Establece el icono
 * @param {string} iconSize       — Establece el tamaño del icono
 * @param {string} iconLink       — Si existe, se crea un enlace contenedor
 * @param {string} iconClassName  — Establece clases adicionales para icono
 * @param {string} frameWidth     — Establece la anchura para frame
 * @param {string} frameHeight    — Establece la altura para frame
 * @param {string} frameClassName — Establece clases adicionales para frame
 * @param {object} children       — Hereda elementos hijos del componente
 */
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
 * @component
 * * Collapse
 * Este componente contiene elementos con visibilidad alternada
 * 
 * @param {string} id                — Establece un sufijo para el id del colapsable
 * @param {string} from              — Establece la altura mínima a mostrar
 * @param {string} to                — Establece la altura máxima a mostrar
 * @param {string} className         — Establece clases adicionales para contenedor
 * @param {string} classNameCollapse — Establece clases adicionales para el colapsable
 */
export function Collapse(props) {
    function setToggleCollapse(e) {
        const parent = e.target.parentElement.parentElement,
              collapse = parent.querySelector("#collapse-" + props.id)

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
            <div 
                id={"collapse-" + props.id}
                className={
                    "transition-all duration-300 ease-in-out overflow-hidden " + props.from +
                    (props.classNameCollapse ? " " + props.classNameCollapse : "")
                }
            >
                {props.children}
            </div>
        </div>
    )
}
/**
 * @component
 * * SideBar
 * Este componente es un contenedor que se inserta en los laterales del DOM
 * para mostrar información o componentes de navegación
 * 
 * @param {string} id        — Establece un sufijo para el id
 * @param {string} width     — Si existe se establece la anchura introducida, sino se establece el valor por defecto
 * @param {string} height    — Si existe se establece la altura introducida, sino se establece el valor por defecto
 * @param {string} className — Establece clases adicionales
 */
export function SideBar(props) {
    function setWidth() {
        return props.width ? props.width + " " : "w-1/3 "
    }
    function setHeight() {
        return props.height ? props.height + " " : "h-[calc(100vh_-_2.5rem)] "
    }
    return (
        <aside
            id={"sidebar-" + props.id}
            className={
                setWidth() + setHeight() + "overflow-y-auto" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </aside>
    )
}
/**
 * @component
 * * List
 * Este componente es una lista contenedora
 * 
 * @param {string} type      — Si existe se establece el tipo de lista introducida, sino se establece el valor por defecto
 * @param {string} margin    — Si existe se establece el margen introducida, sino se establece el valor por defecto
 * @param {string} className — Establece clases adicionales
 * @param {string} children  — Hereda elementos hijos del componente
 */
export function List(props) {
    function setType() {
        return props.type ? props.type + " " : ""
    }
    function setMargin() {
        return props.margin ? props.margin + " " : "mb-3 "
    }
    return (
        <ul className={setType() + setMargin() + "ml-5" + (props.className ? " " + props.className : "")}>
            {props.children}
        </ul>
    )
}