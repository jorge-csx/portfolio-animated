import sectionsJson from '../json/Sections';
import linksJson from '../json/Links';

export function Header(){
    const getSections = () => {
        return (
            sectionsJson.map((section) => 
                <a key={section.id} href={section.href} className="w-full">
                    <div className='
                        w-full h-8 flex items-center pl-3 text-slate-400 text-sm transition ease-in-out
                        hover:text-slate-700
                    '>
                        {section.title}    
                    </div>
                </a>
            )             
        )
    }
    const getLinks = () => {
        return (
            linksJson.map((link) => 
                <a key={link.id} href={link.url} className="flex items-end" target="_blank" rel="noopener noreferrer">
                    <div className="flex">
                        <i className={link.icon + ' text-2xl'}></i>
                    </div>
                </a>
            ) 
        )
    }
    return (
        <header className="fixed bottom-0 flex px-14 py-4 gap-12 w-full backdrop-blur border-t z-10 bg-white/90">
            <div className="
                flex w-full relative
                before:content-[''] before:absolute before:border-b-2 before:bottom-0 before:w-full before:rounded-full
                after:content-[''] after:absolute after:border-b-2 after:bottom-0 after:w-1/4 after:border-slate-700 after:rounded-full
            ">
                {getSections()}
            </div>
            <div className="flex gap-2">
                {getLinks()}
            </div>
        </header>
    )
}
export function Section (props) {
    return (
        <section id={props.id} className="w-full h-screen px-24 py-14 flex items-center justify-center gap-8">
            {props.children}
        </section>
    )
}
export function ImageZoomIn (props) {
    return (
        <div className="w-full h-full rounded-md overflow-hidden">
            <img className="
                h-full object-cover transition ease-in-out
                hover:scale-110
            " 
                src={props.src}
            />
        </div>
    )
}