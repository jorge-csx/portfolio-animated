import { ButtonCyan } from "../components/Buttons";
import { Section, Input } from "../components/Layout";
import { IconLabel, ExpandableLabel } from "../components/Labels"
import { Display } from "../components/Text"

export default function Contact(){
    return (
        <Section id="contact">
            <div className="w-fit">
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
                <ButtonCyan>Enviar mensaje</ButtonCyan>
            </div>
            <div className="max-w-[2.375rem] grid grid-flow-row gap-4">
                <ExpandableLabel
                    icon="bx bx-envelope"
                    title="jorge_soriaw@outlook.com"
                    link="mailto:jorge_soriaw@outlook.com"
                    iconF="bx bx-copy"
                    clipboard="y"
                />
                <ExpandableLabel
                    icon="bx bxl-linkedin-square"
                    title="/in/jorgesoriax"
                    link="https://www.linkedin.com/in/jorgesoriax/"
                >
                </ExpandableLabel>
                <ExpandableLabel
                    icon="bx bxl-dribbble"
                    title="/jorgesoriax"
                    link="https://dribbble.com/jorgesoriax"
                >
                </ExpandableLabel>
                <ExpandableLabel
                    icon="bx bxl-github"
                    title="/jorgesoriax"
                    link="https://github.com/jorgesoriax"
                >
                </ExpandableLabel>
            </div>
        </Section>
    )
}