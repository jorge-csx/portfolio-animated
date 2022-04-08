/**
 * * Text local props
 * children  -> Hereda elementos hijos de componente
 * className -> Clases adicionales
 */
export function Display(props) {
    return (
        <h1 className={ "text-5xl font-semibold font-display mb-2 dark:text-white " + props.className}>
            {props.children}
        </h1>
    )
}
export function Title(props) {
    return (
        <h2 className="text-3xl font-medium font-display mb-3 dark:text-white">
            {props.children}
        </h2>
    )
}
export function Subtitle(props){
    return (
        <h3 className="text-2xl font-medium font-display mb-3">
            {props.children}
        </h3>
    )
}
export function Highlight(props) {
    return (
        <span className="
            rounded-sm px-0.5 py-[0.1875rem] mx-0 -my-[0.1875rem] bg-cyan-300/10 text-cyan-400
        ">
            {props.children}
        </span>
    )
}
/**
 * * Description props
 * margin -> Sí existe, establece un nuevo margin
 */
export function Description(props) {
    function setMargin() {
        if(!props.margin){
            return "mb-2"
        } else {
            return props.margin
        }      
    }
    return (
        <div className={"flex items-center gap-2 text-slate-400 font-body " + setMargin()}>
            {props.children}
        </div>
    )
}