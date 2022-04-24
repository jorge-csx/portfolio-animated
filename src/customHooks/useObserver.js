import { useEffect, useRef, useState } from "react";
/**
 * @hook
 * * useObserver
 * Este hook trabaja con un observer para dar estilos por sección a la TabBar
 * 
 * @param {} options — Establece las opciones para el comportamiento del observador
 */
export default function useObserver(options) {
    const [elements, setElements]  = useState([]) // Elementos observados
    const [entries, setEntries] = useState([])    // Entradas

    const observer = useRef(new IntersectionObserver(function(observedEntries) {
        setEntries(observedEntries)
    }, options))

    useEffect(() => {
        const currentObserver = observer.current
        currentObserver.disconnect()

        if (elements.length > 0) {
            elements.forEach(element => currentObserver.observe(element))
        }

        return function cleanUp() {
            const currentObserver = observer.current
            currentObserver.disconnect()
        }

    }, [elements])

    return [observer.current, setElements, entries]
}