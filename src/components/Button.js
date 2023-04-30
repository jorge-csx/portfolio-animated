/**
 * @component
 * * Button
 * Este componente es nu botón personalizable
 *
 * @param {string}   id         — Establece el id para botón
 * @param {string}   type       — Establece el tipo de botón
 * @param {string}   style      — Parámetro para setStyle(), es comparado con styles.name
 * @param {string}   padding    — Establece padding
 * @param {string}   rounded    — Establece border-radius
 * @param {string}   text       — Establece colores para el texto
 * @param {string}   className  — Establece clases adicionales
 * @param {function} onClick    — Establece función para onClick

 */
export default function Button(props) {
  function basic() {
    return (
      <button
        id={props.id}
        type={setType()}
        className={
          setStyle() +
          setPadding() +
          setRounded() +
          setText() +
          setBreakpoint() +
          (props.className ? props.className + " " : "") +
          "flex flex-row gap-2 justify-center items-center font-medium dark:font-semibold outline-none ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-slate-800 transition-all ease-in-out hover:ring-2 focus:ring-2"
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
  function setType() {
    return props.type ? props.type : "button";
  }
  function setStyle() {
    // Styles para background, ring y border de button y sus estados hover, focus y active
    const styles = [
      {
        name: "normal",
        style:
          "bg-white dark:bg-slate-800 hover:ring-cyan-400 focus:ring-cyan-400 active:bg-gray-100 dark:active:bg-slate-700 border dark:border-slate-600",
      },
      {
        name: "cta",
        style:
          "bg-cyan-400 hover:ring-cyan-400 focus:ring-cyan-400 active:bg-cyan-500",
      },
    ];

    if (props.style) {
      let selected = "";

      for (let i = 0; i < styles.length; i++) {
        props.style == styles[i].name
          ? (selected = styles[i].style)
          : (selected = styles[0].style);
      }

      return selected + " ";
    } else {
      return styles[0].style + " ";
    }
  }
  function setPadding() {
    const paddings = [
      { name: "normal", size: "px-5 py-2" },
      { name: "small", size: "py-10" },
      { name: "equal", size: "p-2" },
      { name: "none", size: "p-0" },
    ];

    if (props.padding) {
      let selected = "";

      paddings.map((padding) => {
        return props.padding == padding.name
          ? (selected = padding.size)
          : paddings[0].size;
      });

      return selected + " ";
    } else {
      return paddings[0].size + " ";
    }
  }
  function setRounded() {
    return props.rounded ? props.rounded + " " : "rounded-full ";
  }
  function setText() {
    const texts = [
      { name: "w-to-w", color: "text-white dark:text-cyan-900" },
      { name: "w-to-b", color: "text-white dark:text-slate-800" },
      { name: "b-to-w", color: "text-slate-800 dark:text-white" },
      { name: "b-to-g", color: "text-slate-800 dark:text-slate-400" },
    ];

    if (props.text) {
      let selected = "";

      texts.map((text) => {
        return props.text == text.name
          ? (selected = text.color)
          : (selected = props.text);
      });

      return selected + " ";
    } else {
      return texts[0].color + " ";
    }
  }
  function setBreakpoint() {
    const breakpoints = [
      { name: "md", style: "md:hidden" },
      { name: "lg", style: "lg:hidden" },
    ];

    if (props.breakpoint) {
      let selected = "";

      for (let i = 0; i < breakpoints.length; i++) {
        props.breakpoint == breakpoints[i].name
          ? (selected = breakpoints[i].style + " ")
          : (selected = breakpoints[0].style + " ");
      }

      return selected;
    } else {
      return "";
    }
  }
  if (props.link) {
    return <a href={props.link}>{basic()}</a>;
  } else {
    return basic();
  }
}
