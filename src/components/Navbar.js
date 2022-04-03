import sectionsJson from '../json/Sections';
import { useState } from 'react';
export default function Navbar(){
    return (
        <header className=" w-1/2 min-w-fit fixed bottom-0 left-1/2 -translate-x-1/2 flex px-7 pt-3 pb-0 gap-12 backdrop-blur border z-10 bg-white/75 mb-4 rounded-full">
            <IndicatorsBar
                items={ sectionsJson }
            />
        </header>
    )
}

function IndicatorsBar(props) {
    const [appState, setActive] = useState({
        activeIndicator: sectionsJson[0], // Indicator default
        indicators: sectionsJson          // Indicators data
    })

    function toggleActive(index) {
        setActive({...appState, activeIndicator : appState.indicators[index] })
    }

    function toggleActiveStylesTitle(index) {
        if (appState.indicators[index] === appState.activeIndicator) {
            // Active
            return "mb-2 font-medium text-slate-700 text-center content-center transition-all ease-in-out"
        } else {
            // Inactive
            return "mb-2 font-medium text-slate-700 text-center transition-all ease-in-out group-hover:text-slate-700"
        }
    }
    function toggleActiveStylesBar(index) {
        if (appState.indicators[index] === appState.activeIndicator) {
            // Active
            return "w-full h-0.5 bg-slate-700 rounded-t-md mix-blend-multiply transition-all ease-in-out"
            // Inactive
        } else {
            return "w-full h-0.5 bg-trasparent rounded-t-md transition-all ease-in-out group-hover:bg-slate-700"
        }
    }
    
    return (
        <div className="w-full flex gap-4 translate-y-px">
            {
                appState.indicators.map((indicator, index) => (
                <a 
                    key={index}
                    href={indicator.link}  
                    className="w-full group"
                    onClick={ () => toggleActive(index) }
                >
                    <div className={ toggleActiveStylesTitle(index)}>
                        {indicator.title}
                    </div>
                    <div className={ toggleActiveStylesBar(index) }>
                    </div>
                </a>
                ))
            }
        </div>
    )
}