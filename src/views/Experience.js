import { Section, Icon, ImageZoomIn } from "../components/Layout";
import { Label } from "../components/Labels";
import {
  Header,
  Title,
  Subtitle,
  Highlight,
  Description,
} from "../components/Text";
/**
 * @component
 * * AboutMe
 * Este componente es la vista "sobre mí"
 */
export default function AboutMe() {
  return (
    <Section
      id="experience"
      className="
                bg-gray-50/50
                dark:bg-gray-900/30"
    >
      {/* Primer contenedor */}
      <div className="flex flex-col justify-between md:w-2/5 md:h-2/3">
        <Header>Competencias</Header>
        <ImageZoomIn
          src="images/illustrations/experience.png"
          containerClassName="w-4/5 md:w-auto md:h-3/5 flex self-center"
          alt="ilustración-experiencia"
        />
        <p>
          Soy autodidacta y aspirante a Ingenierio en Software, cuento con
          conocimientos en{" "}
          <Highlight>Html, Css, JavaScript, Sass, Tailwind, Figma...</Highlight>
        </p>
      </div>
      {/* Segundo contenedor */}
      <div className="md:w-2/5 md:h-2/3">
        <Header>Experiencia</Header>
        <div className="flex justify-between">
          <Title>Académica</Title>
          <Description>
            2016 --&gt; 2019
            <Icon
              icon="bx bx-time-five"
              size="text-xl"
              className="text-slate-400"
            />
          </Description>
        </div>
        <p>
          Me gradué como{" "}
          <Highlight>Técnico en TIC con enfoque en programación web</Highlight>{" "}
          en la Escuela Álvaro Obregón San Nicolás.
        </p>
        <p>
          Adquirí <Highlight>conocimientos</Highlight> en:
        </p>

        <div className="flex flex-wrap gap-3 mb-6 pt-4">
          <Label>Programación web</Label>
          <Label>ASP</Label>
          <Label>PHP</Label>
          <Label>Maquetación web</Label>
          <Label>Bases de datos</Label>
          <Label>Redes</Label>
          <Label>Animación digital</Label>
        </div>

        <Title>Laboral</Title>
        <p>
          — Estoy <Highlight>en búsqueda de experiencia laboral</Highlight> en
          este ámbito.
        </p>
      </div>
    </Section>
  );
}
