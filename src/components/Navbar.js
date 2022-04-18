import sectionsJson from '../json/Sections';
import { Icon } from './Layout';
import Theme from './Theme';

export default function Navbar(){
    function indicators() {
        const indicators = []
        indicators.push(
            sectionsJson.map((indicator, index) => (
                <li key={index} className="w-24 translate-y-px">
                    <a 
                        href={indicator.link}  
                        className="w-full group"
                    >
                        <div
                            id="indicator-title"
                            className="
                                mt-3 mb-3 text-center transition-all ease-in-out text-slate-500
                                group-hover:text-slate-700 
                                dark:group-hover:text-white dark:font-normal
                            "
                        >
                            {indicator.title}
                        </div>
                        <div
                            id="indicator-bar" 
                            className="w-full h-0.5 rounded-t-md transition-all ease-in-out"
                        />
                    </a>
                </li>
            ))
        )

        return (
            <ul className="w-full flex items-center gap-4 justify-between">
                { indicators }
            </ul>
        )
    }
    
    return (
        <nav
            id="navbar"
            className="
                hidden min-w-fit fixed bottom-4 left-1/2 -translate-x-1/2 px-7 pb-0  z-10 gap-4 backdrop-blur rounded-full transition-all ease-in-out
                border bg-white/80
                dark:border-slate-600 dark:bg-slate-800/90 dark:text-white      

                md:flex
            "
        >
            { indicators() }
            <Theme/>
            <Icon
                icon="bx bxl-github"
                size="text-2xl"
                className="cursor-pointer dark:text-slate-400"
                link="https://github.com/jorgesoriax/portfolio-22"
            />
        </nav>
    )
}