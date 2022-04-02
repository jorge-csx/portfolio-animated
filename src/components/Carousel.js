import { Display, Description } from "./Text"
import { ImageZoomIn } from "./Layout"
import { useState } from "react"

export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [selectedJson, setSelectedJson]   = useState(props.json[0])
    const [loaded, setLoaded]               = useState(false)
    const selectedIndexPosition = (selectedIndex + 1) + ' de ' + props.images.length
   
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

    const setSelectedJsonIcons = () => {
        return (
            selectedJson.langs.map((lang) => (
                <i 
                    key={lang.id} 
                    className={lang.icon + ' text-2xl flex items-center'}
                    style={{color: lang.color}}
                />
            ))
        )
    }

    const setSelectedJsonLinks = () => {
        return (
            selectedJson.links.map((link) => (
                <a 
                    key={link.id} 
                    href={link.url}
                    className="flex items-center"
                >
                    <i className={link.icon + ' text-2xl text-slate-700'}/>
                </a>
            ))
        ) 
    }

    const indexButtons = () => {
        // Si la longitud del array images es mayor a 1 se imprimen los botones de navegación
        if (props.images.length > 1) {
            return (
                <div className="flex gap-4 pb-2">
                    <i class='bx bx-chevron-left text-2xl cursor-pointer text-gray-300
                            hover:text-slate-700 transition-all ease-in-out' onClick={previous}/>
                    <p className="m-0 w-14 text-center">
                        { selectedIndexPosition }
                    </p>
                    <i class='bx bx-chevron-right text-2xl cursor-pointer text-gray-300
                            hover:text-slate-700 transition-all ease-in-out' onClick={next}/>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col h-full w-full">
            <Display>
                {selectedJson.title}
            </Display>

            <div className="flex flex-row justify-between">
                <div className="w-1/2">
                    <Description>
                        <div className="flex gap-2 items-center">
                            Creado con
                            { setSelectedJsonIcons() }
                        </div>/
                        <div className="flex gap-2 items-center">
                            Visitar web y repositorio
                            { setSelectedJsonLinks() }
                        </div>
                    </Description>
                </div>
                { indexButtons() }
            </div>

            <div className="w-full h-5/6 overflow-hidden cursor-pointer">
                <ImageZoomIn 
                    src={selectedImage}
                    className={loaded ? "loaded" : ""}
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </div>
    )
}
