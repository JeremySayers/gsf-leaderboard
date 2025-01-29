import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CountdownTimerProps {
  targetEpoch: string | number; // ISO string or any valid Date string
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetEpoch }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetEpochDateTime = new Date(targetEpoch);
      const difference = targetEpochDateTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000); // Update every second
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetEpoch]);

  return (
    <Box p={4} textAlign="center" maxW="sm">
      <Text fontSize={["md", "lg", "xl"]} color="teal.500">
        Unlocks in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </Text>
    </Box>
  );
};

export default CountdownTimer;
