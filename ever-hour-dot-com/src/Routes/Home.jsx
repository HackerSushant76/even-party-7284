import { Box } from "@chakra-ui/react";
import { FirstSection } from "../Components/FirstSection";
import { SecondSection } from "../Components/SecondSection";

export function Home(){
    return (
        <Box>
            <FirstSection/>
            <br />
            <SecondSection/>
        </Box>
    )
}