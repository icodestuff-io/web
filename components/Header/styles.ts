import tw from "tailwind-styled-components"

export const Container = tw.div`bg-terminal-900 pt-6`
export const HeaderContainer = tw.div`relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6`
export const ButtonContainer = tw.div`hidden md:flex md:items-center md:space-x-6`
export const PlainButton = tw.a`text-base font-medium text-terminal-600 hover:text-terminal-700`
export const PrimaryButton = tw.a`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium
    rounded-semi text-white bg-terminal-600 hover:bg-terminal-700`
export const HeaderLink = tw.a`text-base font-medium text-terminal-100 hover:text-terminal-200`
export const HeaderLinkContainer = tw.div`hidden space-x-8 md:flex md:ml-10`
export const MobileContainer = tw.div`rounded-lg shadow-md bg-terminal-900 ring-1 ring-black ring-opacity-5 overflow-hidden`
export const MobileHeaderLink = tw.a`block px-3 py-2 rounded-md text-base font-medium text-terminal-100 hover:bg-terminal-600`
export const MobilePrimaryButton = tw.a`block text-center w-full py-3 px-4 rounded-md shadow bg-terminal-600 text-terminal-100 font-medium hover:bg-terminal-700`
export const Logo = tw.img`h-8 w-auto md:h-12`
export const MobileFooter = tw.div`mt-6 px-5`
export const MobileFooterText = tw.p`text-center text-base font-medium text-terminal-100`
export const PrimaryLink = tw.a`text-terminal-600 hover:underline`;
export const MobileButtonContainer = tw.div`mt-6 px-5`;
export const MobileHeaderLinkContainer = tw.div`px-2 space-y-1`;
export const MobileLogoContainer = tw.div`px-5 pt-4 flex items-center justify-between`
export const MobileActionContainer = tw.div`pt-5 pb-6`
export const XButtonContainer = tw.div`-mr-2 flex items-center md:hidden`
export const LogoContainer = tw.div`flex items-center justify-between w-full md:w-auto`
export const ActionContainer = tw.div`flex items-center flex-1`