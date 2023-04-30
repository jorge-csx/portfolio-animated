import Button from "../components/Button";
import { ExpandableLabel } from "../components/Labels";
import { Display, Highlight } from "../components/Text";
import { Section, ImageZoomIn } from "../components/Layout";
import copyToClipBoard from "../scripts/copyToClipBoard";
/**
 * @component
 * * Home
 * Este componente es la vista de inicio
 */
export default function Home() {
  return (
    <Section
      id="home"
      bg="images/background/background.png"
      className="
                bg-cover bg-no-repeat bg-fixed border-b bg-[center_bottom_-2rem] animate-bgSlideUp
                dark:border-slate-600
            "
    >
      {/* Primer contenedor */}
      <div
        className="
                    w-1/2 rounded-full border overflow-hidden dark:border-slate-600
                    md:w-80 md:h-3/4 md:rounded-md
                "
      >
        <ImageZoomIn
          className="
                        w-full h-full object-cover bg-white/60
                        dark:bg-slate-800/80
                        md:w-full md:h-full
                    "
          src="images/profile.png"
          alt="imagen-perfil"
        />
      </div>
      {/* Segundo contenedor */}
      <div className="md:relative md:w-80 md:h-3/4">
        <Display className="dark:text-cyan-400 text-center">
          Front-end Web Jr
        </Display>
        <p className="text-center md:text-left">
          Bienvenidos, mi nombre es <Highlight>Jorge Soria</Highlight> y tengo{" "}
          <Highlight>21 años</Highlight>
        </p>

        <div className="my-4 grid grid-flow-col gap-4 justify-center md:justify-start">
          <ExpandableLabel icon="bx bx-map-pin" content="Apodaca NL" />
          <ExpandableLabel
            icon="bx bx-envelope"
            content="jorge_soriaw@outlook.com"
            link="mailto:jorge_soriaw@outlook.com"
            iconF="bx bx-copy"
            onClick={copyToClipBoard}
          />
        </div>
        <div className="bg-white/60 dark:bg-slate-800/80 rounded-md border dark:border-slate-600 p-4 md:bg-transparent md:border-0 md:p-0">
          <p>
            Disfruto del <Highlight>diseño digital</Highlight> y de la{" "}
            <Highlight>programación</Highlight> en general.
          </p>
          <p>
            He fusionado dichos gustos para especializarme en el desarollo{" "}
            <Highlight>Frontend.</Highlight>
          </p>
          <p>
            Creo en el <Highlight>trabajo en equipo</Highlight> como medio para
            el <Highlight>desarollo de grandes ideas.</Highlight>
          </p>
        </div>
        <div className="mt-6 flex justify-center md:absolute md:bottom-0">
          <Button style="cta" link="#contact">
            Hablemos
          </Button>
        </div>
      </div>
    </Section>
  );
}
