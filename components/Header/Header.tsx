import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Fragment, FunctionComponent, useState } from "react";
import { ActionContainer, ButtonContainer, Container, HeaderContainer, HeaderLink, HeaderLinkContainer, Logo, LogoContainer, MobileActionContainer, MobileButtonContainer, MobileContainer, MobileFooter, MobileFooterText, MobileHeaderLink, MobileHeaderLinkContainer, MobileLogoContainer, MobilePrimaryButton, PlainButton, PrimaryButton, PrimaryLink, XButtonContainer } from "./styles";

const Header: FunctionComponent = () => {
    const [showMobile, setShowMobile] = useState<boolean>(false);

    const navigation = [
        { name: 'Inspiration', href: '#' }, // Inspiration,
        { name: 'Learn', href: '#' }, // Snippets, Courses, Tutorials
        { name: 'Company', href: '#' }, // Company: About us, Blog,
        { name: 'Legal', href: '#' }, // Legal: Privacy, Terms, Cookies
    ];

    return (
        <Popover as="header" className="relative">
            <Container>
                <HeaderContainer>
                    <ActionContainer>
                        <LogoContainer>
                            <Logo src="/images/logo.png" alt="logo"/>
                            <XButtonContainer>
                                <Popover.Button className="bg-terminal-900 rounded-md p-2 inline-flex items-center justify-center text-terminal-400 hover:bg-terminal-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </XButtonContainer>
                        </LogoContainer>
                        <HeaderLinkContainer>
                            {navigation.map((item) => (
                                <HeaderLink key={item.name} href={item.href}>
                                    {item.name}
                                </HeaderLink>
                            ))}
                        </HeaderLinkContainer>
                    </ActionContainer>
                    <ButtonContainer>
                        <PlainButton href="#">
                            Log in
                        </PlainButton>
                        <PrimaryButton href="#">
                            Get Started
                        </PrimaryButton>
                    </ButtonContainer>
                </HeaderContainer>
            </Container>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                    <MobileContainer>
                        <MobileLogoContainer>
                            <Logo src="/images/logo.png" alt="logo"/>
                            <div className="-mr-2">
                                <Popover.Button className="bg-terminal-900 rounded-md p-2 inline-flex items-center justify-center text-terminal-400 hover:bg-terminal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terminal-600">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </MobileLogoContainer>
                        <MobileActionContainer>
                            <MobileHeaderLinkContainer>
                                {navigation.map((item) => (
                                    <MobileHeaderLink key={item.name} href={item.href}>
                                        {item.name}
                                    </MobileHeaderLink>
                                ))}
                            </MobileHeaderLinkContainer>
                            <MobileButtonContainer>
                                <MobilePrimaryButton href="#">
                                    Get Started
                                </MobilePrimaryButton>
                            </MobileButtonContainer>
                            <MobileFooter>
                                <MobileFooterText>
                                    Existing user?{' '}
                                    <PrimaryLink href="#">
                                        Login
                                    </PrimaryLink>
                                </MobileFooterText>
                            </MobileFooter>
                        </MobileActionContainer>
                    </MobileContainer>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default Header;