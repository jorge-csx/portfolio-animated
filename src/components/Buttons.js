/**
 * * ButtonCyan props
 * children -> Hereda elementos hijos del componente
 * link     -> Sí existe, se crea un enlace contenedor
 */
export function ButtonCyan(props) {
    function basic(){
        return(
            <button 
                className="
                    bg-cyan-400 px-5 py-2 rounded-full text-white font-medium outline-none ring-transparent ring-offset-2 ring-offset-white transition-all ease-in-out 
                    hover:ring-cyan-400 hover:ring-2
                    focus:ring-cyan-400 focus:ring-2
                    active:bg-cyan-500
                    focus
                    dark:text-slate-800 dark:font-semibold dark:ring-offset-slate-800"
                tabIndex="0"
            >
                {props.children}
            </button>
        )
    }

    if(props.link) {
        return (
            <a 
                href={props.link}
                tabIndex="-1">
                { basic() }
            </a>
        )
    } else {
        return basic()
    }
}
/**
 * * ButtonNeutralFit
 * onClick   -> Función onClick
 * children  -> Hereda elementos hijos del componente 
 */
export function ButtonNeutralFit(props) {
    return (
        <button 
            className="
                border flex rounded outline-none ring-transparent ring-offset-2 ring-offset-white transition-all ease-in-out
                dark:border-slate-600 dark:ring-offset-slate-800
                hover:ring-cyan-400 hover:ring-2
                focus:ring-cyan-400 focus:ring-2
                active:bg-gray-100
                dark:active:bg-slate-700/25"
            tabIndex="0"
            onClick={props.onClick}
        >
            { props.children }
        </button>
    )
}