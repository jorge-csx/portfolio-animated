import { useEffect, useRef, useState } from "react";
import { Icon, Frame, SideBar, List } from "./Layout";
import getCleanString from "../scripts/getCleanString";
/**
 * @component
 * * Document
 * Este componente es un componente con formato para documentar proyectos
 *
 * @param {string} id — Establece un id para el elemento
 * @param {string} className — Clases adicionales
 * @param {object} children — Hereda elementos hijos del componente
 */
export default function Document(props) {
  // Almacena referencia de la documentación
  const doc = useRef();
  // Establece documentación actual
  const [actualDoc, setActualDoc] = useState();
  // Almacena las id's de encabezados a los cuáles no se les asignará estilos
  const ignoreHl = ["diseno-ui", "seo", "funciones-ux", "administracion"];

  // Cada vez que el componente es cargado se define el documento actual
  useEffect(() => {
    setActualDoc(doc.current);
  });

  /**
   * @function setHeadlineFormat
   * Esta función da estilos a todos los encabezados h2, h3 y h4 que se encuentren en el documento
   *
   * @param {object} hl — Headline al cual se le aplican estilos
   */
  function setHeadlineFormat(hl) {
    // A partir del textContent del encabezado se formatea la id con getCleanString()
    let id = getCleanString(hl.textContent);
    let mt = "";

    // Se asigna id formateado
    hl.setAttribute("id", id);

    // Se aplican estilos según tagName
    switch (hl.tagName) {
      case "H2":
        mt = "mt-10";
        break;
      case "H3":
        // Se filtra ignoreHl
        ignoreHl.includes(hl.getAttribute("id"))
          ? (mt = "mt-0")
          : (mt = "mt-6");
        break;
      case "H4":
        mt = "mt-5";
        break;
    }

    // Se asignan estilos a encabezados
    hl.classList.add(mt, "scroll-mt-4");
  }
  /**
   * @function
   * Esta función recupera los encabezados, los formatea y además, a partir de ellos,
   * asigna los items con enlaces para la SideBar
   */
  const setItemsSideBar = () => {
    if (actualDoc) {
      // Almacena las secciones del documento
      const sections = actualDoc.querySelectorAll("article section");
      // Almacena encabezados por sección
      const sectionsHeadlines = [];
      // Almacena los encabezados
      const nodes = [];
      // Almacena los enzabezados formateados como enlaces para la SideBar
      const items = [];

      // Recupera los encabezados por sección y los almacena en sectionsHeadlines
      sections.forEach((section) => {
        sectionsHeadlines.push(section.querySelectorAll("h2, h3, h4"));
      });

      // Extrae todos los encabezados de sectionsHeadlines y los almacena en nodes
      sectionsHeadlines.map((headlines) => {
        headlines.forEach((headline) => {
          nodes.push(headline);
        });
      });

      // Da formato a todos los encabezados en node
      for (let i = 0; i < nodes.length; i++) {
        const hoverStyle = " hover:text-cyan-400 hover:dark:text-cyan-400";

        // Da formato a todos los encabezados
        setHeadlineFormat(nodes[i]);

        if (nodes[i].tagName == "H2") {
          items.push(
            <li
              key={i}
              className={
                "font-medium dark:font-normal dark:text-white mb-1 flex" +
                hoverStyle
              }
            >
              <a href={"#" + nodes[i].getAttribute("id")} className="w-full">
                {nodes[i].textContent}
              </a>
            </li>
          );
        } else if (nodes[i].tagName == "H3") {
          items.push(
            <List key={i} margin="mb-1">
              <li className={"flex" + hoverStyle}>
                <a href={"#" + nodes[i].getAttribute("id")} className="w-full">
                  {nodes[i].textContent}
                </a>
              </li>
            </List>
          );
        } else if (nodes[i].tagName == "H4") {
          items.push(
            <List key={i} margin="mb-1">
              <List margin="mb-1">
                <li className={"text-slate-500 flex" + hoverStyle}>
                  <a
                    href={"#" + nodes[i].getAttribute("id")}
                    className="w-full"
                  >
                    {nodes[i].textContent}
                  </a>
                </li>
              </List>
            </List>
          );
        }
      }
      return (
        <List margin="mb-0" className="relative">
          {items}
        </List>
      );
    }
  };
  return (
    <div
      id={"doc-project"}
      className={
        "w-full hidden" + (props.className ? " " + props.className : "")
      }
      ref={doc}
    >
      <SideBar
        id="doc"
        height="h-[calc(100vh_-_9.188rem)]"
        className="sticky top-0 p-4 mt-10 hidden lg:block"
      >
        {setItemsSideBar()}
      </SideBar>
      {props.children}
      <SideBar id="blank" className="hidden lg:block" />
    </div>
  );
}
/**
 * @component
 * * Anchor
 * Este componente es una referencia de un elemento hacía sí mismo, permite centrar la lectura en este al hacer clic sobre el,
 * así como para modificar la dirección del sitio y que al visitarla nos enfoque en este elemento
 *
 * @param {string} link — Id del elemento a referenciar
 * @param {object} children — Hereda elementos hijos del componente
 */
export function Anchor(props) {
  return (
    <div className="relative flex mb-3 group">
      <Frame className="absolute right-full mr-2 hidden group-hover:block">
        <Icon icon="bx bx-hash" size="text-xl"></Icon>
      </Frame>
      <a href={"#" + props.id}>{props.children}</a>
    </div>
  );
}
