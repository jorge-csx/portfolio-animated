/**
 * @component
 * * Display
 * Este componente es un encabezado para destacar información
 * 
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Display(props) {
    return (
        <h1 
            className={ 
                "text-4xl md:text-5xl md:text-left font-semibold font-display mb-3 dark:text-white" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </h1>
    )
}
/**
 * @component
 * * Header
 * Este componente es un encabezado general
 * 
 * @param {string} id        — Establece un id
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Header(props) {
    return (
        <h2 
            id={props.id}
            className={
                "text-3xl font-medium font-display mb-3 dark:text-white" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </h2>
    )
}
/**
 * @component
 * * Title
 * Este componente es un encabezado para iniciar el contenido de una sección
 * 
 * @param {string} id        — Establece un id
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Title(props){
    return (
        <h3 
            id={props.id}
            className={
                "text-2xl font-medium dark:font-normal font-display mb-1 dark:text-white" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </h3>
    )
}
/**
 * @component
 * * Subtitle
 * Este componente es un encabezado para iniciar contenido relacionado al principal
 * 
 * @param {string} id        — Establece un id
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Subtitle(props) {
    return (
        <h4
            id={props.id}
            className={
                "text-xl font-medium dark:font-normal mb-1 dark:text-white" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </h4>
    )
}
/**
 * @component
 * * Highlight
 * Este componente resalta el texto contenido
 * 
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Highlight(props) {
    return (
        <span 
            className={
                "rounded-sm px-0.5 py-[0.1875rem] mx-0 -my-[0.1875rem] bg-cyan-300/10 text-cyan-400" +
                (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </span>
    )
}
/**
 * @component
 * * Description
 * Este componente es un párrafo utilizado para texto descriptivo
 * 
 * @param {string} type      — Es comparado con cada clave del array types, si no se establece
 *                             o no se encuentran coincidencias se devuelve el valor por defecto
 * @param {string} margin    — Si existe se establece el margen introducido, sino se establece el valor por defecto
 * @param {string} className — Establece clases adicionales
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Description(props) {
    function setType() {
        const types = [
            {name: "quote", style: "border-l-2 pl-2 border-cyan-400 "}
        ]

        if(props.type){
            let selected = ""

            for (let i = 0; i < types.length; i++) {
                if (props.type == types[i].name) {selected = types[i].style}
            }

            return selected
        } else {
            return ""
        }
    }
    function setMargin() {
        return props.margin ? props.margin + " " : "mb-2 " 
    }
    return (
        <div className={
            setMargin() + setType() + "flex items-center gap-2 text-slate-400 dark:text-slate-500 font-body font-light dark:font-medium" +
            (props.className ? " " + props.className : "")
            }
        >
            {props.children}
        </div>
    )
}
/**
 * @component
 * * Bold
 * Este componente establece el peso del texto contenido en semibold
 * 
 * @param {object} children  — Hereda elementos hijos de componente
 */
export function Bold(props) {
    return (
        <span className="font-semibold dark:font-medium dark:text-white">
            {props.children}
        </span>
    )
}