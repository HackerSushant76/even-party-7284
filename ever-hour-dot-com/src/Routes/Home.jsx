import { Box } from "@chakra-ui/react";
import { FirstSection } from "../Components/FirstSection";
import { FourthSection } from "../Components/FourthSection";
import { SecondSection } from "../Components/SecondSection";
import { ThirdSection } from "../Components/ThirdSection";

export function Home(){
    return (
        <Box>
            <FirstSection/>
            <br />
            <SecondSection/>
            <br />
            <ThirdSection/>
            <br />
            <FourthSection/>
        </Box>
    )
}