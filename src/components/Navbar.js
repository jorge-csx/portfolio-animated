import sectionsJson from '../json/Sections';
import { Icon } from './Layout';
import { useState } from 'react';
import Theme from './Theme';

export default function Navbar(){
    function IndicatorsBar() {
        const [appState, setActive] = useState({
            activeIndicator: sectionsJson[0], // Indicator default
            indicators: sectionsJson          // Indicators data
        })
    
        function toggleActive(index) {
            setActive( {...appState, activeIndicator : appState.indicators[index]} )
        }
    
        function toggleActiveStylesTitle(index) {
            if (appState.indicators[index] === appState.activeIndicator) {
                return "text-slate-700 dark:text-white" // Active
            } else {
                return "text-slate-500 group-hover:text-slate-700 dark:group-hover:text-white" // Inactive
            }
        }
    
        function toggleActiveStylesBar(index) {
            if (appState.indicators[index] === appState.activeIndicator) {
                return "bg-cyan-400" // Active
            } else {
                return "bg-trasparent group-hover:bg-slate-300 dark:group-hover:bg-slate-400" // Inactive
            }
        }
        
        return (
            <div id="indicators" className="w-full flex items-center gap-4 translate-y-px">
                {
                    appState.indicators.map((indicator, index) => (
                        <a 
                            key={index}
                            href={indicator.link}  
                            className="w-full group"
                            onClick={ () => toggleActive(index) }
                        >
                            <div className={ "mt-3 mb-3 text-center transition-all ease-in-out " + toggleActiveStylesTitle(index) }>
                                {indicator.title}
                            </div>
                            <div className={ "w-full h-0.5 rounded-t-md transition-all ease-in-out " + toggleActiveStylesBar(index) }/>
                        </a>
                    ))
                }
            </div>
        )
    }

    return (
        <nav className="
            hidden w-1/2 min-w-fit fixed bottom-0 left-1/2 -translate-x-1/2 px-7 pb-0 gap-4 border z-10 backdrop-blur bg-white/80 mb-4 rounded-full
            dark:border-slate-600 dark:bg-slate-800/90 dark:text-white

            md:flex
        ">
            <IndicatorsBar
                items={ sectionsJson }
            />
            <Theme/>
            <Icon
                icon="bx bxl-github"
                size="text-2xl"
                className="cursor-pointer dark:text-slate-400"
                link="#"
            />
        </nav>
    )
}

// * Breakpoints 
/*
    En Tailwind lo breakpoints estan orientados a first mobile
*/