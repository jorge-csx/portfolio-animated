import sectionsJson from '../json/Sections';
import linksJson from '../json/Links';

export function Header(){
    return (
        <header className=" w-full fixed bottom-0 flex px-14 py-4 gap-12 backdrop-blur border-t z-10 bg-white/80">
            <IndicatorsBar
                items={ sectionsJson }
            />
        </header>
    )
}

export function Section(props) {
    return (
        <section id={props.id} className="w-full h-screen px-24 py-14 flex items-center justify-center gap-8 border-y border-red-400">
            {props.children}
        </section>
    )
}

export function ImageZoomIn(props) {
    return (
        <div className="h-full rounded-md overflow-hidden">
            <img className={'w-full h-full object-cover transition ease-in-out\
                hover:scale-110 ' + props.className}
                src={props.src}
                onLoad={props.onLoad}
            />
        </div>
    )
}

export function IndicatorsBar(props) {
    const indicators = () => {
        return (
            props.items.map((item, id) => 
                <a 
                    href={item.link}  
                    key={id}
                    className="w-full group"
                >
                    <div className="mb-1 text-gray-300 transition-all ease-in-out
                        group-hover:text-slate-700
                        ">
                        {item.title}
                    </div>
                    <div className="w-full h-[0.125rem] bg-gray-200 rounded-full transition-all ease-in-out
                        group-hover:bg-slate-700"
                    >
                    </div>
                </a>
            )
        )
    }
    return (
        <div className="w-full flex gap-4">
            { indicators() }
        </div>
    )
}

export function Input(props) {
    if (props.type == 'textarea') {
        return (
            <div className={"flex flex-col " + props.className}>
                <p>{props.title}</p>
                <textarea placeholder={props.placeholder} className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top resize-none
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 
                    placeholder:font-light"
                />
            </div>  
        )
    } else {
        return (
            <div className={"flex flex-col " + props.className}>
                <p>{props.title}</p>
                <input type="text" placeholder={props.placeholder} className="
                    h-full min-h-[2.5rem] border rounded-md p-2 mb-2 align-text-top
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 
                    placeholder:font-light"
                />
            </div>  
        )
    }
}