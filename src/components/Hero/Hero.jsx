import React from "react";
import { HeroContainer, ImageContainer, TextContainer } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <p>
          Your one stop shop for all your favorite heroes ( and vilains) action
          figures!
        </p>
      </TextContainer>
      <ImageContainer>
        <img src="images/hero.png" alt="" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
