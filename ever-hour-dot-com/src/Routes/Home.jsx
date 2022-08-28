import { Box } from "@chakra-ui/react";
import { FifthSection } from "../Components/FifthSection";
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
            <br />
            <FifthSection/>
        </Box>
    )
}