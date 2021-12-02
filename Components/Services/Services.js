import { useState } from "react";
import {
    Button,
    ButtonIcon,
    ButtonSpan,
    Container,
    Section,
    SectionSubtitle,
    SectionTitle
} from "../../Global/GlobalStyle";
import {
    ServicesContainer,
    ServicesContent,
    ServicesIcon,
    ServicesTitle,
    ServicesButton,
    ServicesModal,
    ServicesModalContent,
    ServicesModalTitle,
    ServicesModalClose,
    ServicesModalServices,
    ServicesModalService,
    ServicesModalIcon,
} from "./styledServices";

export const Services = ({ data }) => {
    const [active, setActive] = useState(false);

    const handleActive = (index) => {
        if (active === index) {
            return setActive(null);
        };

        setActive(index);
    };

    return (
        <Section id="services">
            <SectionTitle>Services</SectionTitle>
            <SectionSubtitle>What I offer</SectionSubtitle>

            <Container>
                <ServicesContainer>
                    {data.map((service, index) => (
                        <ServicesContent key={index}>
                            <div>
                                <ServicesIcon>
                                    <i className={`${service.icon}`}></i>
                                </ServicesIcon>
                                <ServicesTitle>
                                    {service.title} <br />
                                    {service.profession}
                                </ServicesTitle>
                            </div>

                            <Button
                                onClick={() => handleActive(index)}
                                link
                            >
                                <ServicesButton>
                                    <ButtonSpan>{service.buttonText}</ButtonSpan>
                                    <ButtonIcon>
                                        <i className="uil uil-arrow-right"></i>
                                    </ButtonIcon>
                                </ServicesButton>
                            </Button>

                            <ServicesModal active={active === index}>
                                <ServicesModalContent>
                                    <ServicesModalTitle>
                                        {service.title} <br />
                                        {service.profession}
                                    </ServicesModalTitle>
                                    <ServicesModalClose>
                                        <i className="uil uil-times" onClick={() => setActive(false)}></i>
                                    </ServicesModalClose>
                                    <ServicesModalServices>
                                        {service.service.map((item, i) => (
                                            <ServicesModalService key={i}>
                                                <ServicesModalIcon>
                                                    <i className="uil uil-check-circle"></i>
                                                </ServicesModalIcon>
                                                <p>{item}</p>
                                            </ServicesModalService>
                                        ))}
                                    </ServicesModalServices>
                                </ServicesModalContent>
                            </ServicesModal>
                        </ServicesContent>
                    ))}
                </ServicesContainer>
            </Container>
        </Section>
    );
};