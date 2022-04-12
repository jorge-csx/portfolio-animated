import { Display, Description } from "./Text"
import { ImageZoomIn, Icon, PopUp } from "./Layout"
import { useState } from "react"
import Button from "./Buttons"
import ProjectsDoc from "../components/ProjectsDoc";

export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [selectedJson, setSelectedJson]   = useState(props.json[0])
    const selectedIndexPosition = (selectedIndex + 1) + " de " + props.images.length
    const [projectState, setProjectState] = useState(0)

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
                    <Description
                        margin="m-0"
                    >
                        Creado con
                    </Description>
                    {  
                        selectedJson.langs.map((lang, index) => (
                            <div 
                                key={ index }
                                className="rounded-md p-1 border bg-gray-200/25 dark:bg-slate-700/25 dark:border-slate-600"
                            >
                                <PopUp
                                    message={ lang.title }
                                >
                                    <Icon
                                        icon={ lang.icon }
                                        size="text-2xl"
                                        style={{ color : lang.color }}
                                    />
                                </PopUp>
                            </div>
                        ))
                    }
                </div>
            )
        }
        // Iconos con enlaces hacia web y repositorio
        const links = () => {
            return (
                <div className="flex gap-2">
                    <Description
                        margin="m-0"
                    >
                        Visitar web y repositorio
                    </Description>
                    { 
                        selectedJson.links.map((link, index) => (
                            <div
                                key={ index } 
                                className="rounded-md p-1 border bg-gray-200/25 dark:bg-slate-700/25 dark:border-slate-600"
                            >
                                <PopUp
                                    message={ link.title }
                                >
                                    <Icon
                                        key={ index }
                                        icon={ link.icon }
                                        size="text-2xl"
                                        className="cursor-pointer"
                                        link={ link.url }
                                    />
                                </PopUp>
                            </div>
                        ))
                    }
                </div>
            )
        }
        // Botones para avanzar y retroceder el carrusel
        const buttons = () => {
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
                    { languages() }
                    { links() }
                </div>
                { buttons() }
                <Button
                    id="button-view"
                    text="b-to-w"
                    className="hidden"
                    onClick={ () => viewProject() }
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
        const message = () => {
            return (
                <p className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 text-white pointer-events-none transition-all ease-in-out
                    -mb-4 opacity-0
                    group-hover:mb-4 group-hover:opacity-100
                ">
                    Presione para saber más sobre el desarrollo de este proyecto
                </p>
            )
        }

        return (
            <div 
                id="cover"
                className="w-full h-full overflow-hidden relative group"
            >
                <ImageZoomIn
                    id={ id }
                    src={ selectedImage }
                    link="#projects"
                    blank="none"
                    className="cursor-pointer"
                    alt={ "portada-" + selectedJson.alt }
                    onClick={ () => viewProject() }
                />
                { message() }
                
                <ProjectsDoc>
                    Hola este es un ejemplo
                </ProjectsDoc>
            </div>
        )
    }
    /**
     * * viewProject()
     * Función para ejecutar animaciones de transición al hacer clic sobre la imagen contenida en cover
     */
    function viewProject() {
        const toggleView = (element, classAdd, classRemove) => {
            if (classAdd) {
                for (let i = 0; i < classAdd.length; i++) {
                    element.classList.add(classAdd[i])
                }
            }
            if (classRemove) {
                for (let i = 0; i < classRemove.length; i++) {
                    element.classList.remove(classRemove[i])
                }
            }
        }

        const section = document.querySelector("#projects"),
              carousel = section.querySelector("div"),
              title = carousel.querySelector("h1"),
              actionsBar = carousel.querySelector("#actions-bar"),
              actionsBarButtons = actionsBar.querySelector("#buttons"),
              cover = carousel.querySelector("#cover"),
              imageContainer = cover.firstChild,
              message = cover.querySelector("p"),
              navbar = document.querySelector("nav"),
              buttonView = actionsBar.querySelector("#button-view")

              console.log(buttonView);

        if (projectState == 0) {
            toggleView(section, "", ["px-24", "py-14"])
            toggleView(title, ["p-6", "pb-0"])
            toggleView(actionsBar, ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"], ["mb-3"])
            // toggleView(actionsBarButtons, ["opacity-0", "pointer-events-none"], ["opacity-100"])
            toggleView(actionsBarButtons, ["hidden"], ["flex"])
            toggleView(imageContainer, ["pointer-events-none", "h-1/2"], ["h-full", "rounded-md", "cursor-pointer"])
            toggleView(message, ["hidden"])
            // toggleView(buttonView, ["opacity-100"], ["opacity-0", "pointer-events-none"])
            toggleView(buttonView, ["block"], ["hidden"])
            toggleView(navbar, ["-bottom-14"], ["bottom-4"])
            toggleView(cover, ["overflow-y-auto"], ["overflow-hidden"])

            toggleView(document.querySelector("#root div"), ["overflow-hidden"], ["overflow-y-auto"])

            setProjectState(1)
        } else {
            toggleView(section, ["px-24", "py-14"])
            toggleView(title, "", ["p-6", "pb-0"])
            toggleView(actionsBar, ["mb-3"], ["p-6", "pb-5", "pt-0", "border-b", "dark:border-slate-600"])
            // toggleView(actionsBarButtons, ["opacity-100"], ["opacity-0", "pointer-events-none"])
            toggleView(actionsBarButtons, ["flex"], ["hidden"])
            toggleView(imageContainer, ["h-full", "rounded-md", "cursor-pointer"], ["pointer-events-none", "h-1/2"])
            toggleView(message, "", ["hidden"])
            // toggleView(buttonView, ["opacity-0", "pointer-events-none"], ["opacity-100"])
            toggleView(buttonView, ["hidden"], ["block"])
            toggleView(navbar, ["bottom-4"], ["-bottom-14"])
            toggleView(cover, ["overflow-hidden"], ["overflow-y-auto"])

            toggleView(document.querySelector("#root div"), ["overflow-y-auto"], ["overflow-hidden"])

            setProjectState(0)
        }
    }

    return (
        <div className="flex flex-col h-full w-full">
            <Display
            >
                {selectedJson.title}
            </Display>
            { actionsBar() }
            { cover() }
        </div>
    )
}