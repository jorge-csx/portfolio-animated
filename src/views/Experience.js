import { Section, Icon } from "../components/Layout";
import { Label } from "../components/Labels";
import { Title, Subtitle, Highlight, Description } from "../components/Text"

export default function AboutMe(){
    return (
        <Section 
            id="experience"
            className="
                bg-gray-50/50
                dark:bg-gray-900/30"
        >
            <div className="w-1/3 h-2/3 flex flex-col justify-between">
                <Title>Competencias</Title>
                <img 
                    src="images/experience.png"
                    className=" w-96"
                    alt="ilustración-experiencia"
                />
                <p>Soy autodidacta, cuento con conocimientos en <Highlight>Html, Css, JavaScript, Sass, Tailwind, Figma...</Highlight></p>
            </div>

            <div className="w-2/5 h-2/3">
                <Title>Experiencia</Title>
                <div className="flex justify-between">
                    <Subtitle>Académica</Subtitle>
                    <Description>
                        Cursado desde 2016 a 2019
                        <Icon
                            icon="bx bx-time-five"
                            size="text-xl"
                            className="text-slate-400"
                        />
                    </Description>
                </div>
                <p>Termine mi <Highlight>carrera técnica en programación web</Highlight> en la Escuela Industrial y Preparatoria Técnica Álvaro Obregón.</p>
                <p>En donde adquirí <Highlight>conocimientos</Highlight> en:</p>

                <div className="flex flex-row flex-wrap gap-2 py-2 mb-6">
                    <Label>Programación web</Label>
                    <Label>Maquetación web</Label>
                    <Label>Bases de datos</Label>
                    <Label>Redes</Label>
                    <Label>Animación digital</Label>
                    <Label>Mecanografía</Label>
                </div>

                <Subtitle>Laboral</Subtitle>
                <p>— Estoy <Highlight>en búsqueda de experiencia laboral</Highlight> en este ámbito.</p>
            </div>
        </Section>
    )
}