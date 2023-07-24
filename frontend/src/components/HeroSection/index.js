import React, { useState } from "react";
// import { Button } from "react-scroll";
import Video from "./car.mp4";
import { ButtonT } from "./ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop style={{opacity:"60%"}}   src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
        <span style={{  color: "white",
                        fontFamily: "'Bungee', cursive",
                        fontSize: "larger",
                        fontWeight: 20,
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        WebkitTextStroke: "5px black",
                         }}>Booking a Car @ ur Finger Tips </span>
        </HeroH1>
        <HeroP>
          Book your favourite car in very low price and enjoy the ride.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonT
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={() => {
              window.scrollTo({ top: 570, behavior: "smooth" });
            }}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonT>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
