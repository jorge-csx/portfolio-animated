/**
 * * Section props
 * id        -> Indica el id para el section, usado por la navbar
 * bg        -> Sí existe, se asigna a la variable bgImage
 * className -> Clases adicionales para section
 * children  -> Hereda elementos hijos del componente
 */
export function Section(props) {
    const bgImage = {
        backgroundImage: 'url(' + props.bg + ')',
    }
    return (
        <section
            id={ props.id }
            className={ "snap-start w-full h-screen px-24 py-14 flex items-center justify-center gap-8 transition-all ease-in-out " + props.className }
            style={ props.bg ? bgImage : {} }
        >
            { props.children }
        </section>
    )
}
/**
 * * ImageZoomIn props
 * id      -> Establece un id para el elemento
 * src     -> Ruta de imagen a mostrar
 * alt     -> Texto alternativo para imagen
 * onClick -> Función onClick
 * onLoad  -> Función onLoad
 */
export function ImageZoomIn(props) {
    return (
        <div 
            id={props.id} 
            className="h-full rounded-md overflow-hidden"
        >
            <img className={ "w-full h-full object-cover transition-all ease-in-out hover:scale-110 " + props.className }
                src={ props.src }
                onLoad={ props.onLoad }
                onClick={ props.onClick }
                alt={ props.alt }
            />
        </div>
    )
}
/**
 * * Input props
 * title -> Encabezado de input
 * placeholder -> Placeholder en input
 * type -> Tipo de input a devolver
 * className -> Clases adicionales para contenedor
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
            { props.type == 'textarea' ? textarea() : input() }
        </div>  
    )
}
/**
 * * Icon props
 * icon      -> Clases para icono  
 * size      -> Clase para tamaño de icono
 * className -> Clases adicionales para icono
 * style     -> Añade estilos en línea
 * onClick   -> Función onClick
 * link      -> Sí existe, se crea un enlace contenedor
 */
export function Icon(props){
    function basic() {
        return (
            <i
                className={ props.icon + " " + props.size + " " + props.className + " " }
                onClick={ props.onClick }
                style={ props.style }
            />
        )
    }

    if (props.link) {
        return (
            <div className="flex items-center">
                <a 
                    href={ props.link }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                >
                    { basic() }
                </a>
            </div>
        )
    } else {
        return (
            <div className="flex items-center">
                { basic() }
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

            { props.children }

            <div className="
                border bg-slate-700 border-slate-500 text-white font-light m-4 px-2 py-0.5 absolute bottom-0 rounded-[.25rem] whitespace-nowrap transition-all ease-in-out delay-100 opacity-0 pointer-events-none
                group-hover:mb-8 group-hover:opacity-100
                dark:bg-gray-100 dark:border-slate-400 dark:font-normal dark:text-slate-700
            ">
                { props.message }
            </div>
        </div>
    )
}