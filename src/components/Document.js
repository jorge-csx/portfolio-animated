import { useRef } from "react"
import { Icon, Frame } from "./Layout"
/**
 * * Document
 * id        -> Establece un id para el elemento
 * classname -> Clases adicionales para Document
 * children  -> Hereda elementos hijos del componente
 */
export default function Document(props) {
    return (
        <div
            id={"doc-project"}
            className={ "p-10 w-full " + props.className}
        >
            { props.children }
        </div>
    )
}
/**
 * * Anchor
 * Empleado dentro de contenedor de título que será referenciado
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