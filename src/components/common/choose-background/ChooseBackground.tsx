import { FC, ReactNode } from "react";

import Background from "../background/Background";
import LeftBackground from "../left-background/LeftBackground";
import RightBackground from "../right-background/RightBackground";
import { TBackground } from "../../../types";
interface Props {
  backgroundType: TBackground;
  backgroundImage?: string;
  children: ReactNode;
}

const ChooseBackground: FC<Props> = (props) => {
  switch (true) {
    case props.backgroundType === "background":
      return (
        <Background backgroundImage={props.backgroundImage}>
          {props.children}
        </Background>
      );
    case props.backgroundType === "leftbackground":
      return (
        <LeftBackground backgroundImage={props.backgroundImage}>
          {props.children}
        </LeftBackground>
      );
    case props.backgroundType === "rightbackground":
      return (
        <RightBackground backgroundImage={props.backgroundImage}>
          {props.children}
        </RightBackground>
      );
    case props.backgroundType === "nonebackground":
      return <Background>{props.children}</Background>;
    default:
      return <Background>{props.children}</Background>;
  }
};

export default ChooseBackground;
