export function Section(props) {
    const bgImage = {
        backgroundImage: 'url(' + props.bg + ')'
    }
    return (
        <section 
            className={"w-full h-screen px-24 py-14 flex items-center justify-center gap-8 transition ease-in-out " + props.className}
            style={bgImage}
        >
            {props.children}
        </section>
    )
}

export function ImageZoomIn(props) {
    return (
        <div className="h-full rounded-md overflow-hidden">
            <img className={ "w-full h-full object-cover transition ease-in-out hover:scale-110 " + props.className }
                src={props.src}
                onLoad={props.onLoad}
            />
        </div>
    )
}

export function Input(props) {
    if (props.type == 'textarea') {
        return (
            <div className={"flex flex-col " + props.className}>
                <p>{props.title}</p>
                <textarea placeholder={props.placeholder} className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top resize-none outline-none ring-transparent ring-offset-2 transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    placeholder:font-light"
                />
            </div>  
        )
    } else {
        return (
            <div className={"flex flex-col " + props.className}>
                <p>{props.title}</p>
                <input type="text" placeholder={props.placeholder} className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top outline-none ring-transparent ring-offset-2 transition-all in-out
                    focus:ring-cyan-400 focus:ring-2
                    placeholder:font-light"
                />
            </div>  
        )
    }
}