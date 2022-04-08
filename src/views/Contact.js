import { ButtonCyan } from "../components/Buttons";
import { Section, Input } from "../components/Layout";
import { ExpandableLabel } from "../components/Labels"
import { Display } from "../components/Text"
import copyToClipBoard from "../scripts/copyToClipBoard";

export default function Contact(){
    return (
        <Section 
            id="contact"
            bg="images/bg/home.png"
            className="
                bg-cover bg-no-repeat bg-fixed border-t bg-[center_bottom_-2rem] animate-bgSlideUp
                dark:border-slate-600"
        >
            <div className="w-fit">
                <Display>Hablemos</Display>
                <p className="mb-10">Puede escribirme un mensaje o hechar un vistazo a mis redes sociales.</p>
                <div className="grid grid-rows-2 grid-cols-2 gap-x-4 mb-4">
                    <Input
                        title="Asunto (opcional)"
                        type="text"
                    />
                    <Input
                        title="Correo electrónico"
                        className="row-start-2 row-end-3"
                        type="email"
                    />
                    <Input
                        title="Mensaje"
                        className="col-start-2 col-end-3 row-span-2"
                        type="textarea"
                    />
                </div>
                <ButtonCyan>Enviar mensaje</ButtonCyan>
            </div>
            <div className="max-w-[2.375rem] grid grid-flow-row gap-4">
                <ExpandableLabel
                    icon="bx bx-envelope"
                    content="jorge_soriaw@outlook.com"
                    link="mailto:jorge_soriaw@outlook.com"
                    iconF="bx bx-copy"
                    onClick={ copyToClipBoard }
                />
                <ExpandableLabel
                    icon="bx bxl-linkedin-square"
                    content="/in/jorgesoriax"
                    link="https://www.linkedin.com/in/jorgesoriax/"
                >
                </ExpandableLabel>
                <ExpandableLabel
                    icon="bx bxl-dribbble"
                    content="/jorgesoriax"
                    link="https://dribbble.com/jorgesoriax"
                >
                </ExpandableLabel>
                <ExpandableLabel
                    icon="bx bxl-github"
                    content="/jorgesoriax"
                    link="https://github.com/jorgesoriax"
                >
                </ExpandableLabel>
            </div>
        </Section>
    )
}