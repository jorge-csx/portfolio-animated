import { Display, Description } from "./Text"
import { ImageZoomIn, Icon, PopUp } from "./Layout"
import { useState } from "react"
import { ButtonNeutralFit } from "./Buttons"

export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [selectedJson, setSelectedJson]   = useState(props.json[0])
    const [loaded, setLoaded]               = useState(false)
    const selectedIndexPosition = (selectedIndex + 1) + " de " + props.images.length
   
    const selectNewImage = (index, images, json, next = true) => {
        setLoaded(false)
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

    const ActionsBar = () => {
        const icons = () => {
            return (
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
            )
        }
        const links = () => {
            return (
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
            ) 
        }
        const indexButtons = () => {
            // Si la longitud del array images es mayor a 1 se imprimen los botones de navegación
            if (props.images.length > 1) {
                return (
                    <div className="flex gap-4">
                        <ButtonNeutralFit
                            onClick={ previous }
                        >
                            <Icon
                                icon="bx bx-chevron-left"
                                size="text-2xl"
                            />
                        </ButtonNeutralFit>
                        <p className="m-0 w-14 text-center">
                            { selectedIndexPosition }
                        </p>
                        <ButtonNeutralFit
                            onClick={ next }
                        >
                            <Icon
                                icon="bx bx-chevron-right"
                                size="text-2xl"
                            />
                        </ButtonNeutralFit>
                    </div>
                )
            } 
        }

        return (
            <div className="flex flex-row items-center justify-between mb-3">
                <div className="w-full flex flex-row gap-4 items-center">
                    {/* Texto e iconos */}
                    <div className="flex gap-2 pl-4 border-l-2 border-cyan-400">
                        <Description
                            margin="m-0"
                        >
                            Creado con
                        </Description>
                        { icons() }
                    </div>
                    {/* Texto y links */}
                    <div className="flex gap-2">
                        <Description
                            margin="m-0"
                        >
                            Visitar web y repositorio
                        </Description>
                        { links() }
                    </div>
                </div>
                {/* Botones para cambiar index */}
                { indexButtons() }
            </div>
        )
    }

    const Cover = () => {
        return (
            <div className="w-full h-full overflow-hidden cursor-pointer">
                <ImageZoomIn 
                    id="example"
                    src={ selectedImage }
                    className={ loaded ? "loaded active:" : ""  }
                    alt={ "portada-" + selectedJson.alt }
                    onLoad={ () => setLoaded(true) }
                    onClick={ props.coverOnClick }
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full w-full">
            <Display>
                {selectedJson.title}
            </Display>
            <ActionsBar/>
            <Cover/>
        </div>
    )
}
// className={ loaded ? "loaded active:" : ""  }