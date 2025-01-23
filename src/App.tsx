import {
  Box,
  ClientOnly,
  Heading,
  Skeleton,
  VStack,
  Container,
  Text,
  Icon,
  AbsoluteCenter,
  Stack
} from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { FaLock } from "react-icons/fa";
import { ColorModeButton } from "./components/ui/color-mode"
import CountdownTimer from "./components/ui/countdown-timer";

export default function App() {
  return (
    <>
    <Container maxW="4xl" textAlign="center" fontSize="xl" pt="5vh">
      <VStack gap="8">
        <Heading size="4xl" letterSpacing="tight">
          No Settlers Left Behind
        </Heading>

        <Text>Let's fucking gooooooo random sub text here, I don't know maybe I'll put a blurb about what the league is all about. Right now I just want to test a big blob of text.</Text>
        <AccordionRoot variant="enclosed" multiple>
          {items.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <Box position="relative">
                <AccordionItemTrigger>
                <Icon fontSize="2xl" color="teal.500">
                  <FaLock />
                </Icon>
                  {item.title}
                  
                </AccordionItemTrigger>
                <AbsoluteCenter axis="vertical" insetEnd="30px">
                  <CountdownTimer targetDateTime={item.unlockTime} />
                </AbsoluteCenter>
              </Box>
              <AccordionItemContent>
                <Text textStyle="lg">The Crimson Gate unlocks the ability to progress through the campaign, do white maps, and outside map activeites up to area level 72.</Text>
                <Box borderWidth="2px" p="5px">
                    <Text>Completion Requirements</Text>
                    <Text textStyle="md">
                      <ul>
                        <li>
                          Kill Kitava Solo
                        </li>
                        <li>
                          Complete a T5 White Map
                        </li>
                      </ul>
                    </Text>
                  </Box>
                <Stack mt="5px" direction="row" w="full" justifyContent="center">
                  <Box borderWidth="2px" p="5px">
                    <Text>Settlers Progressing</Text>
                    <Text textStyle="md">
                      <ul>
                        <li>
                          Jooblee
                        </li>
                        <li>
                          Alex
                        </li>
                        <li>
                          Switch
                        </li>
                      </ul>
                    </Text>
                  </Box>
                  <Box borderWidth="2px" p="5px">
                    <Text>Settlers Done</Text>
                    <Text textStyle="md">
                      <ul>
                        <li>
                          Star
                        </li>
                        <li>
                          Lion
                        </li>
                        <li>
                          Panda
                        </li>
                      </ul>
                    </Text>
                  </Box>
                </Stack>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </VStack>

      
    </Container>
    <Box pos="absolute" top="4" right="4">
      <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
        <ColorModeButton />
      </ClientOnly>
    </Box>
  </>
  )
}

const items = [
  { value: "a", title: "Happy Plains", text: "Some value 1...", unlockTime: "2025-01-23T23:00:00" },
  { value: "b", title: "Electric Slide", text: "Some value 2...", unlockTime: "2025-01-23T23:00:00"},
  { value: "c", title: "Crimson", text: "Some value 3...", unlockTime: "2025-01-26T23:00:00" },
  { value: "d", title: "Dino World", text: "Some value 1...", unlockTime: "2025-01-27T23:00:00" },
  { value: "e", title: "Squid Land", text: "Some value 2...", unlockTime: "2025-01-28T23:00:00" },
  { value: "f", title: "Brain", text: "Some value 3...", unlockTime: "2025-01-29T23:00:00" },
  { value: "g", title: "Even Squidlier", text: "Some value 3...", unlockTime: "2025-01-30T23:00:00" },
]