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
  Stack,
} from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { FaLock } from "react-icons/fa";
import { ColorModeButton } from "./components/ui/color-mode";
import CountdownTimer from "./components/ui/countdown-timer";
import data from "./data";

export default function App() {
  return (
    <>
      <Container maxW="4xl" textAlign="center" fontSize="xl" pt="5vh">
        <VStack gap="8">
          <Heading size="4xl" letterSpacing="tight">
            No Settlers Left Behind
          </Heading>

          <Text>
            We swim together as a guild, solo. You are going to be artificially
            "gated" by the SOLO progress of ALL other participating players with
            a time based unlock in case people are busy, irl, etc.
          </Text>
          <Text>
            What this means is that we will need to help out our fellow guild
            mates with gear, leveling, etc in order to help them solo the
            content behind each gate to unlock the next one. There will be two
            gates open at all time.
          </Text>
          <AccordionRoot variant="enclosed" multiple>
            {data.map((item, index) => (
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
                  <Text textStyle="lg">{item.text}</Text>
                  <Box borderWidth="2px" p="5px">
                    <Text>Completion Requirements</Text>
                    <Text textStyle="md">
                      <ul>
                        {item.requirments.map((req) => (
                          <li>{req}</li>
                        ))}
                      </ul>
                    </Text>
                  </Box>
                  <Stack
                    mt="5px"
                    direction="row"
                    w="full"
                    justifyContent="center"
                  >
                    <Box borderWidth="2px" p="5px">
                      <Text>Settlers Progressing</Text>
                      <Text textStyle="md">
                        <ul>
                          {item.incomplete.map((person) => (
                            <li>{person}</li>
                          ))}
                        </ul>
                      </Text>
                    </Box>
                    <Box borderWidth="2px" p="5px">
                      <Text>Settlers Done</Text>
                      <Text textStyle="md">
                        <ul>
                          {item.done.map((person) => (
                            <li>{person}</li>
                          ))}
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
  );
}
