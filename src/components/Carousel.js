import { Display, Description } from "./Text"
import { ImageZoomIn, Icon, PopUp, Frame } from "./Layout"
import React, { Component, useState } from "react"
import Button from "./Button"
import ProjectSerestech from "../pages/ProjectSerestech";
import ProjectAlternative from "../pages/ProjectAlternative";
import toggleClasses from "../scripts/toggleClasses"

export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [selectedJson, setSelectedJson]   = useState(props.json[0])
    const selectedIndexPosition = (selectedIndex + 1) + " de " + props.images.length
    const [projectState, setProjectState] = useState(0)

    const pagesComponents = {
        serestech: ProjectSerestech,
        alternative: ProjectAlternative
    }
    const [pageComponent, setPageComponent] = useState(
        React.createElement(pagesComponents[props.json[0].page])
    )

    const selectNewImage = (index, images, json, next = true) => {
        setTimeout(() => {
            // Si next es true se almacena la primera condición, sino la siguiente...
            const condition = next
                            ? index < images.length - 1
                            : index > 0
            // Si next es true se evalúa ejecuta la primera instrucción, sino
            // se ejecuta la siguiente instrucción
            const nextIndex = next
                            ? (condition ? index + 1 : 0)
                            : condition ? index - 1 : images.length - 1
            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
            setSelectedJson(json[nextIndex])
            setPageComponent(React.createElement(pagesComponents[json[nextIndex].page]))
        }, 100);
    }

    const previous = () => {
        selectNewImage(selectedIndex, props.images, props.json, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, props.images, props.json)
    }
    /**
     * * actionsBar
     * Contenedor con resumen de proyecto;
     * lenguajes, enlaces y botones para avanzar y retroceder
     */
    const actionsBar = () => {
        // Iconos de lenguajes utilizados con popup
        const languages = () => {
            return (
                <div className="flex gap-2 pl-4 border-l-2 border-cyan-400">
                    <Description margin="m-0">
                        Creado con
                    </Description>
                    {  
                        selectedJson.langs.map((lang, index) => (
                            <Frame key={ index }>
                                <PopUp message={ lang.title }>
                                    <Icon
                                        icon={ lang.icon }
                                        size="text-2xl"
                                        style={{ color : lang.color }}
                                    />
                                </PopUp>
                            </Frame>
                        ))
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
                                        className="cursor-pointer"
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
                            onClick={ previous }
                        >
                            <Icon
                                icon="bx bx-chevron-left"
                                size="text-2xl"
                            />
                        </Button>
                        <p className="m-0 w-14 text-center">
                            { selectedIndexPosition }
                        </p>
                        <Button
                            text="b-to-g"
                            padding="equal"
                            onClick={ next }
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
                    onClick={() => viewProject()}
                >
                    Cerrar
                </Button>
            </div>
        )
    }
    /**
     * * cover
     * Contenedor de imagen y contenido de proyecto,
     * mensaje cta y botón para cerrar
     */
    const cover = () => {
        const id = "project-" + selectedJson.alt
        // Mensaje CTA para hacer clic sobre la imagen y ver contenido de proyecto
        const caption = () => {
            return (
                <p 
                    className="
                        bg-slate-800/80 rounded-md px-5 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 text-white pointer-events-none transition-all ease-in-out
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
                className="w-full h-full overflow-hidden relative group"
            >
                <ImageZoomIn
                    id={id}
                    src={selectedImage}
                    link="#projects"
                    blank="none"
                    className="cursor-pointer"
                    alt={"portada-" + selectedJson.alt}
                    onClick={() => viewProject()}
                />
                {caption()}
                {pageComponent}
            </div>
        )
    }
    /**
     * * viewProject()
     * Función para ejecutar animaciones de transición al hacer clic sobre la imagen contenida en cover
     */
    function viewProject() {

        const section = document.querySelector("#projects"),
              carousel = section.querySelector("div"),
              title = carousel.querySelector("h1"),
              actionsBar = carousel.querySelector("#actions-bar"),
              actionsBarButtons = actionsBar.querySelector("#buttons"),
              cover = carousel.querySelector("#cover"),
              imageContainer = cover.firstChild,
              message = cover.querySelector("p"),
              buttonView = actionsBar.querySelector("#button-view"),
              projectDoc = cover.querySelector("#doc-project"),
              navbar = document.querySelector("nav")

        if (projectState == 0) {
            toggleClasses(section, "", ["px-24", "py-14"])
            toggleClasses(title, ["p-6", "pb-0"])
            toggleClasses(actionsBar, ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"], ["mb-3"])
            toggleClasses(actionsBarButtons, ["hidden"], ["flex"])
            toggleClasses(imageContainer, ["pointer-events-none", "h-2/3", "border-b", "dark:border-b-slate-600"], ["h-full", "rounded-md", "cursor-pointer"])
            toggleClasses(message, ["hidden"])
            toggleClasses(buttonView, "", ["hidden"])
            toggleClasses(navbar, ["-bottom-14"], ["bottom-4"])
            toggleClasses(cover, ["overflow-y-auto"], ["overflow-hidden"])
            toggleClasses(projectDoc, "", ["hidden"])

            toggleClasses(document.querySelector("#root div"), ["overflow-hidden"], ["overflow-y-auto"])
            toggleClasses(document.querySelector("#contact"), ["hidden"])

            setProjectState(1)
        } else {
            toggleClasses(section, ["px-24", "py-14"])
            toggleClasses(title, "", ["p-6", "pb-0"])
            toggleClasses(actionsBar, ["mb-3"], ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"])
            toggleClasses(actionsBarButtons, ["flex"], ["hidden"])
            toggleClasses(imageContainer, ["h-full", "rounded-md", "cursor-pointer"], ["pointer-events-none", "h-2/3", "border-b", "dark:border-b-slate-600"])
            toggleClasses(message, "", ["hidden"])
            toggleClasses(buttonView, ["hidden"])
            toggleClasses(navbar, ["bottom-4"], ["-bottom-14"])
            toggleClasses(cover, ["overflow-hidden"], ["overflow-y-auto"])
            toggleClasses(projectDoc, ["hidden"])

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