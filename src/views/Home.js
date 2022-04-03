import { ButtonCyan } from "../components/Buttons";
import { ExpandableLabel } from "../components/Labels";
import { Display, Highlight } from "../components/Text";
import { Section, ImageZoomIn } from "../components/Layout";

export default function Home(){
    const copyToClipBoard = (e) =>{
        const copyParent = e.target.parentElement,
              copyInput = copyParent.querySelector('#copyInput');

        copyInput.select();
        copyInput.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyInput.value)
    }
    return (
        <Section id="home">
            <div className="w-80 h-3/4">
                <ImageZoomIn 
                    src="images/profile.jpg"
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
                        onClick={copyToClipBoard}
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
/*bg-gradient-to-bl from-transparent via-cyan-50 to-transparent */