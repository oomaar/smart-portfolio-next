import { ButtonIcon, Container, Section, SectionSubtitle, SectionTitle } from "../../Global/GlobalStyle";
import { setHeight } from "../../utils";
import {
    ContactContainer,
    ContactInformarion,
    ContactIcon,
    ContactTitle,
    ContactSubtitle,
    ContactForm,
    ContactInputs,
    ContactInputBox,
    ContactLabel,
    ContactInput,
    ContactTextArea,
    SubmitForm,
} from "./styledContact";

export const Contact = ({ data }) => {
    const sendMessage = e => {
        e.preventDefault();
        // Firebase code goes here
    };

    return (
        <Section id="contact">
            <SectionTitle>Contact Me</SectionTitle>
            <SectionSubtitle>Get in touch</SectionSubtitle>
            <Container>
                <ContactContainer>
                    <div>
                        <ContactInformarion>
                            <ContactIcon>
                                <i className="uil uil-phone"></i>
                            </ContactIcon>
                            <div>
                                <ContactTitle>Call ME</ContactTitle>
                                <ContactSubtitle>{data.phone}</ContactSubtitle>
                            </div>
                        </ContactInformarion>
                        <ContactInformarion>
                            <ContactIcon>
                                <i className="uil uil-envelope"></i>
                            </ContactIcon>

                            <div>
                                <ContactTitle>Email</ContactTitle>
                                <ContactSubtitle>{data.email}</ContactSubtitle>
                            </div>
                        </ContactInformarion>
                        <ContactInformarion>
                            <ContactIcon>
                                <i className="uil uil-map-marker"></i>
                            </ContactIcon>

                            <div>
                                <ContactTitle>Location</ContactTitle>
                                <ContactSubtitle>{data.location}</ContactSubtitle>
                            </div>
                        </ContactInformarion>
                    </div>
                    <ContactForm action="" onSubmit={sendMessage}>
                        <ContactInputs>
                            <ContactInputBox>
                                <ContactLabel>Name</ContactLabel>
                                <ContactInput type="text" />
                            </ContactInputBox>
                            <ContactInputBox>
                                <ContactLabel>Email</ContactLabel>
                                <ContactInput type="email" />
                            </ContactInputBox>
                        </ContactInputs>
                        <ContactInputBox>
                            <ContactLabel>Project</ContactLabel>
                            <ContactInput type="text" />
                        </ContactInputBox>
                        <ContactInputBox>
                            <ContactLabel>Message</ContactLabel>
                            <ContactTextArea
                                cols="0"
                                rows="7"
                                onChange={e => setHeight(e, '100px')}
                            ></ContactTextArea>
                        </ContactInputBox>
                        <div>
                            <SubmitForm type="submit" flex>
                                Send Message
                                <ButtonIcon>
                                    <i className="uil uil-message"></i>
                                </ButtonIcon>
                            </SubmitForm>
                        </div>
                    </ContactForm>
                </ContactContainer>
            </Container>
        </Section>
    );
};