import Button from "../components/Button";
import { Section, Input } from "../components/Layout";
import { ExpandableLabel } from "../components/Labels"
import { Display } from "../components/Text"
import copyToClipBoard from "../scripts/copyToClipBoard";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
/**
 * @component
 * * Contact
 * Este componente es la vista contacto
 */
export default function Contact(){
    // Ref para el formulario a enviar
    const form = useRef()
    /**
     * @function sendEmail
     * Esta función se encarga de enviar un email
     */
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_cvfju4n", "template_di0ig9e", form.current, "KTqQqRgluGbWsLsGP")
            // .then((result) => {
            //     console.log(result.text)
            // }, (error) => {
            //     console.log(error.text)
            // })
            e.target.reset()
    }

    return (
        <Section 
            id="contact"
            bg="images/background/background.png"
            className="
                bg-cover bg-no-repeat bg-fixed border-t bg-[center_bottom_-2rem] animate-bgSlideUp
                dark:border-slate-600"
        >
            <div className="w-fit">
                <Display>Hablemos</Display>
                <p className="mb-10">Puede escribirme un mensaje o hechar un vistazo a mis redes sociales.</p>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid md:grid-rows-3 grid-cols-2 gap-x-4 mb-4">
                        <Input
                            title="Asunto"
                            className="col-start-1 col-end-3"
                            type="text"
                            name="subject"
                            content=""
                            placeholder="Ingrese asunto"
                        />
                        <Input
                            title="Nombre"
                            className="row-start-2 row-end-3"
                            type="text"
                            name="name"
                            placeholder="Ingrese su nombre"
                        />
                        <Input
                            title="Correo electrónico"
                            className="row-start-3 row-end-4"
                            type="email"
                            name="email"
                            placeholder="Ingrese su correo"
                        />
                        <Input
                            title="Mensaje"
                            className="col-start-2 col-end-3 row-span-2"
                            type="textarea"
                            name="message"
                            placeholder="Ingrese algo"
                        />
                    </div>
                    <Button
                        type="submit"
                        style="cta"
                    >
                        Enviar mensaje
                    </Button>
                </form>
            </div>
            <div className="md:max-w-[2.5rem] flex md:grid md:grid-flow-row gap-4">
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