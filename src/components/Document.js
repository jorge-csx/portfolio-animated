import { useEffect, useRef, useState } from "react"
import { Icon, Frame, SideBar, List } from "./Layout"
import getCleanString from "../scripts/getCleanString"
/**
 * * Document
 * id        -> Establece un id para el elemento
 * classname -> Clases adicionales para Document
 * children  -> Hereda elementos hijos del componente
 */
export default function Document(props) {
    const doc = useRef()
    const [actualDoc, setActualDoc] = useState()
    const ignoreHl = ["diseno-ui", "seo", "funciones-ux", "administracion"]

    useEffect(() => {
        setActualDoc(doc.current)
    })

    function setHeadlineFormat(hl) {
        let id = getCleanString(hl.textContent)
        let mt = null

        switch (hl.tagName) {
            case "H2": mt = "mt-10"
                break
            case "H3":
                ignoreHl.includes(hl.getAttribute("id"))
                    ? mt = "mt-0"
                    : mt = "mt-6"
                break
            case "H4": mt = "mt-5"
                break
        }

        hl.setAttribute("id", id)
        hl.classList.add(mt, "scroll-mt-4")
    }

    const setSideBar = () => {
        if (actualDoc) {
            const sections = actualDoc.querySelectorAll("article section")
            const sectionsHeadlines = []
            const nodes = []
            const items = []

            sections.forEach(section => {
                sectionsHeadlines.push(section.querySelectorAll("h2, h3, h4")) 
            })

            sectionsHeadlines.map((headlines) => {
                headlines.forEach(headline => {nodes.push(headline)})
            })  

            for (let i = 0; i < nodes.length; i++) {
                const hoverStyle = " hover:text-cyan-400 hover:dark:text-cyan-400"
                
                setHeadlineFormat(nodes[i])

                if (nodes[i].tagName == "H2") {
                    items.push(
                        <li 
                            key={i}
                            className={"font-medium dark:font-normal dark:text-white mb-1 flex" + hoverStyle}
                        >
                            <a href={"#" + nodes[i].getAttribute("id")} className="w-full">
                                {nodes[i].textContent}
                            </a>
                        </li>
                    )
                } else if (nodes[i].tagName == "H3") {
                    items.push(
                        <List key={i} margin="mb-1">
                            <li className={"flex" + hoverStyle}>
                                <a href={"#" + nodes[i].getAttribute("id")} className="w-full">
                                    {nodes[i].textContent}
                                </a>
                            </li>
                        </List>
                    )
                } else if (nodes[i].tagName == "H4") {
                    items.push(
                        <List key={i} margin="mb-1">
                            <List margin="mb-1">
                                <li className={"text-slate-500 flex" + hoverStyle}>
                                    <a href={"#" + nodes[i].getAttribute("id")} className="w-full">
                                        {nodes[i].textContent}
                                    </a>
                                </li>
                            </List>
                        </List>
                    )
                }
            }
            return (
                <List margin="mb-0" className="relative">
                    {items}
                </List>
            )
        }
    }

    return (
        <div
            id={"doc-project"}
            className={"w-full" + (props.className ? " " + props.className : "")}
            ref={doc}
        >
            <SideBar 
                height="h-[calc(100vh_-_9.188rem)]"
                className="sticky top-0 p-4 mt-10">
                {setSideBar()}
            </SideBar>
            { props.children }
        </div>
    )
}
/**
 * * Anchor
 * link -> Recibe id de elemento referenciado
 */
export function Anchor(props) {
    return (
        <div className="relative flex mb-3 group">
            <Frame className="absolute right-full mr-2 hidden group-hover:block">
                <Icon
                    icon="bx bx-hash"
                    size="text-xl"
                >
                </Icon>
            </Frame>
            <a href={"#" + props.id}>
                {props.children}
            </a>
        </div>
    )
}