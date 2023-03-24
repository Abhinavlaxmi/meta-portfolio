import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abhinav Jaiswal";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <VStack spacing={4}>
            <Avatar size="2xl" src="https://pbs.twimg.com/profile_images/1478138764333502464/ygaSOGJ-_400x400.jpg" />
            <Heading size="xl" color="white">
                {greeting}
            </Heading>
            <Heading size="md" color="white">
                {bio1}
            </Heading>
            <Heading size="md" color="white">
                {bio2}
            </Heading>
        </VStack>

    </FullScreenSection>
);

export default LandingSection;
