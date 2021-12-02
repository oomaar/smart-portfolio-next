import {
    Button,
    Section,
    SectionSubtitle,
    SectionTitle,
    ButtonIcon,
    Container,
    ButtonSpan
} from "../../Global/GlobalStyle";
import {
    AboutContainer,
    AboutImage,
    AboutDescription,
    AboutBtns,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <SectionSubtitle>My introduction</SectionSubtitle>

            <Container>
                <AboutContainer>
                    <AboutImage src={data.image} alt="About Me" />
                    <div>
                        <AboutDescription>{data.bio}</AboutDescription>

                        <AboutBtns>
                            <Button
                                download={true}
                                href="/pdf/Omar Hassan-CV2021.pdf"
                                flex
                            >
                                <ButtonSpan>Download CV</ButtonSpan>
                                <ButtonIcon>
                                    <i className="uil uil-download-alt"></i>
                                </ButtonIcon>
                            </Button>
                        </AboutBtns>
                    </div>
                </AboutContainer>
            </Container>
        </Section>
    );
};