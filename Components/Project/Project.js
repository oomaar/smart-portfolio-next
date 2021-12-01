import { Button, ButtonIcon, ButtonSpan, Container, Section } from "../../Global/GlobalStyle";
import {
    ProjectBackground,
    ProjectContainer,
    ProjectData,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
} from "./styledProject";

export const Project = () => {
    return (
        <Section>
            <ProjectBackground>
                <Container>
                    <ProjectContainer>
                        <ProjectData>
                            <ProjectTitle>You have a new project !</ProjectTitle>
                            <ProjectSubtitle>
                                Let's do it now.
                            </ProjectSubtitle>
                            <Button href="#contact" flex white>
                                <ButtonSpan>Contact Me</ButtonSpan>
                                <ButtonIcon>
                                    <i className="uil uil-message"></i>
                                </ButtonIcon>
                            </Button>
                        </ProjectData>
                        <ProjectImage src="/img/project-2.png" alt="Project img" />
                    </ProjectContainer>
                </Container>
            </ProjectBackground>
        </Section>
    );
};