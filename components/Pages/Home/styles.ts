import tw from "tailwind-styled-components";

export const Container = tw.div`pt-10 bg-terminal-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`
export const SubContainer = tw.div`mx-auto max-w-7xl lg:px-8`
export const GridContainer = tw.div`lg:grid lg:grid-cols-2 lg:gap-8`
export const Heading = tw.h1`mt-4 text-4xl tracking-tight font-sans font-extrabold text-white sm:mt-5 
sm:text-6xl lg:mt-6 xl:text-6xl`
export const Subheading = tw.h2`mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-mono`
export const SmallText = tw.p`mt-3 text-sm text-gray-300 sm:mt-4 font-mono`
export const PrimaryHighlight = tw.span`text-terminal-600`
export const PrimaryBadgeText = tw.span`px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase 
tracking-wide bg-terminal-600 rounded-full`
export const InputContainer = tw.div`min-w-0 flex-1`
export const Email = tw.input`block w-full px-4 py-3 rounded-semi border-0 text-base text-terminal-900
    placeholder-terminal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terminal-300 
    focus:ring-offset-terminal-900 font-mono`
export const ButtonContainer = tw.div`mt-3 sm:mt-0 sm:ml-3`
export const PrimaryButton = tw.button`block w-full py-3 px-4 rounded-semi shadow bg-terminal-600 text-white font-medium 
    hover:bg-terminal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terminal-300 
    focus:ring-offset-terminal-900`
export const PrimaryBadge = tw.a`inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base 
    lg:text-sm xl:text-base hover:text-gray-200`
export const IllustrationContainer = tw.div`mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0`
export const Illustration = tw.img`w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none`
export const FormContainer = tw.div`mt-10 sm:mt-12`
export const Form = tw.form`sm:max-w-xl sm:mx-auto lg:mx-0`
export const PrimaryLinkText = tw.a`font-medium text-terminal-700 underline`
export const LeftGridContainer = tw.div`mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left 
    lg:flex lg:items-center`
export const RightGridContainer = tw.div`mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative`
