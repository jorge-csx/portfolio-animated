import { ButtonCyan } from "../components/Buttons";
import { ExpandableLabel } from "../components/Labels";
import { Display, Highlight } from "../components/Text";
import { Section, ImageZoomIn } from "../components/Layout";

export default function Home(){
    return (
        <Section id="home" bg="images/bg/home.jpg" className="bg-cover bg-fixed bg-cyan-400">
            <div className="w-80 h-3/4 border rounded-md">
                <ImageZoomIn 
                    src="images/profile.png"
                    className="backdrop-blur-sm hover:scale-100 bg-white/50"
                />
            </div>
            <div className="w-80 h-3/4 relative">
                <Display>Front-end Web Jr</Display>
                <p className="m-0">Hola, bienvenidx,</p>
                <p>soy <Highlight>Jorge Soria,</Highlight> tengo <Highlight>21 años.</Highlight></p>
                
                <div className="my-4 grid grid-flow-col justify-start gap-4">
                    <ExpandableLabel 
                        icon="bx bx-map-pin"
                        title="Apodaca NL"
                    />
                    <ExpandableLabel
                        icon="bx bx-envelope"
                        title="jorge_soriaw@outlook.com"
                        link="mailto:jorge_soriaw@outlook.com"
                        iconF="bx bx-copy"
                        clipboard="y"
                    />
                </div>
                <p className="mb-2">
                    Disfruto del <Highlight>diseño digital, UI/UX,</Highlight> y de la <Highlight>programación</Highlight> en general.
                </p>
                <p className="mb-2">
                    He fusionado tales gustos para especializarme en el desarollo <Highlight>Frontend.</Highlight>
                </p>
                <p>
                    Creo en el <Highlight>trabajo en equipo</Highlight> como medio para el <Highlight>desarollo de grandes ideas.</Highlight>
                </p>
                <div className="absolute bottom-0">
                    <a href="#contact">
                        <ButtonCyan>Escribirme</ButtonCyan>
                    </a>
                </div>
            </div>
        </Section>
    )
}