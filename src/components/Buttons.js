/**
 * * Button CTA
 */
export function ButtonCyan(props) {
    return (
        <button className="
            outline-transparent bg-cyan-400 px-5 py-2 rounded-full text-white font-semibold outline outline-2 outline-offset-2 transition-all duration-200 ease-in-out
            hover:outline-cyan-400
            active:bg-cyan-500
        ">
            {props.title}
        </button>
    )
}