import { FunctionComponent } from "react";
import {
    Container,
    SubContainer,
    GridContainer,
    Heading,
    Subheading,
    SmallText,
    PrimaryHighlight,
    PrimaryBadgeText,
    PrimaryButton,
    InputContainer,
    Email,
    ButtonContainer,
    PrimaryBadge,
    Illustration,
    IllustrationContainer,
    FormContainer,
    Form,
    PrimaryLinkText,
    LeftGridContainer,
    RightGridContainer
} from "./styles";
import {ChevronRightIcon} from "@heroicons/react/solid";

const HomePage:FunctionComponent = () => {
    return (
        <Container>
                <SubContainer>
                    <GridContainer>
                        <LeftGridContainer>
                            <div className="lg:py-24">
                                <PrimaryBadge href="#">
                                    <PrimaryBadgeText>
                                        Coming Soon
                                    </PrimaryBadgeText>
                                    <span className="ml-4 text-sm font-mono">Early Access</span>
                                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true"/>
                                </PrimaryBadge>
                                <Heading>
                                    Find <PrimaryHighlight>inspiration </PrimaryHighlight>
                                    for your next <PrimaryHighlight>project</PrimaryHighlight>
                                </Heading>
                                <Subheading>
                                    Icodestuff provides a way for developers, designers and founders to
                                    collaborate and draw inspiration from each other to work on cool & creative ideas.
                                </Subheading>
                                <FormContainer>
                                    <Form action="#">
                                        <div className="sm:flex">
                                            <InputContainer>
                                                <label htmlFor="email" className="sr-only">
                                                    Email address
                                                </label>
                                                <Email
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                />
                                            </InputContainer>
                                            <ButtonContainer>
                                                <PrimaryButton
                                                    type="submit"
                                                >
                                                    Join Waitlist
                                                </PrimaryButton>
                                            </ButtonContainer>
                                        </div>
                                        <SmallText>
                                            We care about the protection of your data. Read our {' '}
                                            <PrimaryLinkText href="#">Privacy Policy</PrimaryLinkText>.
                                        </SmallText>
                                    </Form>
                                </FormContainer>
                            </div>
                        </LeftGridContainer>
                        <RightGridContainer>
                            <IllustrationContainer>
                                <Illustration src="/images/illustration.svg" alt="hummans illustration"/>
                            </IllustrationContainer>
                        </RightGridContainer>
                    </GridContainer>
                </SubContainer>
            </Container>
    )
}

export default HomePage;