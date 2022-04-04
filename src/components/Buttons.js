/**
 * * Button CTA
 */
export function ButtonCyan(props) {
    return (
        <button className="
            outline-transparent bg-cyan-400 px-5 py-2 rounded-full text-white font-medium outline outline-2 outline-offset-2 transition-all ease-in-out 
            hover:outline-cyan-400
            focus:outline-cyan-400
            active:bg-cyan-500
        ">
            {props.children}
        </button>
    )
}

// min-w-[2.375rem] min-h-[2.375rem]