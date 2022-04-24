import { Display, Description } from "./Text"
import { ImageZoomIn, Icon, PopUp, Frame } from "./Layout"
import React, { useState } from "react"
import Button from "./Button"
import ProjectSerestech from "../pages/ProjectSerestech";
import ProjectAlternative from "../pages/ProjectAlternative";
import toggleClasses from "../scripts/toggleClasses"
/**
 * @component
 * * Carousel
 * Este componente es un carrusel para proyectos, muestra contenido según index actual
 * 
 * @param {object} images — Array con path de imagenes de portada
 * @param {object} json   — Json que contiene la informacion de los proyectos
 * 
 * Basado en https://youtu.be/EWO0WIATQ1g?list=PLPK4KKWhOzZu0CGiBs72O-yNqIu5lmetv
 */
export default function Carousel(props) {
    // Almacena el index del carrusel
    const [selectedIndex, setSelectedIndex] = useState(0)
    // Establece la imagen seleccionada según index
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    // Establece información de proyecto según index
    const [selectedJson, setSelectedJson]   = useState(props.json[0])
    // Almacena el valor del index con formato
    const selectedIndexPosition = (selectedIndex + 1) + " de " + props.images.length
    // Establece si el proyecto se encuentra abierto (1) o cerrado (0), se usa en toggleViewProject()
    const [projectState, setProjectState] = useState(0)
    // Almacena los componentes importados, los cuales almacenan documentación
    const pagesComponents = {
        serestech: ProjectSerestech,
        alternative: ProjectAlternative
    }
    // Establece que componente mostrar según index
    const [actualPage, setActualPage] = useState(
        React.createElement(pagesComponents[props.json[0].page])
    )
    /**
     * @function selectNewIndex
     * Esta función gestiona el contenido del componente según index
     * 
     * @param {number} index — Index
     * @param {object} images — Imagen a mostrar según index
     * @param {object} json — Información a mostrar según index
     * @param {boolean} next — Indica si carrusel avanza o retrocede 
     */
    const selectNewIndex = (index, images, json, next = true) => {
        setTimeout(() => {
            // Si next es true se almacena la primera condición, sino la siguiente...
            const condition = next
                            ? index < images.length - 1
                            : index > 0

            // Si next es true se evalúa ejecuta la primera instrucción,
            // sino se ejecuta la siguiente instrucción
            const nextIndex = next
                            ? (condition ? index + 1 : 0)
                            : condition ? index - 1 : images.length - 1

            // Cambiar imagen, index, json y componente según index
            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
            setSelectedJson(json[nextIndex])
            setActualPage(React.createElement(pagesComponents[json[nextIndex].page]))
        }, 100);
    }
    /**
     * @function previous
     * Esta función retrocede el carrusel
     */
    const previous = () => {
        selectNewIndex(selectedIndex, props.images, props.json, false)
    }
    /**
     * @function next
     * Esta función avanza el carrusel
     */
    const next = () => {
        selectNewIndex(selectedIndex, props.images, props.json)
    }
    /**
     * @subcomponent
     * Este subcomponente establece un contenedor que muestra lenguajes, enlaces y botones
     * referentes al proyecto actual, ademas de botones para controlar la visualización de este
     * 
     * @param {object} selectedJson — Establece la información de los proyectos
     */
    const actionsBar = () => {
        // Iconos con popup de lenguajes utilizados
        const languages = () => {
            return (
                <div className="flex gap-2 pl-4 border-l-2 border-cyan-400">
                    <Description margin="m-0">
                        Creado con
                    </Description>
                    {  
                        selectedJson.langs.map((lang, index) => {
                            if (lang.title == "Sass") {
                                return (
                                    <Frame 
                                        key={index}
                                        className="flex items-center overflow-hidden"
                                        width="w-[2.125rem]"
                                        height="h-[2.125rem]"
                                    >
                                        <PopUp message={lang.title}>
                                            <Icon
                                                icon={lang.icon}
                                                size="text-2xl"
                                                style={{color : lang.color}}
                                            />
                                        </PopUp>
                                    </Frame>
                                )
                            } else {
                                return (
                                    <Frame key={index}>
                                        <PopUp message={lang.title}>
                                            <Icon
                                                icon={lang.icon}
                                                size="text-2xl"
                                                style={{color : lang.color}}
                                            />
                                        </PopUp>
                                    </Frame>
                                )
                            }
                        })
                    }
                </div>
            )
        }
        // Iconos con enlaces hacia web y repositorio
        const links = () => {
            return (
                <div className="flex gap-2">
                    <Description margin="m-0">
                        Visitar web y repositorio
                    </Description>
                    {
                        selectedJson.links.map((link, index) => (
                            <Frame key={index}>
                                <PopUp message={link.title}>
                                    <Icon
                                        key={index}
                                        icon={link.icon}
                                        size="text-2xl"
                                        className={"cursor-pointer " + link.className}
                                        link={link.url}
                                    />
                                </PopUp>
                            </Frame>
                        ))
                    }
                </div>
            )
        }
        // Botones para avanzar y retroceder el carrusel
        const buttonsIndex = () => {
            // Si la longitud del array images es mayor a 1 se imprimen los botones de navegación
            if (props.images.length > 1) {
                return (
                    <div
                        id="buttons"
                        className="flex items-center gap-4 transition-all duration-300 ease-in-out"
                    >
                        <Button
                            text="b-to-g"
                            padding="equal"
                            onClick={previous}
                        >
                            <Icon
                                icon="bx bx-chevron-left"
                                size="text-2xl"
                            />
                        </Button>
                        <p className="m-0 w-14 text-center">
                            {selectedIndexPosition}
                        </p>
                        <Button
                            text="b-to-g"
                            padding="equal"
                            onClick={next}
                        >
                            <Icon
                                icon="bx bx-chevron-right"
                                size="text-2xl"
                            />
                        </Button>
                    </div>
                )
            } 
        }
        return (
            <div
                id="actions-bar" 
                className="flex flex-row items-center justify-between mb-3"
            >
                <div className="w-full flex flex-row gap-4 items-center">
                    {languages()}
                    {links()}
                </div>
                {buttonsIndex()}
                <Button
                    id="button-view"
                    text="b-to-w"
                    className="hidden"
                    onClick={() => toggleViewProject()}
                >
                    Cerrar
                </Button>
            </div>
        )
    }
    /**
     * @subcomponent
     * Este subcomponente es un contenedor para portada, documentación y caption
     */
    const cover = () => {
        // Caption para portada
        const caption = () => {
            return (
                <p 
                    className="
                        bg-slate-800/80 rounded-md px-5 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 text-white pointer-events-none transition-all duration-300 ease-in-out
                        -mb-4 opacity-0
                        group-hover:mb-4 group-hover:opacity-100
                    "
                >
                    Clic para saber más
                </p>
            )
        }
        return (
            <div 
                id="cover"
                className="w-full h-full overflow-hidden relative group scroll-smooth"
            >
                <ImageZoomIn
                    id={"project-" + selectedJson.alt}
                    src={selectedImage}
                    link="#projects"
                    blank="none"
                    className="cursor-pointer"
                    containerClassName="duration-300 border dark:border-slate-600"
                    alt={"portada-" + selectedJson.alt}
                    onClick={() => toggleViewProject()}
                />
                {caption()}
                {actualPage}
            </div>
        )
    }
    /**
     * @function toggleViewProject
     * Esta función ejecuta animaciones de transición al hacer clic sobre la imagen de portada
     */
    function toggleViewProject() {
        const section           = document.querySelector("#projects"),
              carousel          = section.querySelector("div"),
              title             = carousel.querySelector("h1"),
              actionsBar        = carousel.querySelector("#actions-bar"),
              actionsBarButtons = actionsBar.querySelector("#buttons"),
              cover             = carousel.querySelector("#cover"),
              imageContainer    = cover.firstChild,
              caption           = cover.querySelector("p"),
              buttonView        = actionsBar.querySelector("#button-view"),
              navbar            = document.querySelector("#navbar"),
              doc               = document.querySelector("#doc-project")

        // Si proyecto esta cerrado, pasa a abierto...
        if (projectState == 0) {
            toggleClasses(section, "", ["px-24", "py-14"])
            toggleClasses(title, ["p-6", "pb-0"])
            toggleClasses(actionsBar, ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"], ["mb-3"])
            toggleClasses(actionsBarButtons, ["hidden"], ["flex"])
            toggleClasses(imageContainer, ["pointer-events-none", "h-2/3", "border-b", "dark:border-b-slate-600"], ["h-full", "rounded-md", "border", "cursor-pointer"])
            toggleClasses(caption, ["hidden"])
            toggleClasses(buttonView, "", ["hidden"])
            toggleClasses(navbar, ["-bottom-14"], ["bottom-4"])
            toggleClasses(cover, ["overflow-y-auto"], ["overflow-hidden"])
            toggleClasses(doc, "", ["hidden"])

            toggleClasses(document.querySelector("#root div"), ["overflow-hidden"], ["overflow-y-auto"])
            toggleClasses(document.querySelector("#contact"), ["hidden"])

            setProjectState(1)

        // Si proyecto esta abierto, pasa a cerrado...
        } else {
            toggleClasses(section, ["px-24", "py-14"])
            toggleClasses(title, "", ["p-6", "pb-0"])
            toggleClasses(actionsBar, ["mb-3"], ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"])
            toggleClasses(actionsBarButtons, ["flex"], ["hidden"])
            toggleClasses(imageContainer, ["h-full", "rounded-md", "border", "cursor-pointer"], ["pointer-events-none", "h-2/3", "border-b", "dark:border-b-slate-600"])
            toggleClasses(caption, "", ["hidden"])
            toggleClasses(buttonView, ["hidden"])
            toggleClasses(navbar, ["bottom-4"], ["-bottom-14"])
            toggleClasses(cover, ["overflow-hidden"], ["overflow-y-auto"])
            toggleClasses(doc, ["hidden"])

            toggleClasses(document.querySelector("#root div"), ["overflow-y-auto"], ["overflow-hidden"])
            toggleClasses(document.querySelector("#contact"), "", ["hidden"])

            setProjectState(0)
        }
    }
    return (
        <div className="flex flex-col h-full w-full relative">
            <Display>
                {selectedJson.title}
            </Display>
            {actionsBar()}
            {cover()}
        </div>
    )
}