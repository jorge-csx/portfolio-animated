import { ButtonCyan } from "../components/Buttons";
import { Section, Input } from "../components/Layout";
import { IconLabel } from "../components/Labels"
import { Display } from "../components/Text"

export default function Contact(){
    return (
        <Section id="contact">
            <div>
                <Display>Hablemos</Display>
                <p className="mb-10">Puede escribirme un mensaje o hechar un vistazo a mis redes sociales.</p>
                <div className="grid grid-rows-2 grid-cols-2 gap-x-4 mb-4">
                    <Input
                        title="Asunto (opcional)"
                    />
                    <Input
                        title="Mensaje"
                        className="row-span-2"
                        type="textarea"
                    />
                    <Input
                        title="Correo electrónico"
                    />
                </div>
                <ButtonCyan>Hablemos</ButtonCyan>
                <div className="flex flex-row gap-4 mt-10">
                    <IconLabel
                        icon="bx bx-envelope"
                        title="jorge_soriaw@outlook.com"
                        link="mailto:jorge_soriaw@outlook.com"
                    />
                    <IconLabel
                        icon="bx bxl-linkedin-square"
                        title="/in/jorgesoriax"
                        link="https://www.linkedin.com/in/jorgesoriax/"
                    />
                    <IconLabel
                        icon="bx bxl-dribbble"
                        title="/jorgesoriax"
                        link="https://dribbble.com/jorgesoriax"
                    />
                </div>
            </div>
        </Section>
    )
}