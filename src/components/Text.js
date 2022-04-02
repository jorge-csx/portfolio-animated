export function Display(props) {
    return (
        <h1 className="text-5xl font-semibold font-display mb-2">
            {props.children}
        </h1>
    )
}
export function Title(props) {
    return (
        <h2 className="text-3xl font-medium font-display mb-3">
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
        <span className="code-highlight bg-code-highlight">
            {props.children}
        </span>
    )
}
export function Description(props) {
    return (
        <div className="flex items-center gap-2 text-gray-400 mb-2 font-light font-body">
            {props.children}
        </div>
    )
}