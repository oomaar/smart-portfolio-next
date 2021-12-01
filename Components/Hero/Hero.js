import { BackgroundAnimation } from "..";
import { Button, ButtonIcon, Container, Section, ButtonSpan } from "../../Global/GlobalStyle";
import mainData from "../../Global/resumeData.json";
import {
    HomeContaier,
    HomeContent,
    HomeSocial,
    SocialIcon,
    HomeData,
    HomeTitle,
    HomeSubtitle,
    HomeDescription,
    HomeScroll,
    ScrollButton,
    ScrollMouse,
    ScrollButtonText,
} from "./styledHero";

export const Hero = () => {
    const data = mainData.main;
    const network = data.social.map((network) => {
        return (
            <SocialIcon key={network.name} href={network.url} target="_blank">
                <i className={network.class}></i>
            </SocialIcon>
        )
    });

    return (
        <Section id="home">
            <Container>
                <HomeContaier>
                    <HomeContent>
                        <HomeSocial>
                            {network}
                        </HomeSocial>

                        <HomeData>
                            <HomeTitle>Hi, I'm {data.name}</HomeTitle>
                            <HomeSubtitle>{data.title}</HomeSubtitle>
                            <HomeDescription>{data.description}</HomeDescription>
                            <Button href="#contact" flex>
                                <ButtonSpan>Contact Me</ButtonSpan>
                                <ButtonIcon>
                                    <i className="uil uil-message"></i>
                                </ButtonIcon>
                            </Button>
                        </HomeData>

                        <div>
                            <BackgroundAnimation />
                        </div>
                    </HomeContent>

                    <HomeScroll>
                        <ScrollButton href="#about" flex>
                            <ScrollMouse>
                                <i className="uil uil-mouse-alt"></i>
                            </ScrollMouse>
                            <ScrollButtonText> Scroll down </ScrollButtonText>
                            <i className="uil uil-arrow-down"></i>
                        </ScrollButton>
                    </HomeScroll>
                </HomeContaier>
            </Container>
        </Section>
    );
};