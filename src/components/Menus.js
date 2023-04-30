import toggleClasses from "../scripts/toggleClasses";
import Button from "./Button";
import { Icon } from "./Layout";
/**
 * @component
 * * SlideMenu
 * Este componente es mostrado en pantallas pequeñas
 *
 * @param {string} id                 — Establece un sufijo para el id
 * @param {string} height             — Si existe se establece la altura introducida para el contenido, sino se establece el valor por defecto
 * @param {string} innerHtml          — Si existe se establece el HTML a insertar
 * @param {string} containerClassName — Establece clases adicionales para el contenedor
 * @param {string} className          — Establece clases adicionales
 * @param {string} children           —  Hereda elementos hijos del componente
 */
export function SlideMenu(props) {
  const id = "slide-menu-" + (props.id ? props.id : "");

  function setHeight() {
    return props.height ? props.height + " " : "h-screen ";
  }
  function setInnerHTML() {
    if (props.innerHTML) {
      return <div className="mr-5" dangerouslySetInnerHTML={props.innerHTML} />;
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
      return breakpoints[0].style + " ";
    }
  }
  return (
    <div
      id={id}
      className={
        setBreakpoint() +
        "hidden w-full fixed top-0 z-20 bg-black/50" +
        (props.containerClassName ? " " + props.containerClassName : "")
      }
      onClick={() => toggleSlideMenu(id, "hide")}
    >
      <div
        className={
          setHeight() +
          (props.className ? props.className + " " : "") +
          "pt-4 w-1/2 overflow-y-auto text-slate-700 bg-white border-r dark:text-slate-400 dark:bg-slate-800 dark:border-r-slate-600"
        }
      >
        {setInnerHTML()}
        {props.children}
      </div>
    </div>
  );
}
/**
 * @function toggleSlideMenu
 * Esta función alterna la visiblidad del componente SlideMenu
 *
 * @param {string} slideMenuId — Establece el slideMenu a alternar
 * @param {string} state       — Establece la acción a ejecutar
 */
export function toggleSlideMenu(slideMenuId, state) {
  const slideMenu = document.querySelector("#" + slideMenuId);

  function show() {
    toggleClasses(slideMenu, "", ["hidden"]);
  }
  function hide() {
    toggleClasses(slideMenu, ["hidden"]);
  }
  // Si existe el elemento slideMenu...
  if (slideMenu) {
    // Si existe el parámetro state...
    if (state) {
      if (state == "show") {
        show();
      } else if (state == "hide") {
        hide();
      }
    } else {
      slideMenu.classList.contains("hidden") ? show() : hide();
    }
  }
}
/**
 * @component
 * * dotsMenu
 * Este componente es un botón que alterna la visibilidad del menú que contiene
 *
 * @param {string} id       — Establece un sufijo para el id
 * @param {string} children —  Hereda elementos hijos del componente
 */
export function DotsMenu(props) {
  const id = "dots-menu-" + (props.id ? props.id : "");
  return (
    <div className="relative">
      <Button
        text="b-to-w"
        padding="equal"
        rounded="rounded-md"
        className="w-[2.625rem] relative"
        onClick={() => {
          toggleDotsMenu(id);
          toggleSlideMenu("slide-menu-nav", "hide");
        }} // Para abrir DotsMenu se cierra SlideMenu y viceversa
      >
        <Icon
          icon="bx bx-dots-vertical-rounded"
          size="text-2xl"
          containerClassName="pointer-events-none"
        />
      </Button>
      <div
        id={id}
        className="
                    hidden absolute border top-full mt-8 flex-col gap-4 p-4 rounded-md left-1/2 -translate-x-1/2
                    border-b bg-white/60 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white
                "
      >
        {props.children}
      </div>
    </div>
  );
}
/**
 * @function toggleDotsMenu
 * Esta función alterna la visiblidad del componente DotsMenu
 *
 * @param {string} dotsMenuId — Establece el dotsMenu a alternar
 * @param {string} state      — Establece la acción a ejecutar
 */
export function toggleDotsMenu(dotsMenuId, state) {
  const dotsMenu = document.querySelector("#" + dotsMenuId);

  function show() {
    toggleClasses(dotsMenu, ["flex"], ["hidden"]);
  }
  function hide() {
    toggleClasses(dotsMenu, ["hidden"], ["flex"]);
  }
  if (dotsMenu) {
    if (state) {
      if (state == "show") {
        show();
      } else if (state == "hide") {
        hide();
      }
    } else {
      dotsMenu.classList.contains("hidden") ? show() : hide();
    }
  }
}
