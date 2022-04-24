import Document from "../components/Document";
import { SideBar } from "../components/Layout";
import { Header, Title, Subtitle } from "../components/Text";
/**
 * @component
 * * ProjectAlternative
 * Este componente contiene información sobre el proyecto test
 */
export default function ProjectAlternative() {
    return (
        <Document>
            <article>
                <section>
                    <Header>
                        Header
                    </Header>
                    <Title>
                        Title
                    </Title>
                    <Subtitle>
                        Subtitle
                    </Subtitle>
                </section>
            </article>
        </Document>
    )
}