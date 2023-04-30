import sectionsJson from "../json/Sections";
import { Icon } from "./Layout";
import Theme from "./Theme";
import { SlideMenu, toggleSlideMenu, DotsMenu, toggleDotsMenu } from "./Menus";
import Button from "./Button";
import { Title } from "./Text";
/**
 * @component
 * * TabBar
 * Este componente es una barra de navegación por secciones fijada al final del vh,
 * además de Theme y un enlace al repositorio de este portafolio
 */
export default function TabBar() {
  function setIndicators() {
    const indicators = [];
    indicators.push(
      sectionsJson.map((indicator, index) => (
        // w-24
        <li
          key={index}
          className="w-[calc(100%_-_2rem)] md:w-24 translate-y-px ml-4"
        >
          <a href={indicator.link} className="w-full group">
            <div
              id="indicator-title"
              className="
                                mt-3 mb-3 transition-all ease-in-out text-slate-500
                                group-hover:text-slate-700
                                dark:group-hover:text-white dark:font-normal
                                md:text-center
                            "
            >
              {indicator.title}
            </div>
            <div
              id="indicator-bar"
              className="w-full h-0.5 rounded-md md:rounded-t-md transition-all ease-in-out"
            />
          </a>
        </li>
      ))
    );
    return (
      <ul className="w-full flex flex-col md:flex-row justify-center md:justify-between gap-4 mt-4 md:mt-0">
        {indicators}
      </ul>
    );
  }

  return (
    <nav
      id="navbar"
      className="
                sticky top-0 z-10 border-b bg-white/60 transition-[bottom] ease-in-out
                dark:border-slate-600 dark:bg-slate-800/80 dark:text-white
                md:fixed md:top-auto md:px-7 md:pb-0 md:border md:min-w-fit md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:rounded-full md:block
            "
    >
      {/* Contenido para dispositivos medianos y grandes */}
      <div className="hidden md:flex flex-row gap-4">
        {setIndicators()}
        <Theme id="tabbar" />
        <Icon
          icon="bx bxl-github"
          size="text-2xl"
          className="cursor-pointer dark:text-slate-400"
          link="https://github.com/jorgesoriax/portfolio-22"
        />
      </div>

      {/* Contenido para dispositivos pequeños */}
      <div className="flex flex-row justify-between p-4 md:hidden">
        {/* Botón para alternar SlideMenu */}
        <Button
          id="btn-slide-menu-nav"
          text="b-to-w"
          padding="equal"
          rounded="rounded-md"
          onClick={() => {
            toggleSlideMenu("slide-menu-nav");
            toggleDotsMenu("dots-menu-nav", "hide");
          }}
        >
          <Icon icon="bx bx-menu" size="text-2xl" />
        </Button>
        {/* Botón para alternar DotsMenu */}
        <DotsMenu id="nav">
          <Theme id="dots-menu" />
          <Icon
            icon="bx bxl-github"
            size="text-2xl"
            className="cursor-pointer dark:text-slate-400"
            link="https://github.com/jorgesoriax/portfolio-22"
          />
        </DotsMenu>
      </div>
      <SlideMenu id="nav" containerClassName="mt-px" className="px-4">
        <Title>Secciones</Title>
        {setIndicators()}
      </SlideMenu>
    </nav>
  );
}
