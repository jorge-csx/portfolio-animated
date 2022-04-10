import { useEffect, useRef, useState } from "react";
// Contemplar cambiar de nombre a useObserver
export default function useObserver(options) {
    const [elements, setElements]  = useState([]) // Elementos observados
    const [entries, setEntries] = useState([])    // Entradas

    const observer = useRef(new IntersectionObserver(function(observedEntries) {
        // console.log(observedEntries);
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