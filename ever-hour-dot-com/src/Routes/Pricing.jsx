import { Box, Heading, Text } from "@chakra-ui/react";
import { FifthSection } from "../Components/FifthSection";

export function Pricing(){
    return (
        <Box >
            <Heading size ="2xl" mb="30px" mt="60px">Simple pricing with no extra fees</Heading>
            <Text className="text">Start with no commitment. Try everything. Subscribe if you love it.</Text>
            <br />
            <br />
            <FifthSection/>
        </Box>
    )
}