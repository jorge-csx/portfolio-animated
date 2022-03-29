import { ButtonCyan } from "../components/Buttons";
import { Section } from "../components/Layout";

export default function Contact(){
    return (
        <Section id="contact">
            <h1>Hablemos</h1>
            <p>Puede contactar conmigo aquí mismo o hechar un vistazo a mis redes sociales. (editar)</p>
            <div>
                <input type="text" className="border"/>
                <input type="text" className="border"/>
                <input type="text" className="border"/>
            </div>
            <ButtonCyan title="Hablemos"/>
            <div>
                <i>a</i><i>b</i><i>c</i>
            </div>
        </Section>
    )
}