import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import '../App.css'

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
];
export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      overflow="hidden"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0px 20px 0px",
        overflow: "hidden",
        backgroundColor: "#C6ACC9",
      }}
    >
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            sx={{
              color: "white",
              fontSize: "2rem",
              fontFamily: '"Montez", "cursive"',
            }}
          >
            {messages[messageIndex]}
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}
