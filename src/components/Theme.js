import { Icon } from "./Layout"
import { useEffect, useState } from "react"
import toggleClasses from "../scripts/toggleClasses"
// Almacena los temas disponibles
const themes = [
    { title: 'Light',  theme: 'light',   icon: 'bx bx-sun'    },
    { title: 'Dark',   theme: 'dark',    icon: 'bx bx-moon'   },
    { title: 'System', theme: undefined, icon: 'bx bx-laptop' }
]
/**
 * @component
 * * Theme
 * Este componente es un icono que contiene un elemento con los diferentes temas a elegir
 */
export default function Theme(){
    // Almacena el tema activo en localStorage y los temas disponibles
    const [appTheme, setActiveTheme] = useState({
        activeTheme: localStorage.theme,
        themes: themes,
    })

    // Ejecuta la función checkTheme al cargar el componente para comprobar el tema actual
    useEffect( ()=> { checkTheme() })

    /**
     * @function checkTheme
     * Esta función comprueba si en 'localStorage' el registro 'theme' es igual a 'dark',
     * o si no hay un registro 'theme' pero la 'prefers-color-scheme' es 'dark',
     * si cualquiera de estas dos se cumple, añade al 'DOM' la clase 'dark',
     * sino la remueve
     */
    function checkTheme() {
        const dom = document.documentElement

        appTheme.activeTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? toggleClasses(dom, ["dark"])
            : toggleClasses(dom, "", ["dark"])
    }
    /**
     * @function toggleActiveTheme
     * Esta función establece el tema seleccionado en el estado
     * 
     * @param {number} index — Establece el tema seleccionado
     */
    function toggleActiveTheme(index) {
        setActiveTheme({...appTheme, activeTheme : appTheme.themes[index].theme})
    }
    /**
     * @function setStorage
     * Esta función asigna el valor de theme en localStorage
     * 
     * @param {object} theme — Establece el valor del tema a aplicar
     * @param {number} index — Establece la posición del tema seleccionado en el array themes
     */
     function setStorage(theme, index) {
        // Asigna la posición en que se encuentra el tema seleccionado
        toggleActiveTheme(index)
        // Si el tema es diferente a undefined, lo asigna al item theme, sino elimina el item theme
        !(theme === undefined) ? localStorage.theme = theme : localStorage.removeItem('theme')
    }
    /**
     * @subcomponent
     * * themes
     * Este subcomponente contiene los temas disponibles, solo es mostrado al hacer clic
     * sobre el icono de temas en la TabBar y se oculta cuando este pierde el hover
     */
    function themes() {
        function setThemes() {
            return (
                appTheme.themes.map((mode, index) => (
                    <li 
                        key={index}
                        className={toggleActiveStyles(index) +
                            "flex flex-row items-center justify-center gap-2 cursor-pointer py-1 px-2 rounded-full group outline-none"
                        }
                        onClick={() => setStorage(mode.theme, index)}
                    >
                        <Icon
                            icon={mode.icon}
                            size="text-xl"
                        />
                        <span>
                            {mode.title}
                        </span>
                    </li>
                ))
            )
        }
        return (
            <ul 
                id="options"
                className="
                    border absolute bottom-full mb-2 hidden flex-row gap-3 p-2 rounded-full bg-white
                    dark:border-slate-600 dark:bg-slate-800
                "
            >
                {setThemes()}
            </ul>
        )
    }
    /**
     * @function toggleActiveStyles
     * Esta función establece los estilos para el subcomponente themes según el tema seleccionado
     * 
     * @param {number} index — Establece el tema seleccionado
     */
    function toggleActiveStyles(index) {
        if (appTheme.themes[index].theme === appTheme.activeTheme) {
            return "bg-gray-100 dark:bg-slate-700 " // Active
        } else {
            return "text-slate-500 " // Inactive
        }
    }
    /**
     * @function toggleViewThemes
     * Esta función muestra y oculta el subcomponente themes
     */
    function toggleViewThemes() {
        const options = document.querySelector("#options")

        function hide() {
            toggleClasses(options, ["hidden"], ["flex"])
        }
        function show() {
            toggleClasses(options, ["flex"], ["hidden"])
        }
        
        options.classList.contains("hidden") ? show() : hide()

        // Si el elemento pierde el hover, este se oculta
        options.addEventListener("mouseleave", () => {hide()})
    }
    /**
     * @function setNavBarIcon
     * Esta función muestra el icono en la TabBar según el tema seleccionado
     */
    function setNavBarIcon(){
        let icon = []

        for( let i = 0; i < appTheme.themes.length; i++ ) {
            if (appTheme.themes[i].theme === appTheme.activeTheme) {icon.push(appTheme.themes[i].icon)}
        }

        return icon
    }
    return (
        <div className="relative flex items-center justify-center group">
            {themes()}
            <Icon
                icon={setNavBarIcon()}
                size="text-2xl"
                className="cursor-pointer dark:text-slate-400"
                onClick={() => toggleViewThemes()}
            />
        </div>
    )
}