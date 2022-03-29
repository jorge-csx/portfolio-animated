export function Label(props){
    return (
        <label className="border px-4 py-2 rounded-full w-fit flex items-center text-sm">
            {props.children}
        </label>
    )
}
export function ExpandableLabel(props) {
    function setLink() {
        if (props.link) {
            return (
                <a href={props.link} className="underline decoration-1 underline-offset-4">
                    <span className="
                        opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                        group-hover:opacity-100
                    ">
                        {props.title}
                    </span>
                    <input className="w-0" id="copyInput" value={props.title} type="text" readOnly/>
                </a>
            )
        } else {
            return (
                <span className="
                    opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                    group-hover:opacity-100
                ">
                    {props.title}
                </span>
            )
        }
    }
    return (
        <div className="
            border p-2 gap-0 rounded-full w-[2.375rem] min-w-[2.375rem] max-w-fit overflow-hidden flex items-center text-sm group transition-all ease-in-out delay-100
            hover:px-4 hover:py-2 hover:gap-4 hover:w-[25rem]
        ">
            <i className={props.icon + ' text-xl'}/>
            {setLink()}
            <i className={
                props.iconF + ' text-xl cursor-pointer opacity-0 transition-all ease-in-out delay-100 \
                group-hover:opacity-100'
            } onClick={props.onClick}/>
        </div>
    )
}