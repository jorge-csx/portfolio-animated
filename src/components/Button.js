/**
 * * Button props
 * id        -> Establece el id
 * type      -> Establece el tipo de button
 * style     -> Compara name en [styles] con prop, para establecer el énfasis de color para el bg, ring y border, y para los estados hover, focus y active
 * text      -> Compara name en [texts] con prop, para establecer la combinación light y dark de colores para el text
 * padding   -> Compara name en [paddings] con prop, para establecer el padding
 * rounded   -> Establece el rounded
 * className -> Clases adicionales
 * onClick   -> Función onClick
 */
/** */
export default function Button(props) {
    const setType = () => {
        return props.type ? props.type : "button"
    }
    const setStyle = () => {
        const styles = [
            { name: "normal", emphasis: "bg-white dark:bg-slate-800 hover:ring-cyan-400 focus:ring-cyan-400 active:bg-gray-100 dark:active:bg-slate-700 border dark:border-slate-600" },
            { name: "cta",    emphasis: "bg-cyan-400 hover:ring-cyan-400 focus:ring-cyan-400 active:bg-cyan-500" }
        ]

        if (props.style) {
            let emphasisSelected = ""
            
            styles.map((style) => {
                if (props.style == style.name) { emphasisSelected = style.emphasis }
            })

            return emphasisSelected
        } else {
            return styles[0].emphasis
        }
    }
    const setPadding = () => {
        const paddings = [
            { name: "normal", size: "px-5 py-2" },
            { name: "small",  size: "py-10" },
            { name: "equal",  size: "p-2" },
            { name: "none",   size: "p-0" }
        ]

        if(props.padding){
            let paddingSelected = ""

            paddings.map((padding) => {
                if (props.padding == padding.name) { paddingSelected = padding.size }
            })

            return paddingSelected
        } else {
            return paddings[0].size
        }
    }
    const setRounded = () => {
        return props.rounded ? props.rounded : "rounded-full"
    }
    const setText = () => {
        const texts = [
            { name: "w-to-b", color: "text-white dark:text-slate-800" },
            { name: "b-to-w", color: "text-slate-800 dark:text-white" },
            { name: "b-to-g", color: "text-slate-800 dark:text-slate-400" }
        ]

        if (props.text) {
            let textSelected = ""

            texts.map((text) => {
                if (props.text == text.name) {
                    textSelected = text.color
                } else {
                    textSelected = props.text
                }
            })

            return textSelected
        } else {
            return texts[0].color
        }
    }

    return (
        <button
            id={props.id}
            type={ setType() }
            className={
                setStyle() + " " + setPadding() + " " + setRounded() + " " + setText() + (props.className ? " " + props.className : "") + 
                " flex flex-row gap-2 font-medium dark:font-semibold outline-none ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-slate-800 transition-all ease-in-out hover:ring-2 focus:ring-2"
            }
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}