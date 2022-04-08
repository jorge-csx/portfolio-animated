import { Icon } from "./Layout"
import { useEffect, useState } from "react"

const themes = [
    { title: 'Light',  theme: 'light',   icon: 'bx bx-sun'    },
    { title: 'Dark',   theme: 'dark',    icon: 'bx bx-moon'   },
    { title: 'System', theme: undefined, icon: 'bx bx-laptop' }
]

export default function Theme(){
    const [appTheme, setActiveTheme] = useState({
        activeTheme: localStorage.theme,
        themes: themes,
    })

    // Ejecuta la función checkTheme al cargar el componente
    useEffect( ()=> { checkTheme() })

    // Comprueba si en 'localStorage' el registro 'theme' es igual a 'dark'
    // o no hay un registro 'theme' pero la 'prefers-color-scheme' es 'dark'
    // añadir al 'DOM' la clase 'dark', si no, remover la clase 'dark' del 'DOM'
    function checkTheme() {
        appTheme.activeTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }

    // Asignación y comprobación de theme en localStorage
    function setStorage(theme, index) {
        toggleActiveTheme(index)

        !(theme === undefined) ? localStorage.theme = theme : localStorage.removeItem('theme')
    }

    function toggleActiveTheme(index) {
        setActiveTheme( {...appTheme, activeTheme : appTheme.themes[index].theme} )
    }

    function toggleActiveStyles(index) {
        if (appTheme.themes[index].theme === appTheme.activeTheme || appTheme.themes[index].theme === appTheme.activeTheme) {
            return "bg-gray-100 dark:bg-slate-700" // Active
        } else {
            return "text-slate-500" // Inactive
        }
    }

    // Elementos de temas renderizados
    function setThemes() {
        return (
            appTheme.themes.map((mode, index) => (
                <li 
                    key={index}
                    className={ toggleActiveStyles(index) + " flex flex-row items-center justify-center gap-2 cursor-pointer py-1 px-2 rounded-full group outline-none transition-all ease-in-out" }
                    onClick={ () => setStorage(mode.theme, index) }
                >
                    <Icon
                        icon={mode.icon}
                        size="text-xl"
                    />
                    <span>
                        { mode.title }
                    </span>
                </li>
            ))
        )
    }

    // Ver y ocultar opciones de tema
    function toggleViewThemes() {
        const options = document.querySelector("#options")

        if (options.classList.contains("hidden")) {
            options.classList.add("flex")
            options.classList.remove("hidden")
        } else {
            options.classList.add("hidden")
            options.classList.remove("flex")
        }
    }

    // Establecer icono según tema actual
    function setNavBarIcon(){
        let icon = []
        for( let i = 0; i < appTheme.themes.length; i++ ) {
            if (appTheme.themes[i].theme === appTheme.activeTheme) {
                icon.push(appTheme.themes[i].icon)
            }
        }
        return icon
    }

    return (
        <div className="relative flex items-center justify-center">
            <ul 
                id="options"
                className="
                    border absolute bottom-full mb-5 hidden flex-row gap-3 p-2 rounded-full bg-white
                    dark:border-slate-600 dark:bg-slate-800
                "
            >
                { setThemes() }
            </ul>
            <Icon
                icon={ setNavBarIcon() }
                size="text-2xl"
                className="cursor-pointer dark:text-slate-400"
                onClick={ () => toggleViewThemes() }
            />
        </div>
    )
}