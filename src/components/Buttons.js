/**
 * * Button CTA
 */
export function ButtonCyan(props) {
    return (
        <button className="
            outline-transparent bg-cyan-400 px-5 py-2 rounded-full text-white outline outline-2 outline-offset-2 transition-all duration-200 ease-in-out 
            hover:outline-cyan-400
            active:bg-cyan-500
        ">
            {props.children}
        </button>
    )
}
export function ButtonNeutral(props) {
    return (
        <button className="
            outline-transparent border px-5 py-2 rounded-full outline outline-2 outline-offset-2 transition-all duration-200 ease-in-out 
            hover:outline-gray-200
            active:bg-slate-100
        " onClick={props.onClick}>
            {props.children}
        </button>
    )
}

// min-w-[2.375rem] min-h-[2.375rem]