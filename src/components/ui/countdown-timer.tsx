import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { toZonedTime } from "date-fns-tz";

interface CountdownTimerProps {
  targetDateTime: string | undefined; // ISO string or any valid Date string
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateTime }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const timezone = "America/New_York"; // EST/EDT time zone

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetUTC = toZonedTime(new Date(targetDateTime!), timezone); // Convert target to EST
      const difference = targetUTC.getTime() - now.getTime();

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
  }, [targetDateTime, timezone]);

  return (
    <Box p={4} textAlign="center" maxW="sm">
      <Text fontSize="2xl" color="teal.500">
        Unlocks in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </Text>
    </Box>
  );
};

export default CountdownTimer;
