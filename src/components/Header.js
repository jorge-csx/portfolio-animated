import sectionsJson from '../json/Sections';
import linksJson from '../json/Links';

function Header(){
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
                <a key={link.id} href={link.url} className="flex items-end">
                    <div className="flex">
                        <i className={link.icon + ' text-2xl'}></i>
                    </div>
                </a>
            )  
        )
    }

    return (
        <header className="sticky top-0 flex px-14 py-8 gap-12  w-full">
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

export default Header;