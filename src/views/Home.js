import Button from "../components/Buttons";
import { ExpandableLabel } from "../components/Labels";
import { Display, Highlight } from "../components/Text";
import { Section } from "../components/Layout";
import copyToClipBoard from "../scripts/copyToClipBoard";

export default function Home(){
    return (
        <Section 
            id="home"
            bg="images/bg/home.png"
            className="
                bg-cover bg-no-repeat bg-fixed border-b bg-[center_bottom_-2rem] animate-bgSlideUp
                dark:border-slate-600"
        >
            <div className="
                w-80 h-3/4 border rounded-md overflow-hidden 
                dark:border-slate-600"
            >
                <img 
                    className="
                        w-full h-full object-cover backdrop-blur-sm bg-white/30
                        dark:bg-slate-800/90 dark:opacity-90
                    "
                    src="images/profile.png"
                    alt="imagen-perfil"
                />
            </div>
            <div className="w-80 h-3/4 relative">
                <Display className="dark:text-cyan-400">
                    Front-end Web Jr
                </Display>
                <p className="m-0">Hola, bienvenidx,</p>
                <p>soy <Highlight>Jorge Soria,</Highlight> tengo <Highlight>21 años.</Highlight></p>
                
                <div className="my-4 grid grid-flow-col justify-start gap-4">
                    <ExpandableLabel 
                        icon="bx bx-map-pin"
                        content="Apodaca NL"
                    />
                    <ExpandableLabel
                        icon="bx bx-envelope"
                        content="jorge_soriaw@outlook.com"
                        link="mailto:jorge_soriaw@outlook.com"
                        iconF="bx bx-copy"
                        onClick={ copyToClipBoard }
                    />
                </div>
                <p>Disfruto del <Highlight>diseño digital, UI/UX,</Highlight> y de la <Highlight>programación</Highlight> en general.</p>
                <p>He fusionado tales gustos para especializarme en el desarollo <Highlight>Frontend.</Highlight></p>
                <p>Creo en el <Highlight>trabajo en equipo</Highlight> como medio para el <Highlight>desarollo de grandes ideas.</Highlight></p>
                <div className="absolute bottom-0">
                    <Button
                        style="cta"
                    >
                        Escribirme
                    </Button>
                </div>
            </div>
        </Section>
    )
}